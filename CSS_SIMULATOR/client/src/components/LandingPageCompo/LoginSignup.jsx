import { useState } from "react";
import "./LoginSignup.css";
import {ModalContext} from './Form/ModalProvider';
import { useContext } from "react";
import {createUser, login, onLogout} from "../../services/users";

const LoginSignup = () => {
  const [active, setActive] = useState(true); // ✅ Default to Sign-Up page

  // const {active, setActive} = useContext(ModalContext);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login-signup-wrapper">
      <div className={`container ${active ? "active" : ""}`}>
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            {/* <div className="social-icons">
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div> */}
            <span>or use your email for registration</span>
            <div className="flex gap-[10px]">
              <input type="text" placeholder="First Name" name="fname" />
              <input type="text" placeholder="Last Name" name="lname"/>
            </div>
            
            <input type="text" placeholder="Username" name="username"/>
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form>
            <h1>Login</h1>
            {/* <div className="social-icons">
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div> */}
            <span>or use your email password</span>
            <input type="text" placeholder="Username" name="username"/>
            <input type="password" placeholder="Password" name="password"/>
            <a href="#">Forgot Your Password?</a>
            <button type="button">Login</button>
          </form>
        </div>

        {/* Toggle Panels */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Already have an account ?</p>
              <button onClick={() => setActive(false)}>Login</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Welcome !</h1>
              <p>Don't have an account ?</p>
              <button onClick={() => setActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;