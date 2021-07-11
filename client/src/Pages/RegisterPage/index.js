import './register.css';

const RegisterPage = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">TwitGram</h3>
          <span className="registerDesc">Simply connect with the world</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
            />
            <input type="email" placeholder="Email" className="registerInput" />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>
            <button className="registerRegisterButton">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
