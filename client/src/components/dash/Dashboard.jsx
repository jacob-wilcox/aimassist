import { Link, useHistory} from 'react-router-dom';
import React, {useEffect, useState}  from "react";

import './Dashboard.css';
import Bar from '../bar/bar.jsx';
import Bullets from './bullets';
import axios from 'axios';


//user profile is passed as a prop
const Dashboard = (props) => { 
    const [show, toggleShow] = useState(false);
    const [curUser, setCurUser] = useState({
        user_id: 1,
        first_name: "Jordan",
        last_name: "Tackett",
        email: "1234@4567.com",
        password: "password!",
        my_super: null,
        is_super: true
    })
    const [curUserSubs, setCurUserSubs] = useState([])
    const [userOfShownBullets, setUserOfShownBullets] = useState(curUser)
    const [shownBullets, setShownBullets] = useState([])
    


    //FOR ADDING A BULLET
    const [newDate, setNewDate] = useState('')
    const [newAction, setNewAction] = useState('')
    const [newImpact, setNewImpact] = useState('')
    const [newResult, setNewResult] = useState('')
    const [updateBullets, setUpdateBullets] = useState({})
    const [newFeedBack, setNewFeedBack] = useState('this wont be used')
    const [dataRes, setDataRes] = useState('')
    //get subordinates for current user and set cur user subs state 
    
    // FOLLOW ON FUNCTIONALITY TO LIST SUBORDINATES, NOT MVP
    // useEffect(()=> {
    //     fetch(`http://localhost:3001/my-subordinates/${curUser.user_id}`)
    //         .then(res => res.json())
    //         .then(jsonData => setCurUserSubs(jsonData))
    // }, [curUser])

    //get list of bullets thats currently shown
    useEffect(() => {
        fetch(`http://localhost:3001/bullets/${userOfShownBullets.user_id}`)
        .then(res => res.json())
        .then(jsonData => setShownBullets(jsonData))
    }, [userOfShownBullets, curUser, dataRes])

    const handleNewBullet = (event) => {
        event.preventDefault()
        const newBullet = {
            user_id: curUser.user_id,
            date: '2021-08-20',
            action: newAction, 
            impact: newImpact, 
            result: newResult,
            feedback: newFeedBack
        }
        console.log('This is the new bullets', newBullet)
        toggleShow(!show);
        
        axios.post('http://localhost:3001/new-bullet', newBullet)
            .then(response => {
                console.log("Logging response on line 66 " + response);
                console.log(response)
                setDataRes(response)
            }).catch(err => console.log('error: '+ err));
    } 


    const handleDelete = (event, bullet_id) => {
        event.preventDefault()
        console.log('This is the delete')
        
        
        axios.delete(`http://localhost:3001/delete-bullet/${bullet_id}`)
            .then(response => {
                console.log("Logging response on line 80 " + response);
                console.log(response)
                setDataRes(response)
            }).catch(err => console.log('error: '+ err));
    }
   


  return (
   <div className = 'dashboard'>
       <Bar props={curUserSubs}/>
    <div className = "flex-holder">
            <div className = 'body-wrap'>
                <div className = 'body-title'>
                    {`Welcome To Aim Assist ${curUser.first_name}`}
                </div>
            </div>

            <div className = 'content-wrap'>
                <div className = 'content-holder'>
                    <div className="content-title-left">
                            <div className = 'content-title-main'>
                                {`${userOfShownBullets.first_name} ${userOfShownBullets.last_name}'s Bullets`}
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
                                        <form>
                                        <div className="form-group">
                                                        <input className="form-control" type="text" id="date"  value="2021-08-20" min="2018-01-01" max="2022-12-31" onChange={(event) => {setNewDate(event.target.value)}}/>
                                                        <label for="date">Date:</label>
                                        </div>
                                        <div className="form-group">
                                                        <input className="form-control" type="text" id="name" required minlength="1"  size="10" onChange={(event) => {setNewAction(event.target.value)}}/>
                                                        <label for="name">Action:</label>
                                        </div>
                                        <div className="form-group">
                                                        <input className="form-control" type="text" id="name" required minlength="1"  size="10" onChange={(event) => {setNewImpact(event.target.value)}}/>
                                                        <label for="name">Impact:</label>
                                        </div>
                                        <div className="form-group">
                                                        <input className="form-control" type="text" id="name" required minlength="1"  size="10" onChange={(event)=>{setNewResult(event.target.value)}}/>
                                                        <label for="name">Results:</label>
                                        </div>
                                        <div class="form-btns">
                                            <Link to="/dashboard"><button className="login-btn" onClick={(event)=>{handleNewBullet(event)}}>Submit</button>
                                            </Link>
                                        </div>
                                        </form>
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
                        </tr>
                        <Bullets handleDelete={handleDelete} props={shownBullets}/>
                    </table>
                </div>  
            
            </div>   
    </div>
   </div>
  );
}



export default Dashboard;
