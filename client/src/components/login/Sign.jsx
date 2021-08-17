import '../navigation/stars.css';
import '../navigation/nav.css';
// <link rel="stylesheet" href="../../components/navigation/nav.css">
// <link rel="stylesheet" href="../../components/login/login.css">
// <link rel="stylesheet" href="../../components/navigation/stars.css">

function Sign() {
  return (
    <div className="Login">
    <body>
        <header class="header">
          <a href="" class="logo">Blimp</a>
        </header>
        <div>
            <div class="littlestars"></div>
            <div class="evenmorestars"></div>
        </div>
        <div class="container">
            <div class="login-form">
                <div class="title-wrapper">
                <div class="login-form-title">Sign Up</div>
                <div class="login-form-right"><a href="login.html">Log In</a></div>
                </div>
                <form>
                    <div class="login-wrapper">
                        <div class="form-group">
                            <select id="roles" name="roles">
                              <option value="" disabled selected>- Select Role</option>
                              <option value="airman">Airman</option>
                              <option value="supervisor">Supervisor</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" id="code" required minlength="1" maxlength="12" size="10" />
                            <label for="code">Invite Code:</label>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" id="fname" required minlength="1" maxlength="12" size="10" />
                            <label for="fname">First Name:</label>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" id="lname" required minlength="1" maxlength="12" size="10" />
                            <label for="lname">Last Name:</label>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                            <label for="name">Email:</label>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password"  id="myInput" required minlength="1" maxlength="20" size="10" />
                            <label for="password">Password:</label>
                        </div>    
                        <div class="form-group">
                            <input class="form-control" type="password"  id="myInput" required minlength="1" maxlength="20" size="10" />
                            <label for="password">Repeat Password:</label>
                        </div>    
                        <div class="checbkox-wrapper">
                            <button class="login-btn">Register</button>
                        </div>
                    </div>  
                </form>
            </div>
        </div>
    </body>
    </div>
  )
};

export default Sign;