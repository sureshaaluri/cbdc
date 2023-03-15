import React, { useState,useEffect } from 'react';
import ReactLoading from 'react-loading';

function NewAddress() {
  const API_URL = process.env.REACT_APP_API_MID_URL

  const [AddressDetails, setAddressDetails] = useState();
  const [resultDetails, setresultDetails] = useState();
  const [PatientDetails, setPatientDetails] = useState([]);
  const [ProviderName, setProviderName] = useState("");
  const [Loader , setLoader] = useState(false);
  let name,value;
  let getmempoolnumber;
let MempooolValue;
let getWalletnumber;
let WalletValue;
  function AddressDetailsInput(event){
          name = event.target.name;
          value = event.target.value;
          setAddressDetails({
            ...AddressDetails,
            [name] : value
        })
      }

      useEffect(() => {
        async function provInfo() {
    
            let userInfo    =   await fetch(API_URL+"/getMempoolWallet");
            let res         =   await userInfo.json();
            
            setPatientDetails(res.data)
          }
    
          provInfo();
          
      },[])
      // console.log('PatientDetails', PatientDetails)
    
      if( PatientDetails.length > 0){
        getmempoolnumber = PatientDetails[0].mempool.slice(7,PatientDetails[0].mempool.length-4);
        // console.log("PatientDetails "+JSON.stringify(parseInt(getmempoolnumber)+1))
        let numIncrease = parseInt(getmempoolnumber)+1;
        MempooolValue = "mempool"+numIncrease+".dat"
        // MempooolValue = "mempool"+1+".dat"
        
        getWalletnumber = PatientDetails[0].wallet.slice(6,PatientDetails[0].wallet.length-4);
        // console.log("PatientDetails "+JSON.stringify(parseInt(getWalletnumber)+1))
        let numIncrease1 = parseInt(getWalletnumber)+1;
            WalletValue = "wallet"+numIncrease1+".dat"
            // WalletValue = "wallet"+1+".dat"
        }
        else{
          MempooolValue = "mempool0.dat"
          WalletValue = "wallet0.dat"
        
        }
      
  const BalanceSubmit = async (e)=>{
    e.preventDefault();
    let mempool=MempooolValue;
    let wallet=WalletValue;
        const {name, password,email} = AddressDetails;

        setLoader(true);

        setProviderName(AddressDetails.name);

        // alert(mempool + wallet)
        const res = await fetch(API_URL+"/newAddress",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                name, password, mempool, wallet, email
            })
        })
    
        const data = await res.json();
        


        if(res.status == 201){
          setresultDetails(JSON.stringify(data));
          setLoader(false);
          setAddressDetails();
          // console.log('MintDetails1: ', MintDetails);
          
                let userInfo    =   await fetch(API_URL+"/getMempoolWallet");
                let res         =   await userInfo.json();
                
                setPatientDetails(res.data)
        }else if(res.status == 400){
          setLoader(false);
          alert("User Already register with mempool and wallet")
        }else{
          setLoader(false);
          alert("User not registered")
        }

  }
  
  return (
   
    <div className='pageBody'>
    <div className='row col-md-12'>

{Loader ? 
  <div className="row mt-3">
  <div className="col-md-6"></div>
  <div className="col-md-2 text-center">
    <ReactLoading type="spinningBubbles" color="#000000" height={50} width={50} />
    </div></div>
: null }


{resultDetails ?
      <div className="row mt-3">
                <div className="col-md-12 text-center">
      <h5>
      Account Created Successfully for Provider - {ProviderName}
     </h5>
     <h5>Balance : $0.00</h5>
      
      </div></div>
      
      :null}

        
      <div className="col-md-2"></div>
                <div className="col-md-8">
        <div className='container mt-5'>
        <h2>Service Provider</h2>
        <form method="post" >
        <div className="form-group mt-5">
            <label>Name:</label>
            <input type="text" className="inputFiled form-control" onChange={AddressDetailsInput} placeholder="Enter Name" name="name" value={AddressDetails?AddressDetails.name:''} />
            </div>
            <div className="form-group mt-3">
            <label>Password:</label>
            <input type="password" className="inputFiled form-control" onChange={AddressDetailsInput} placeholder="Enter Password" name="password" value={AddressDetails?AddressDetails.password:''} />
            </div>
            <div className="form-group mt-3">
            <label>Email:</label>
            <input type="email" className="inputFiled form-control" onChange={AddressDetailsInput} placeholder="Enter Email" name="email" value={AddressDetails?AddressDetails.email:''} />
            </div>
        <div className="form-group mt-3">
            <label>Mempool(eg:mempool1.dat):</label>
            <input type="string" className="inputFiled form-control" onChange={AddressDetailsInput} value={MempooolValue} placeholder="Enter Mempool" name="mempool" readOnly />
            </div>
            <div className="form-group mt-3">
            <label>Wallet(eg:wallet1.dat):</label>
            <input type="string" className="inputFiled form-control" onChange={AddressDetailsInput} value={WalletValue} placeholder="Enter Wallet" name="wallet" readOnly />
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
    
      </div>
      </div>
      
     );
}

export default NewAddress;
