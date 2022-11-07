import React, { useState } from 'react';

function NewAddress() {

  const [AddressDetails, setAddressDetails] = useState();
  const [resultDetails, setresultDetails] = useState();

  let name,value;
  function AddressDetailsInput(event){
          name = event.target.name;
          value = event.target.value;
          setAddressDetails({
            ...AddressDetails,
            [name] : value
        })
      }
      
  const BalanceSubmit = async (e)=>{
    e.preventDefault();
        const {name, mempool, wallet} = AddressDetails;
        // alert(mempool + wallet)
        const res = await fetch("/api/newAddress",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                name, mempool, wallet
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
        <h2>Service Provider</h2>
        <form method="post" >
        <div className="form-group mt-5">
            <label>Name:</label>
            <input type="text" className="form-control" onChange={AddressDetailsInput} placeholder="Enter Name" name="name" />
            </div>
        <div className="form-group mt-3">
            <label>Mempool(eg:mempool1.dat):</label>
            <input type="string" className="form-control" onChange={AddressDetailsInput} placeholder="Enter Mempool" name="mempool" />
            </div>
            <div className="form-group mt-3">
            <label>Wallet(eg:wallet1.dat):</label>
            <input type="string" className="form-control" onChange={AddressDetailsInput} placeholder="Enter Wallet" name="wallet" />
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button type="submit" onClick={BalanceSubmit} className="btn btn-primary">Create</button>
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

export default NewAddress;
