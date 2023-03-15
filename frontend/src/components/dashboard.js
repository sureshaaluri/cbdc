import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="text-center" style={{paddingBottom:"3.5%"}}>
      <h1 style={{"marginTop":"15%","marginBottom":"3%"}}>Welcome to CBDC</h1>
      <button style={{"marginBottom":"2%"}} className='btn-lg btn-primary'>
      <Link className="nav-link fw-bold text-white" to="/register">Register</Link></button>
      <hr style={{"margin":"0 20%"}}></hr>
      <button style={{"marginTop":"2%"}} className='btn-lg btn-success'><Link className="nav-link fw-bold text-white" to="/login">Login</Link></button>
    </div>
  );
}

export default Dashboard;
