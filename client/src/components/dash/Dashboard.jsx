import { Link, useHistory} from 'react-router-dom';
import React, {useEffect, useState}  from "react";

import './Dashboard.css';
import Bar from '../bar/bar.jsx';
import Bullets from './bullets';

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//user profile is passed as a prop
const Dashboard = (props) => { 
    console.log('this is props', props)
    const [show, toggleShow] = useState(true);
    const [curUser, setCurUser] = useState({
        user_id: 1,
        first_name: "Joe",
        last_name: "Schmo",
        email: "1234@4567.com",
        password: "password!",
        my_super: null,
        is_super: true
    })
    const [curUserSubs, setCurUserSubs] = useState([])
    const [userOfShownBullets, setUserOfShownBullets] = useState(curUser)
    const [shownBullets, setShownBullets] = useState([])
    //fetch call for all sub
    //fetch call for all bullets && be able to change user id to collect users bullets
    // a function that can post a new bullet
   
    //get subordinates for current user and set cur user subs state 
    useEffect(()=> {
        fetch(`http://localhost:3001/my-subordinates/${curUser.user_id}`)
            .then(res => res.json())
            .then(jsonData => setCurUserSubs(jsonData))
    }, [curUser])

    //get list of bullets thats currently shown
    useEffect(() => {
        fetch(`http://localhost:3001/bullets/${userOfShownBullets.user_id}`)
        .then(res => res.json())
        .then(jsonData => setShownBullets(jsonData))
    }, [userOfShownBullets, curUser])

  return (
   <div className = 'dashboard'>
       <Bar props={curUserSubs}/>
    <div className = "flex-holder">
            <div className = 'body-wrap'>
                <div className = 'body-title'>
                    Tracker
                </div>
            </div>

            <div className = 'content-wrap'>
                <div className = 'content-holder'>
                    <div className="content-title-left">
                            <div className = 'content-title-main'>
                                {`${userOfShownBullets.first_name} ${userOfShownBullets.last_name}'s bullets`}
                            </div>
                            <div className = 'content-title-sub'>
                                {shownBullets.length}
                            </div>
                    </div>
                    <div className = 'content-title-right'>
                            <button  className = 'add-bullet' onClick={() => toggleShow(!show)}>Add Bullet</button>
                            {show &&  
                                <div  className = 'form-form'>
                                    <div className = 'login-form'>
                                        <div className="form-group">
                                                        <input className="form-control" type="date" id="date"  value="2021-08-18" min="2018-01-01" max="2022-12-31" />
                                                        <label for="date">Date:</label>
                                        </div>
                                        <div className="form-group">
                                                        <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                                        <label for="name">Action:</label>
                                        </div>
                                        <div className="form-group">
                                                        <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                                        <label for="name">Impact:</label>
                                        </div>
                                        <div className="form-group">
                                                        <input className="form-control" type="text" id="name" required minlength="1" maxlength="12" size="10" />
                                                        <label for="name">Results:</label>
                                        </div>
                                        <div class="form-btns">
                                            <Link to="/dashboard"><button className="login-btn">Submit</button></Link>
                                            <button  className = 'add-bullet' onClick={() => toggleShow(!show)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                
                            }


                    </div>
                </div>
                
               


                <div className = 'content'>
                    <table >
                        <tr>
                            <th className = 'thDate'>Dates</th>
                            <th>Action</th>
                            <th>Impact</th>
                            <th>Results</th>
                            <th>Feedback</th>
                        </tr>
                        <Bullets props={shownBullets}/>
                    </table>
                </div>  
            
            </div>   
    </div>
   </div>
  );
}



export default Dashboard;
