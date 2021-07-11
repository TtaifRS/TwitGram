import './login.css';

const LoginPage = () => {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">TwitGram</h3>
          <span className="loginDesc">Simply connect with the world</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create any Account?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
