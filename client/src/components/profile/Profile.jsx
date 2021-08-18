import { Link, useHistory } from 'react-router-dom';


import './profile.css';
import Bar from '../bar/bar.jsx';



function Profile() {
  return (
   <div className = 'dashboard-2'>
       <Bar/>
    <div className = "flex-holder">
            <div className = 'body-wrap'>
                <div className = 'body-title'>
                    My Profile
                </div>
                
            </div>

            <div className = 'content-wrap'>
                <div className = 'content'>
                    
                    <div className = 'login-form'>
                        <div className="form-group">
                                        <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                        <label for="name">ID / Referal code:</label>
                        </div>
                        <div className="form-group">
                                        <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                        <label for="name">First Name:</label>
                        </div>
                        <div className="form-group">
                                        <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                        <label for="name">Last Name:</label>
                        </div>
                        <div className="form-group">
                                        <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                        <label for="name">Supervisor:</label>
                        </div>
                        <div className="form-group">
                                        <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                        <label for="name">Password:</label>
                        </div>
                        <Link to="/dashboard"><button className="login-btn">Submit update</button></Link>
                    </div>

                </div>
                <div className = 'content-wrap'>
                    <div className = 'content'>
                        <table>
                            <tr>
                                <th className = 'thDate'>My Airmen</th>
                                <th>Functions</th>
                            </tr>
                            <tr className="task" data-id="1">
                                <td>First & Last Names</td>
                                <td><a href="#">Delete</a></td>
                            </tr>
                            <tr className="task" data-id="2">
                                <td>First & Last Names</td>
                                <td><a href="#">Delete</a></td>
                            </tr>
                            <tr className="task" data-id="3">
                                <td>First & Last Names</td>
                                <td><a href="#">Delete</a></td>
                            </tr>
                            <tr className="task" data-id="4">
                                <td>First & Last Names</td>
                                <td><a href="#">Delete</a></td>
                            </tr>
                        </table>
                    </div> 
                </div>   
            
            </div>   
    </div>




       
   </div>
  );
}

export default Profile;
