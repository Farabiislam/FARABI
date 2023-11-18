import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Login = () => {


  const { login } = useContext(AuthContext);

  const handleLogin = ()=>{
    login()
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <div className="_logo">
            <span>F</span>ARABI
          </div>
          <p>It's helps you connect and share with the people in your life</p>
          <span> Don`t have account ?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
