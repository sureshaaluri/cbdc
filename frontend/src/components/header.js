import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    
  return (
    <div className="App">
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="/about">All Sample Buttons</Link>
        </li>
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
        <Link className="nav-link fw-bold text-white" to="/sendCurrency">Send-Amount</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fw-bold text-white" to="/receiverCheck">Check-Receiver-Amount</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  );
}

export default Header;
