import React, { useState } from 'react';

function Mint() {

  const [MintDetails, setMintDetails] = useState();
  const [resultDetails, setresultDetails] = useState();

  let name,value;
  function MintDetailsInput(event){
          name = event.target.name;
          value = event.target.value;
          setMintDetails({
            ...MintDetails,
            [name] : value
        })
      }
      
  const Mint = async (e)=>{
    e.preventDefault();
        const {nOutputs, outputValue,mempool,wallet} = MintDetails;
        // alert(nOutputs + outputValue)
        const res = await fetch("http://localhost:4000/mint",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                nOutputs, outputValue,mempool,wallet
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
        <h1>Mint</h1>
        <form method="post" >
        <div className="form-group mt-5">
            <label>N Outputs:</label>
            <input type="number" className="form-control" onChange={MintDetailsInput} placeholder="Enter N Outputs" name="nOutputs" />
            </div>
            <div className="form-group mt-3">
            <label>Output Value:</label>
            <input type="number" className="form-control" onChange={MintDetailsInput} placeholder="Enter Output Value" name="outputValue" />
            </div>
            <div className="form-group mt-3">
            <label>Mempool(eg:mempool0.dat):</label>
            <input type="string" className="form-control" onChange={MintDetailsInput} placeholder="Enter Mempool" name="mempool" />
            </div>
            <div className="form-group mt-3">
            <label>Wallet(eg:wallet0.dat):</label>
            <input type="string" className="form-control" onChange={MintDetailsInput} placeholder="Enter Wallet" name="wallet" />
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button type="submit" onClick={Mint} className="btn btn-primary">Mint</button>
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

export default Mint;
