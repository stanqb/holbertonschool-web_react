import axios from 'axios';
import {
  useCallback, useEffect, useReducer,
} from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { APP_ACTIONS, appReducer, initialState } from './appReducer';

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
  courses: `${API_BASE_URL}/courses.json`,
};

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
  const [state, dispatch] = useReducer(appReducer, initialState);
  const {
    displayDrawer, user, notifications, courses,
  } = state;

  useEffect(() => {
    let isMounted = true;

    const fetchNotifications = async () => {
      try {
        const { data } = await axios.get(ENDPOINTS.notifications);
        if (isMounted) {
          dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, payload: normalizeNotifications(data) });
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
        const { data } = await axios.get(ENDPOINTS.courses);
        if (isMounted) {
          dispatch({ type: APP_ACTIONS.SET_COURSES, payload: toArray(data, 'courses') });
        }
      } catch (error) {
        logDevelopmentError(error);
      }
    };

    if (user.isLoggedIn) {
      fetchCourses();
    }

    return () => {
      isMounted = false;
    };
  }, [user.isLoggedIn]);

  const handleDisplayDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: true });
  }, []);

  const handleHideDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: false });
  }, []);

  const logIn = useCallback((email, password) => {
    dispatch({ type: APP_ACTIONS.LOGIN, payload: { email, password } });
  }, []);

  const logOut = useCallback(() => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    dispatch({ type: APP_ACTIONS.MARK_NOTIFICATION_READ, payload: id });
  }, []);

  return (
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
      <Header user={user} logOut={logOut} />
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
      <Footer user={user} />
    </div>
  );
}

export default App;
