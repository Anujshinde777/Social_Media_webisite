import "./Registration.scss";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation("/");
  };
  return (
    <>
      <div className="Registration">
        <div className="card">
          <div className="Left">
            <h1>Lama Social</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quo minima quae, qui vel aliquam minus. Libero vitae ipsa,
              similique corrupti ipsum nemo in quisquam cum amet animi dolorem
              natus?
            </p>
            <span>Let's Connect Your friend</span>
            <button onClick={handleNavigation}> Login</button>
          </div>
          <div className="Right">
            <h1>Registration</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="name" />
              <input type="Email" placeholder="Email" />

              <input type="password" placeholder="Password" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
