import { Link } from "react-router-dom";
import "./register.scss"
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left"> 
          <div className="_logo">
            <span>F</span>ARABI
          </div>
          <p>It's helps you connect and share with the people in your life</p>
          <span> Do you have an account ?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="e-mail" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register