import './bar.css';
import { Link, useHistory } from 'react-router-dom';


function Bar(props) {
    let users = props.props
  return (
    <div className = 'bar'>
            <header className="bar-title">
                <a href="/">Aim Assist</a>
            </header>
        <div className="bar-list">
            <ul>
            <Link to="/profile"><li className="reg-li" ><img src=""/>Profile</li></Link>
            <Link to='/dashboard'><li className="active-li" ><img src=""/>My Tracker</li></Link>

            {
                users.map((user, index)=>{
                    return(<Link to={{pathname:`/dashboard/${user.user_id}`, state: {user: user.user_id}}}><li className="reg-li" ><img src=""/>{`${user.first_name} ${user.last_name}`}</li></Link>)
                })

            }
            {/* <Link to="/"><li className="reg-li" ><img src=""/>Jordan Bullets</li></Link>
            <Link to="/"><li className="reg-li" ><img src=""/>Jacob Bullets</li></Link>
            <Link to="/"><li className="reg-li" ><img src=""/>Zach Bullets</li></Link>
            <Link to="/"><li className="reg-li" ><img src=""/>Jordan Bullets</li></Link> */}
            </ul> 
        </div>
    </div>


);
}

export default Bar;
