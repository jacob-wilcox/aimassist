import './login.css';
import '../navigation/stars.css';
import '../navigation/nav.css';



// <link rel="stylesheet" href="../../components/navigation/nav.css">
// <link rel="stylesheet" href="../../components/login/login.css">
// <link rel="stylesheet" href="../../components/navigation/stars.css">

function Login() {
  return (
    <div className="Login">
        <body>
            <header className="header">
              <a href="" className="logo">Blimp</a>
            </header>
                <div>
                    <div className="littlestars"></div>
                    <div className="evenmorestars"></div>
                </div>
            <div className="container">
                <div className="login-form">
                    <div className="title-wrapper">
                        <div className="login-form-title">Log In</div>
                        <div className="login-form-right"><a href="sign.html">Create account</a></div>
                    </div>
                    <form>
                        <div className="login-wrapper">
                            <div className="form-group">
                                <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                <label for="name">Login:</label>b
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password"  id="myInput" required minlength="1" maxlength="20" size="10" />
                                <label  onclick="myFunction()" type="click" for="password">Password:</label>
                            </div>    
                            <div className="checbkox-wrapper">
                                <button className="login-btn">Enter</button>
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