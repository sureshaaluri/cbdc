import React, { useState } from 'react';

function SendCurrencyBkup() {

  const [getCurrencyDetails, setCurrencyDetails] = useState();
  const [resultDetails, setresultDetails] = useState();

  let name,value;
  function currencyDetails(event){
          name = event.target.name;
          value = event.target.value;
          setCurrencyDetails({
            ...getCurrencyDetails,
            [name] : value
        })
      }
      
  const BalanceSubmit = async (e)=>{
    e.preventDefault();
        const {currency, accAddr,mempool,wallet} = getCurrencyDetails;
        // alert(currency + accAddr)
        const res = await fetch("/api/sendCurrency",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                currency, accAddr,mempool,wallet
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
        <h1>Send Amount</h1>
        <form method="post" >
        <div className="form-group mt-5">
            <label>Currency:</label>
            <input type="number" className="form-control" onChange={currencyDetails} placeholder="Enter Currency" name="currency" />
            </div>
            <div className="form-group mt-3">
            <label>To Account Address:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Account Address" name="accAddr" />
            </div>
            <div className="form-group mt-3">
            <label>From Account Mempool(eg:mempool0.dat):</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Mempool" name="mempool" />
            </div>
            <div className="form-group mt-3">
            <label>From Account Wallet(eg:wallet0.dat):</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Wallet" name="wallet" />
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button type="submit" onClick={BalanceSubmit} className="btn btn-primary">Send</button>
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

export default SendCurrencyBkup;
