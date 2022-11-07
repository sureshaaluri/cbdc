import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Registration() {
  const history = useHistory();
  const [UserDetails, setUserDetails] = useState({})

  let name,value;
  function RegisterInput(event){
          name = event.target.name;
          value = event.target.value;
          setUserDetails({
            ...UserDetails,
            [name] : value
        })
      }
      
  const Register = async (e)=>{
    e.preventDefault();
        const {username,firstname,lastname,password} = UserDetails;
        
        const res = await fetch("/api/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                username,firstname,lastname,password
            })
        })
        const data = await res.json();
        if(res.status === 422 || !data )
        {
            window.alert("Fill all the fields");
        }else{
            window.alert("Registered Successfully");
            history.push("/login");
        }
  }
  
  return (
    <div style={{paddingTop:"6%"}}>
        <form method="post" >
        <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <label>User Name:</label>
                    <input type="text" className="form-control" id="username" onChange={RegisterInput} placeholder="Enter User Name" name="username" autoComplete="off" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <label>First Name:</label>
                    <input type="text" className="form-control" id="firstname" onChange={RegisterInput} placeholder="Enter First Name" name="firstname" autoComplete="off" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <label>Last Name:</label>
                    <input type="text" className="form-control" id="lastname" onChange={RegisterInput} placeholder="Enter Last Name" name="lastname" autoComplete="off" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <label>Password:</label>
                    <input type="password" className="form-control" id="password" onChange={RegisterInput} placeholder="Enter Password" name="password" autoComplete="off" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button type="submit" onClick={Register} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
      </div>
     );
}

export default Registration;
