import './Dashboard.css';





function Dashboard() {
  return (
   <div className = 'dashboard'>
     <div className = 'bar'>
       <header className="bar-title">
           <a href="/">Project</a>
       </header>
        <div className="bar-list">
            <ul>
                <li className="reg-li" ><a href="#"><img src=""/>Profile</a></li>
                <li className="active-li" ><a href="#"><img src=""/>Tracker</a></li>
            </ul> 
        </div>
     </div>
    <div className = "flex-holder">b
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
                            <button className = 'add-bullet'>Add Bullet</button>
                    </div>
                </div>
                <div className = 'content'>
                    <table>
                        <tr>
                            <th className = 'thDate'>Dates</th>
                            <th>Action</th>
                            <th>Impact</th>
                            <th>Functions</th>
                        </tr>
                        <tr className="task" data-id="1">
                            <td>May 30, 2021</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Delete</td>
                        </tr>
                        <tr className="task" data-id="2">
                            <td>Apr 18, 2021</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Delete</td>
                        </tr>
                        <tr className="task" data-id="3">
                            <td>Jun 4, 2020</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Delete</td>
                        </tr>
                        <tr className="task" data-id="4">
                            <td>Aug 21, 2021</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </td>
                            <td>Delete</td>
                        </tr>
                    </table>
                </div>  
            
            </div>   
    </div>


















       
   </div>
  );
}

export default Dashboard;
