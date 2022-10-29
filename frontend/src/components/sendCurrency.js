import React, { useEffect, useState } from 'react';

function SendCurrency() {

  const [getCurrencyDetails, setCurrencyDetails] = useState();
  const [resultDetails, setresultDetails] = useState();
  const [ProviderDetails, setProviderDetails] = useState([{}]);

  let name,value;
  function currencyDetails(event){
          name = event.target.name;
          value = event.target.value;
          setCurrencyDetails({
            ...getCurrencyDetails,
            [name] : value
        })
      }

      useEffect(() => {
        async function provInfo() {

            let userInfo    =   await fetch("http://localhost:4000/getProvider");
            let res         =   await userInfo.json();
            // console.log('info',res);
            setProviderDetails(res.data)

        }

        provInfo();
        
    },[])

    // console.log("ProviderDetails "+JSON.stringify(ProviderDetails));

  const BalanceSubmit = async (e)=>{
    e.preventDefault();
        const {currency, toAccAddr,accAddr_patient,mempool_patient,wallet_patient,accAddr_InsAgent,mempool_InsAgent,wallet_InsAgent,amount_per_ins,amount_per_pat} = getCurrencyDetails;
        
        const res = await fetch("http://localhost:4000/sendCurrency",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                currency, toAccAddr,accAddr_patient,mempool_patient,wallet_patient,accAddr_InsAgent,mempool_InsAgent,wallet_InsAgent,amount_per_ins,amount_per_pat
            })
        })

        const data = await res.json();
        console.log(data);
        setresultDetails(JSON.stringify(data));
        console.log("resultDetails"+resultDetails);
  }
  
  return (
        <>
    
        <form method="post" >
        <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
        <div className='container mt-5'>
        <h1>Send Amount</h1>
        <div className="form-group mt-5">
            <label>Currency:</label>
            <input type="number" className="form-control" onChange={currencyDetails} placeholder="Enter Currency" name="currency" />
            </div>
            <div className="form-group mt-3">
            <label>Provider:</label>
            
            <select className="form-control" onChange={currencyDetails} name="toAccAddr">
            <option value="">Select Provider</option>
            {ProviderDetails.map(ProviderDetail => (
                <option key={ProviderDetail} value={ProviderDetail.AccountAddress}>{ProviderDetail.name} - {ProviderDetail.AccountAddress}</option>
                ))}
            
            </select>
            </div>
            </div>
            </div>
            </div>
            <br/><br/>
            <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>
            <h4>Patient Details:</h4>
            <div className="form-group mt-3">
            <label>Patient Account Address:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Account Address" name="accAddr_patient" />
            </div>
            <div className="form-group mt-3">
            <label>Amount Percentage:</label>
            <input type="number" className="form-control" onChange={currencyDetails} placeholder="Enter Amount Percentage" name="amount_per_pat" />
            </div>
            <div className="form-group mt-3">
            <label>From Account Mempool:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Mempool" name="mempool_patient" />
            </div>
            <div className="form-group mt-3">
            <label>From Account Wallet:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Wallet" name="wallet_patient" />
            </div>
            </div>
            <div className='col-md-4'>
            <h4>Insurance Agent Details:</h4>
            <div className="form-group mt-3">
            <label>Payor Account Address:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Account Address" name="accAddr_InsAgent" />
            </div>
            <div className="form-group mt-3">
            <label>Amount Percentage:</label>
            <input type="number" className="form-control" onChange={currencyDetails} placeholder="Enter Amount Percentage" name="amount_per_ins" />
            </div>
            <div className="form-group mt-3">
            <label>From Account Mempool:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Mempool" name="mempool_InsAgent" />
            </div>
            <div className="form-group mt-3">
            <label>From Account Wallet:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Wallet" name="wallet_InsAgent" />
            </div>
            </div>
            </div>
            
            
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button type="submit" onClick={BalanceSubmit} className="btn btn-primary">Send</button>
                </div>
            </div>
        </form>
        
      
      {resultDetails ?
      <div className="row mt-3">
                <div className="col-md-1"></div>
                <div className="col-md-10">
      <h5 style={{padding:"10px",border:"1px solid black"}}>{resultDetails}</h5>
      </div>
      <div className="col-md-1"></div>
      </div>
      : null}
      
      </>
     );
}

export default SendCurrency;
