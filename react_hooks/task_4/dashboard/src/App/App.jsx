import axios from 'axios';
import {
  useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import newContext from '../Context/context';
import { getLatestNotification } from '../utils/utils';

const toArray = (data, key) => {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data[key])) return data[key];
  return [];
};

const normalizeNotifications = (data) => toArray(data, 'notifications').map((notification) => (
  notification.html
    ? { ...notification, html: { __html: getLatestNotification() } }
    : notification
));

const logDevelopmentError = (error) => {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.error(error);
  }
};

function App() {
  const defaultContext = useContext(newContext);
  const removedNotificationIds = useRef(new Set());
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(defaultContext.user);
  const [notifications, setNotifications] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchNotifications = async () => {
      try {
        const { data } = await axios.get('/notifications.json');
        if (isMounted) {
          setNotifications(normalizeNotifications(data).filter(
            (notification) => !removedNotificationIds.current.has(notification.id),
          ));
        }
      } catch (error) {
        logDevelopmentError(error);
      }
    };

    fetchNotifications();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchCourses = async () => {
      try {
        const { data } = await axios.get('/courses.json');
        if (isMounted) {
          setCourses(toArray(data, 'courses'));
        }
      } catch (error) {
        logDevelopmentError(error);
      }
    };

    if (user.isLoggedIn) {
      fetchCourses();
    } else {
      setCourses([]);
    }

    return () => {
      isMounted = false;
    };
  }, [user]);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  }, []);

  const logOut = useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    removedNotificationIds.current.add(id);
    setNotifications((prevNotifications) => prevNotifications.filter(
      (notification) => notification.id !== id,
    ));
  }, []);

  const contextValue = useMemo(() => ({ user, logOut }), [user, logOut]);

  return (
    <newContext.Provider value={contextValue}>
      <div className="App flex flex-col min-h-screen">
        <div className="root-notifications absolute top-0 right-0 w-5/6 max-[912px]:w-full">
          <Notifications
            notifications={notifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>
        <Header />
        {user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={courses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p className="sr-only">Holberton School News goes here</p>
          <p>
            ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?
          </p>
        </BodySection>
        <Footer />
      </div>
    </newContext.Provider>
  );
}

export default App;
