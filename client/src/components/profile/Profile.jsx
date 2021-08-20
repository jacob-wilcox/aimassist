import { Link, useHistory } from 'react-router-dom';
import React, {useEffect, useState}  from "react";
import UserInfo from './UserInfo.jsx'

import './profile.css';
import Bar from '../bar/bar.jsx';
import axios from "axios";




function Profile(props) {

const [curUserSubs, setCurUserSubs] = useState([])

// FOLLOW ON TO MVP
// useEffect(()=> {
//     fetch(`http://localhost:3001/my-subordinates/1`)
//         .then(res => res.json())
//         .then(jsonData => setCurUserSubs(jsonData))
// }, [curUserSubs])


const [user, setUser] = useState([])
useEffect(() => {
    axios.get('http://localhost:3001/user/1')
    .then((response) => {
        setUser(response.data[0]);
    });
  }, []);




  return (
   <div className = 'dashboard-2'>
       <Bar props={curUserSubs}/>
    <div className = "flex-holder">
            <div className = 'body-wrap'>
                <div className = 'body-title'>
                    My Profile
                </div>
                
            </div>

            <div className = 'content-wrap'>
                <div className = 'content'>
                    
                <UserInfo props={user}/>
                </div>
                
            
            </div>   
    </div>




       
   </div>
  );
}

export default Profile;
