import './login.css';
import '../navigation/stars.css';
import '../navigation/nav.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    // make a call for email and password
    //returns profile with id

  return (
    <div className="Login">
        <body>
            <header className="header">
              <a href="" className="logo">Aim Assist</a>
            </header>
                <div>
                    <div className="littlestars"></div>
                    <div className="evenmorestars"></div>
                </div>
            <div className="container">
                <div className="login-form">
                    <div className="title-wrapper">
                        <div className="login-form-title">Log In</div>
                        <div className="login-form-right"><Link to="/sign">Create account</Link></div>
                    </div>
                    <form>
                        <div className="login-wrapper">
                            <div className="form-group">
                                <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                <label for="name">Login:</label>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password"  id="myInput" required minlength="1" maxlength="20" size="10" />
                                <label  onclick="myFunction()" type="click" for="password">Password:</label>
                            </div>    
                            <div className="checkbox-wrapper">
                                {/* pass profile to dashboard */}
                                <Link to="/dashboard"><button className="login-btn">Enter</button></Link>
                                <div className="checkbox">
                                    <input className="custom-checkbox" type="checkbox" id="check-2" />
                                    <label for="check-2">Remember me</label>
                                </div>
                            </div>
                            <div className="login-links">
                                <div className="login-link-left"><a href="#">Forgot password?</a></div>
                            </div>
                        </div>  
                    </form>
                </div>
            </div>
        </body>
    </div>
  )
};

export default Login;