import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Registration() {
    const API_URL = process.env.REACT_APP_API_MID_URL
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
        
        const res = await fetch(API_URL+"/register",{
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
    <div className="pageBody">
    <div className="row col-md-12 mt-2">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h3>REGISTER</h3>
                </div>
            </div>
        <form method="post" >
        <div className="row col-md-12 mt-3">
        <div className="col-md-2"></div>
                <div className="col-md-8">
                    <label>User Name:</label>
                    <input type="text" className="inputFiled form-control" id="username" onChange={RegisterInput} placeholder="Enter User Name" name="username" autoComplete="off" />
                </div>
            </div>
            <div className="row col-md-12 mt-3">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                    <label>First Name:</label>
                    <input type="text" className="inputFiled form-control" id="firstname" onChange={RegisterInput} placeholder="Enter First Name" name="firstname" autoComplete="off" />
                </div>
            </div>
            <div className="row col-md-12 mt-3">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                    <label>Last Name:</label>
                    <input type="text" className="inputFiled form-control" id="lastname" onChange={RegisterInput} placeholder="Enter Last Name" name="lastname" autoComplete="off" />
                </div>
            </div>
            <div className="row col-md-12 mt-3">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                    <label>Password:</label>
                    <input type="password" className="inputFiled form-control" id="password" onChange={RegisterInput} placeholder="Enter Password" name="password" autoComplete="off" />
                </div>
            </div>
            <div className="row col-md-12 mt-3">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                    <button type="submit" onClick={Register} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
      </div>
     );
}

export default Registration;
