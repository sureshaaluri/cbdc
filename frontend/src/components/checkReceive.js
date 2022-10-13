import React, { useState } from 'react';

function Receiver() {

  const [BalanceDetails, setBalanceDetails] = useState();
  const [resultDetails, setresultDetails] = useState();

  let name,value;
  function receiverDetails(event){
          name = event.target.name;
          value = event.target.value;
          setBalanceDetails({
            ...BalanceDetails,
            [name] : value
        })
      }
      
  const BalanceSubmit = async (e)=>{
    
    e.preventDefault();
        const {mempool, wallet, importinput} = BalanceDetails;
        alert(mempool + wallet +importinput)
        const res = await fetch("http://localhost:4000/receiverBlnCheck",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                mempool, wallet, importinput
            })
        })
    
        const data = await res.json();
        setresultDetails(JSON.stringify(data));
  }
  
  return (
   
    <div className='row col-md-12'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
        <div className='container mt-5'>
        <h1>Check Balance</h1>
        <form method="post" >
        <div className="form-group mt-5">
            <label>Mempool(eg:mempool1.dat):</label>
            <input type="string" className="form-control" onChange={receiverDetails} placeholder="Enter Mempool" name="mempool" />
            </div>
            <div className="form-group mt-3">
            <label>Wallet(eg:wallet1.dat):</label>
            <input type="string" className="form-control" onChange={receiverDetails} placeholder="Enter Wallet" name="wallet" />
            </div>
            <div className="form-group mt-3">
            <label>importinput:</label>
            <input type="string" className="form-control" onChange={receiverDetails} placeholder="Enter Import Input" name="importinput" />
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button type="submit" onClick={BalanceSubmit} className="btn btn-primary">Check</button>
                </div>
            </div>
        </form>
        
      </div>
      </div>
      {resultDetails ?
      <div className="row mt-3">
                <div className="col-md-1"></div>
                <div className="col-md-10">
      <h5 style={{padding:"10px",border:"1px solid black"}}>{resultDetails}</h5>
      </div></div>
      : null}
      </div>
      
     );
}

export default Receiver;
