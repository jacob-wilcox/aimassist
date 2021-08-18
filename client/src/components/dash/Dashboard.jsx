import { Link, useHistory } from 'react-router-dom';
import React from "react";

import './Dashboard.css';
import Bar from '../bar/bar.jsx';

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

const Dashboard = () => { 
    const [show, toggleShow] = React.useState(true);

  return (
   <div className = 'dashboard'>
       <Bar/>
    <div className = "flex-holder">
            <div className = 'body-wrap'>
                <div className = 'body-title'>
                    Tracker
                </div>
                <div className = 'body-search'>
                        <input type="text" id="body-search" placeholder="Search"/>
                </div>
            </div>

            <div className = 'content-wrap'>
                <div className = 'content-holder'>
                    <div className="content-title-left">
                            <div className = 'content-title-main'>
                                My Bullets
                            </div>
                            <div className = 'content-title-sub'>
                                44324 List Items
                            </div>
                    </div>
                    <div className = 'content-title-right'>
                            <select id="years" name="years">
                                <option value="2021">Select year 2021</option>
                                <option value="2020">Select year 2020</option>
                            </select>
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
                            <th>Functions</th>
                        </tr>
                        <tr className="task" data-id="1">
                            <td>May 30, 2021</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>We fucked!</td>
                            <td><a href="#">Delete</a></td>
                        </tr>
                        <tr className="task" data-id="2">
                            <td>Apr 18, 2021</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>We fucked!</td>
                            <td><a href="#">Delete</a></td>
                        </tr>
                        <tr className="task" data-id="3">
                            <td>Jun 4, 2020</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>We fucked!</td>
                            <td><a href="#">Delete</a></td>
                        </tr>
                        <tr className="task" data-id="4">
                            <td>Aug 21, 2021</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>We fucked!</td>
                            <td><a href="#">Delete</a></td>
                        </tr>
                    </table>
                </div>  
            
            </div>   
    </div>


















       
   </div>
  );
}



export default Dashboard;
