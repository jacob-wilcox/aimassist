import { Link, useHistory } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from "axios";

const UserInfo = (props) => {
  let id = props.props.user_id
  let first_name = props.props.first_name
  let last_name = props.props.last_name
  let email = props.props.email
  let is_super = props.props.is_super
  let password = props.props.password

  function getRole(is_super) {
    return (is_super ? "Supervisor" : "Airman");
  }

  const [updatedAt, setUpdatedAt] = useState([])
  const [name, setName] = useState('');
  const [lname, setLName] = useState('');
  const [mail, setMail] = useState('');
  const [pswd, setPswd] = useState('');

  
  

  const handleNewUser = (event) => {
    console.log('handle event worked')
    event.preventDefault()
   
      const userUpdate = {
        first_name: name,
        last_name: lname,
        email: email,
        password: pswd
      };

      axios.put('http://localhost:3001/edit/user/2', userUpdate)
          .then(response => setUpdatedAt(response.data.updatedAt));
  }
  
  return (
  
                    <div className = 'login-form'>
                      <form>
                        <div className="form-group">
                                        <input value={id} className="form-control" type="text" id="id" />
                                        <label for="id">ID / Referal code:</label>
                        </div>
                        
                        <div className="form-group">
                                        <input
                                        type="text" defaultValue={first_name} 
                                        onChange={(event) => {setName(event.target.value)}} 
                                        className="form-control" type="text" id="first_name" />
                                        <label for="first_name">First name</label>
                        </div>
                        <div className="form-group">
                                        <input defaultValue={last_name} 
                                         onChange={(event) => {setLName(event.target.value)}} 
                                        className="form-control" type="text" id="last_name"  />
                                        <label for="last_name">Last Name:</label>
                        </div>
                        <div className="form-group">
                                        <input defaultValue={email} 
                                         onChange={(event) => {setMail(event.target.value)}} 
                                        className="form-control" type="text" id="email"  />
                                        <label for="email">Email:</label>
                        </div>
                        <div className="form-group">
                                        <input defaultValue={password} 
                                         onChange={(event) => {setPswd(event.target.value)}} 
                                        className="form-control" type="text" id="name"  />
                                        <label for="password">Password:</label>
                        </div>
                        <div className="form-group">
                                        <select id="is_super" name="roles">
                                           <option value="{getRole(is_super)}" defaultValue>{getRole(is_super)}</option>
                                           <option value="{getRole(!is_super)}">{getRole(!is_super)}</option>
                                        </select> 
                        </div>
                        <Link to="/dashboard"><button onClick={(event) => {handleNewUser(event)}} className="login-btn">Submit update</button></Link>
                        </form>
                    </div>
  );
}

export default UserInfo;
