import React, { useState,useEffect } from 'react';
import { userInfoContext } from "./userContext";
import { useLocation} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import ReactLoading from 'react-loading';
import Select from 'react-select';

function AddWallet() {

  const API_URL = process.env.REACT_APP_API_MID_URL
const history =useHistory();
  const [MintDetails, setMintDetails] = useState();
  const [AccountDetails, setAccountDetails] = useState([]);
  const [Loader , setLoader] = useState(false);

  let name,value;
  function MintDetailsInput(event){
          name = event.target.name;
          value = event.target.value;
          setMintDetails({
            ...MintDetails,
            [name] : value
        })
        
      }


      useEffect(() => {
        if(MintDetails){
        async function provInfo() {

        if(MintDetails.slt_pat_agent === "patient"){

        let PatientInfo    =   await fetch(API_URL+"/getPatient");
        let Patientres         =   await PatientInfo.json();
        // console.log('info',res);
        setAccountDetails(Patientres.data)

      }else{


        let PatientInfo    =   await fetch(API_URL+"/getInsuranceAgent");
        let Patientres         =   await PatientInfo.json();
        // console.log('info',res);
        setAccountDetails(Patientres.data)
      }
        }
            provInfo();
    }
    },[MintDetails])

  const Mint = async (e)=>{
    e.preventDefault();
    setLoader(true);
    const { slt_pat_agent, accAddr, nOutputs, outputValue} = MintDetails;
    let splitValue = accAddr.split("-");
        
        let name = splitValue[4];
        let mempool = splitValue[1]
        let wallet = splitValue[2]
        let email = splitValue[3]
        let accountAddress = splitValue[0]
        
    const res = await fetch(API_URL+"/addWallet",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                name, slt_pat_agent,nOutputs, outputValue, mempool, wallet, accountAddress, email
            })
        })
        console.log("res ",res)
          if(res.status == 200){
            history.push({pathname:'/balance'})
          }else if(res.status == 422){
            setLoader(false);
            alert("Please fill the fields")
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
      <div className='col-md-2'></div>
        <div className='col-md-8'>
        <div className='container mt-5'>
        <h2>Patient / Insurer Accounts</h2>
        <form method="post">
        <div className="form-group mt-5">
            <label>Select:</label>
            <select className="form-control" onChange={MintDetailsInput} name="slt_pat_agent">
            <option value="" selected={MintDetails && MintDetails.slt_pat_agent === ""?"select":""}>Select</option>
            <option value="patient" selected={MintDetails && MintDetails.slt_pat_agent === "patient"?"select":""}>Patient</option>
            <option value="insurance_agent" selected={MintDetails && MintDetails.slt_pat_agent === "insurance_agent"?"selected":""}>Insurer</option>
            </select>
            </div>
            <div className="form-group mt-3">
            <label>Select Person:</label>
            <Select name="accAddr" onChange={(selectedGroup) => 
                {setMintDetails({...MintDetails, accAddr: selectedGroup.value})}}
                options={AccountDetails.map(AccountDetail => ({label: AccountDetail.name, value: AccountDetail.AccountAddress+'-'+AccountDetail.mempool+'-'+AccountDetail.wallet+'-'+AccountDetail.email+'-'+AccountDetail.name, }))}
            />
            </div>
            <div className="form-group mt-3">
            <label>UTXOs Input(Unspent Transaction Output):</label>
            <input type="number" className="form-control" onChange={MintDetailsInput} placeholder="Enter UTXOs Input" name="nOutputs" min="1" value={MintDetails?MintDetails.nOutputs:''} />
            </div>
            <div className="form-group mt-3">
            <label>Atomic Units(value per UTXO):</label>
            <input type="number" className="form-control" onChange={MintDetailsInput} placeholder="Enter Atomic Units" name="outputValue" min="1" value={MintDetails?MintDetails.outputValue:''} />
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
       
      </div>
      </div>
     );
}

export default AddWallet;
