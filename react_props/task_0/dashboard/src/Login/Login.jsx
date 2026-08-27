import './Login.css';

function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <div className="form">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">OK</button>
      </div>
    </div>
  );
}

export default Login;
