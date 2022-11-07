import React from 'react';
import { Link , useHistory} from 'react-router-dom';
import { userInfoContext } from "./userContext";

function Header() {
  let history = useHistory();
  let { userToken, setuserToken } = React.useContext(userInfoContext);

  React.useEffect( () => {

    // if userToken not exists redirecting to Login Form 
    if(!userToken){
        history.push('/')
      }
    else{
        
        history.push({pathname:'/mint', state:{token:userToken}})
    }

},[]);

async function logout(){
   
  window.location.href = "/";

 
}
    
  return (
    <div className="App">
    {userToken ? <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        {/* <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="/about">All Sample Buttons</Link>
        </li> */}
        <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="/mint">Mint</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="/balance">Balance</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="/newAddress">New Wallet</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="/sendCurrency">Patient Bill Payment</Link>
        </li>
        {/* <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="/receiverCheck">Check-Receiver-Amount</Link>
        </li> */}
        <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="" onClick={logout}>LOGOUT</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav> : null}
    

    </div>
  );
}

export default Header;
