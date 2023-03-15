import React, { useState,useEffect } from 'react';
import { userInfoContext } from "./userContext";
import { useLocation} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import ReactLoading from 'react-loading';

function Mint() {
  const API_URL = process.env.REACT_APP_API_MID_URL
  const [MintDetails, setMintDetails] = useState();
  // const [balance, setBalance]
  const [resultDetails, setresultDetails] = useState();
  const [PatientDetails, setPatientDetails] = useState([]);
  const [resultBalance, setResultBalance] = useState();
  const[getname,setName] = useState("");
  const[Type,setType] = useState("");
  const [Loader , setLoader] = useState(false);
  const [getActualBalance, setActualBalance] = useState();

  let {userToken,setuserToken}       =   React.useContext(userInfoContext);
  const history = useHistory();
let getmempoolnumber;
let MempooolValue;
let getWalletnumber;
let WalletValue;

  var location        =   useLocation();
  React.useEffect( () => {
           
    if(location.state){

            setuserToken(location.state.token)
            
    }
  },[]);

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
    // MempooolValue = "mempool"+2+".dat"

getWalletnumber = PatientDetails[0].wallet.slice(6,PatientDetails[0].wallet.length-4);
// console.log("PatientDetails "+JSON.stringify(parseInt(getWalletnumber)+1))
let numIncrease1 = parseInt(getWalletnumber)+1;
    WalletValue = "wallet"+numIncrease1+".dat"
    // WalletValue = "wallet"+2+".dat"
}
else{
  MempooolValue = "mempool0.dat"
  WalletValue = "wallet0.dat"

}


  let name,value;
  function MintDetailsInput(event){
          name = event.target.name;
          value = event.target.value;
          setMintDetails({
            ...MintDetails,
            [name] : value
        })
      }
    //   console.log(MintDetails);
  const Mint = async (e)=>{
    e.preventDefault();
    setLoader(true);
    const mempool = MempooolValue;
    const wallet = WalletValue;
    
        const {name, slt_pat_agent, nOutputs, outputValue,password, email} = MintDetails;
        setResultBalance(parseFloat((nOutputs*outputValue)/100));
        setName(MintDetails.name)

        if(MintDetails.slt_pat_agent === "patient"){
          setType("Patient");
        }else{
          setType("Insurer");
        }
        
        const res = await fetch(API_URL+"/mint",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                name, slt_pat_agent,nOutputs, outputValue,mempool,wallet,password,email
            })
        })
    
        const data = await res.json();

        if(res.status == 200){
          

        const totalBalance = data.balancedata.object.balance;
        const SplitData = totalBalance.split(",");
        setActualBalance(SplitData);



          setresultDetails(JSON.stringify(data));
          setMintDetails();
          setLoader(false);
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
      Account Created Successfully for the {Type} - {getname}
     </h5>
     <h5>Balance {getActualBalance[0]}</h5>
      
      </div></div>
      
      : null }
      
      <div className='col-md-2'></div>
        <div className='col-md-8'>
        <div className='container mt-5'>
        <h2>Patient / Insurer Accounts</h2>
        <form method="post" >
        <div className="form-group mt-5">
            <label>Select:</label>
            <select className="inputFiled form-control" onChange={MintDetailsInput} name="slt_pat_agent">
            <option value="" selected={MintDetails && MintDetails.slt_pat_agent === ""?"select":""}>Select</option>
            <option value="patient" selected={MintDetails && MintDetails.slt_pat_agent === "patient"?"select":""}>Patient</option>
            <option value="insurance_agent" selected={MintDetails && MintDetails.slt_pat_agent === "insurance_agent"?"selected":""}>Insurer</option>
            </select>
            </div>
            <div className="form-group mt-3">
            <label>Name:</label>
            <input type="text" className="inputFiled form-control" onChange={MintDetailsInput} placeholder="Enter Name" name="name" value={MintDetails?MintDetails.name:''} />
            </div>
            <div className="form-group mt-3">
            <label>Password:</label>
            <input type="password" className="inputFiled form-control" onChange={MintDetailsInput} placeholder="Enter Password" name="password" value={MintDetails?MintDetails.password:''} />
            </div>
            <div className="form-group mt-3">
            <label>Email:</label>
            <input type="email" className="inputFiled form-control" onChange={MintDetailsInput} placeholder="Enter Email" name="email" value={MintDetails?MintDetails.email:''} />
            </div>
            <div className="form-group mt-3">
            <label>UTXOs Input(Unspent Transaction Output):</label>
            <input type="number" className="inputFiled form-control" onChange={MintDetailsInput} placeholder="Enter UTXOs Input" name="nOutputs" min="1" value={MintDetails?MintDetails.nOutputs:''} />
            </div>
            <div className="form-group mt-3">
            <label>Atomic Units(value per UTXO):</label>
            <input type="number" className="inputFiled form-control" onChange={MintDetailsInput} placeholder="Enter Atomic Units" name="outputValue" min="1" value={MintDetails?MintDetails.outputValue:''} />
            </div>
            <div className="form-group mt-3">
            <label>Mempool(eg:mempool0.dat):</label>
            <input type="string" className="inputFiled form-control" onChange={MintDetailsInput} value={MempooolValue} placeholder="Enter Mempool" name="mempool" readOnly/>
            </div>
            <div className="form-group mt-3">
            <label>Wallet(eg:wallet0.dat):</label>
            <input type="string" className="inputFiled form-control" onChange={MintDetailsInput} value={WalletValue} placeholder="Enter Wallet" name="wallet" readOnly/>
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

export default Mint;
