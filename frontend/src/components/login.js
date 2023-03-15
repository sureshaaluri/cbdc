import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../assets/css/styles.css';

function Login() {
    const API_URL = process.env.REACT_APP_API_MID_URL
  const history = useHistory();
  const [UserDetails, setUserDetails] = useState({
    username : "",
    password : ""
  })

  let name,value;
  function LoginInput(event)      {
          name = event.target.name;
          value = event.target.value;
          setUserDetails({
            ...UserDetails,
            [name] : value
        })
      }

  const Login = async (e)=>{
    e.preventDefault();
    const {username,password} = UserDetails;

    
    
    const res = await fetch(API_URL+"/login",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:  JSON.stringify({
            username,password

        })
        
    })
    const data = await res.json();
   
    if(res.status === 422 || !data )
    {
        window.alert("Fill all the fields");
    }else if(res.status == 423 || !data){
        window.alert("Login Details Incorrect");
        history.push("/login");
    }else{
        if(data.token){
            
            window.alert("Login Successfully");
            history.push({ pathname: '/mint', state: {token: data.token }});
        }
      
      
    }
  }
  
  return (
    <div className="pageBody">
        <form method="post" >
        <div className="row col-md-12 mt-2">
        <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h3>LOGIN</h3>
                </div>
            </div>
            <div className="row col-md-12 mt-2">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                    <label>Username:</label>
                    <input type="text" className="inputFiled form-control" onChange={LoginInput} id="username" placeholder="Enter Username" name="username" autoComplete="off" />
                </div>
            </div>
            <div className="row col-md-12 mt-2">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                    <label>Password:</label>
                    <input type="password" className="inputFiled form-control" onChange={LoginInput} id="password" placeholder="Enter password" name="password" autoComplete="off" />
                </div>
            </div>
            <div className="row col-md-12 mt-3">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                    <button type="submit" onClick={Login} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
      </div>
     );
}

export default Login;
