import { useContext } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const navigation = useNavigate();
  const { login } = useContext(AuthContext);
  const handlelogin = () => {
    login();
  };
  const handleRegisterClick = () => {
    navigation("/Register");
  };

  return (
    <div className="Login">
      <div className="card">
        <div className="Left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quo minima quae, qui vel aliquam minus. Libero vitae ipsa, similique
            corrupti ipsum nemo in quisquam cum amet animi dolorem natus?
          </p>
          <span>Don't Have an Account</span>
          <button onClick={handleRegisterClick}>Register</button>
        </div>
        <div className="Right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handlelogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
