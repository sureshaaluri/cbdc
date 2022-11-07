import React, { useState } from 'react';

function Balance() {

  const [BalanceDetails, setBalanceDetails] = useState();
  const [resultDetails, setresultDetails] = useState();

  let name,value;
  function BalanceDetailsInput(event){
          name = event.target.name;
          value = event.target.value;
          setBalanceDetails({
            ...BalanceDetails,
            [name] : value
        })
      }
      
  const BalanceSubmit = async (e)=>{
    e.preventDefault();
        const {mempool, wallet} = BalanceDetails;
        // alert(mempool + wallet)
        const res = await fetch("/api/balance",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                mempool, wallet
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
            <label>Mempool(eg:mempool0.dat):</label>
            <input type="string" className="form-control" onChange={BalanceDetailsInput} placeholder="Enter Mempool" name="mempool" />
            </div>
            <div className="form-group mt-3">
            <label>Wallet(eg:wallet0.dat):</label>
            <input type="string" className="form-control" onChange={BalanceDetailsInput} placeholder="Enter Wallet" name="wallet" />
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

export default Balance;
