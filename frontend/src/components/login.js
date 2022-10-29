import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Login() {
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
    
    const res = await fetch("http://localhost:4000/login",{
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
    }else if(res.status === 423 || !data){
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
    <div style={{paddingTop:"8%"}}>
        <form method="post" >
            <div className="row mt-2">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <label>Username:</label>
                    <input type="text" className="form-control" onChange={LoginInput} id="username" placeholder="Enter Username" name="username" autoComplete="off" />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <label>Password:</label>
                    <input type="password" className="form-control" onChange={LoginInput} id="password" placeholder="Enter password" name="password" autoComplete="off" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button type="submit" onClick={Login} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
      </div>
     );
}

export default Login;
