import { useState, useEffect } from "react";
import "./LoginSignup.css";
import {ModalContext} from './Form/ModalProvider';
import { useContext } from "react";
import {createUser, login, onLogout} from "../../services/users";
import { toast } from 'react-toastify';
import { useAsyncFn } from '../../hooks/useAsync';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate hook

const LoginSignup = () => {
  const [active, setActive] = useState(false); // ✅ Default to Sign-Up page

  // const {active, setActive} = useContext(ModalContext);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    console.log(loginPassword)
  }, [loginPassword])

  const createUserFn = useAsyncFn(createUser);
  const loginFn = useAsyncFn(login);
  const navigate = useNavigate(); // Initialize navigate

  function onUserRegister(e){
    e.preventDefault(); // Prevent default form submission
    console.log(fname, lname, username, password, email)
    createUserFn.execute({fname, lname, username, password, email})
    .then(user => {
      console.log(user)
      setFname("");
      setLname(""); 
      setUsername("");
      setPassword("");
      setEmail("");
      setActive(false);
      // createLocalUser(user);
      toast.success('User Registered successfully!', { position: 'top-right', autoClose: 3000 });
    })
    .catch(error => {
      console.error(error);
      toast.error(error);
    })
  }

  function onUserLogin(e){
    e.preventDefault(); // Prevent default form submission
    loginFn.execute({loginUsername, loginPassword})
    .then(user => {
      setLoginUsername("");
      setLoginPassword("");
      if (user) {
        // Navigate to /dashboard on successful login
        navigate("/dashboard");
      }
    })
    .catch(error => {
      toast.error(error);
    })
  }

  return (
    <div className="login-signup-wrapper">
      <div className={`container ${active ? "active" : ""}`}>
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={onUserRegister} >
            <h1>Create Account</h1>
            {/* <div className="social-icons">
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div> */}
            <span>or use your email for registration</span>
            <div className="flex gap-[10px]">
              <input required onChange={(e) => {setFname(e.target.value)}} value={fname} type="text" placeholder="First Name" name="fname" />
              <input required onChange={(e) => {setLname(e.target.value)}} value={lname} type="text" placeholder="Last Name" name="lname"/>
            </div> 
            
            <input required onChange={(e) => {setUsername(e.target.value)}} value={username} type="text" placeholder="Username" name="username"/>
            <input required onChange={(e) => {setEmail(e.target.value)}} value={email} type="email" placeholder="Email" name="email"/>
            <input required onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" placeholder="Password" name="password"/>
            <button disabled={createUserFn.loading} type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form onSubmit={onUserLogin} >
            <h1>Login</h1>
            {/* <div className="social-icons">
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="javascript:void(0);" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div> */}
            <span>or use your email password</span>
            <input required value={loginUsername} onChange={(e) => {setLoginUsername(e.target.value)}} type="text" placeholder="Username" name="username"/>
            <input required value={loginPassword} onChange={(e) => {setLoginPassword(e.target.value)}} type="password" placeholder="Password" name="password"/>
            <a href="#">Forgot Your Password?</a>
            <button disabled={loginFn.loading} type="submit">Login</button>
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