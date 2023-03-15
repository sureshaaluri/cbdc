import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useHistory} from 'react-router-dom';

function SendCurrency() {

  const [getCurrencyDetails, setCurrencyDetails] = useState();
  const [resultDetails, setresultDetails] = useState();
  const [ProviderDetails, setProviderDetails] = useState([{}]);
  const [PatientDetails, setPatientDetails] = useState([{}]);
  const [InsuranceDetails, setInsuranceDetails] = useState([{}]);
  const [resultBalance, setResultBalance] = useState();

  const history = useHistory();
  let name,value;
  function currencyDetails(event){
          name = event.target.name;
          value = event.target.value;
          setCurrencyDetails({
            ...getCurrencyDetails,
            [name] : value
        })
      }
        // console.log("getCurrencyDetails "+JSON.stringify(getCurrencyDetails));
      useEffect(() => {
        async function provInfo() {

            let userInfo    =   await fetch("/api/getProvider");
            let res         =   await userInfo.json();
            // console.log('info',res);
            setProviderDetails(res.data)

            let PatientInfo    =   await fetch("/api/getPatient");
            let Patientres         =   await PatientInfo.json();
            // console.log('info',res);
            setPatientDetails(Patientres.data)

            let InsuranceInfo    =   await fetch("/api/getInsuranceAgent");
            let Insuranceres         =   await InsuranceInfo.json();
            // console.log('info',res);
            setInsuranceDetails(Insuranceres.data)
        }

        provInfo();
        
    },[])

    
  const BalanceSubmit = async (e)=>{
    e.preventDefault();
    // setPatientDetails([{}]);
        const {currency, toAccAddr,accAddr_patient,mempool_patient,wallet_patient,accAddr_InsAgent,mempool_InsAgent,wallet_InsAgent,amount_per_ins,amount_per_pat} = getCurrencyDetails;
       
        const res = await fetch("/api/sendCurrency",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                currency, toAccAddr,accAddr_patient,mempool_patient,wallet_patient,accAddr_InsAgent,mempool_InsAgent,wallet_InsAgent,amount_per_ins,amount_per_pat
            })
        })

        const data = await res.json();
        
        if(data){
          let resBal = parseFloat(currency/100)
          // alert(resBal);
        history.push({pathname:'/msg', state:{balance:resBal}})
          // await setCurrencyDetails();
          
          // console.log("setCurrencyDetails "+JSON.stringify(getCurrencyDetails))
          // let userInfo    =   await fetch("/api/getProvider");
          //   let res         =   await userInfo.json();
          //   setProviderDetails(res.data)

            // let PatientInfo    =   await fetch("/api/getPatient");
            // let Patientres     =   await PatientInfo.json();
            
            // setPatientDetails(Patientres.data)

            // let InsuranceInfo    =   await fetch("/api/getInsuranceAgent");
            // let Insuranceres         =   await InsuranceInfo.json();
            // setInsuranceDetails(Insuranceres.data)
            // setresultDetails(JSON.stringify(data));
            setResultBalance(parseFloat(currency/100));
              
            
            
        }

        
        
  }

  
  
  return (

    

        <>
    
    {/* {resultBalance ?
      <div className="row col-md-12 mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
      <h5>
      Balance Transfered Successfully 
     </h5>
     <h5>Balance ${resultBalance}</h5>
      
      </div></div>
      
      : null } */}

        <form method="post" >
        <div className='row col-md-12'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
        <div className='container mt-5'>
        <h1>Send Amount</h1>
        <div className="form-group mt-5">
            <label>Amount:</label>
            <input type="number" className="form-control" onChange={currencyDetails} placeholder="Enter Currency" name="currency" min="1" value={getCurrencyDetails?getCurrencyDetails.currency:''}/>
            </div>
            <div className="form-group mt-3">
            <label>Provider:</label>
            
            {/* <select className="form-control" onChange={currencyDetails} name="toAccAddr">
            <option value="">Select Provider</option>
            {ProviderDetails.map(ProviderDetail => (
                <option key={ProviderDetail} value={ProviderDetail.AccountAddress} selected={resultBalance?"":null}> {ProviderDetail.name} - {ProviderDetail.AccountAddress} </option>
                ))}
            
            </select> */}

            <Select name="toAccAddr" onChange={(selectedGroup) => 
                {setCurrencyDetails({...getCurrencyDetails, toAccAddr: selectedGroup.value})}}
               
                options={ProviderDetails.map(ProviderDetail => ({label: ProviderDetail.name +" - "+ ProviderDetail.AccountAddress , value:  ProviderDetail.AccountAddress,}))}
            />


            </div>
            </div>
            </div>
            </div>
            <br/><br/>
            <div className='row col-md-12'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>
            <h4>Patient Details:</h4>
            <div className="form-group mt-3">
            {/* <label>Patient Account Address:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Account Address" name="accAddr_patient" /> */}
            <label>Patient:</label>
            
            <Select name="accAddr_patient" onChange={(selectedGroup) => 
        {setCurrencyDetails({...getCurrencyDetails, accAddr_patient: selectedGroup.value})}}

        // options={{label:"select atient",value:'', selected:resultBalance?"":null}}

        
        options={PatientDetails.map(PatientDetail => ({label: PatientDetail.name +" - "+ PatientDetail.AccountAddress , value: PatientDetail.AccountAddress+"-"+PatientDetail.mempool+"-"+PatientDetail.wallet, selected:resultBalance?"":null}))}
      />

            
            </div>
            <div className="form-group mt-3">
            <label>Amount Percentage:</label>
            <input type="number" className="form-control" onChange={currencyDetails} placeholder="Enter Amount Percentage" name="amount_per_pat" min="1" value={getCurrencyDetails?getCurrencyDetails.amount_per_pat:''}/>
            </div>
            {/* <div className="form-group mt-3">
            <label>From Account Mempool:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Mempool" name="mempool_patient" />
            </div>
            <div className="form-group mt-3">
            <label>From Account Wallet:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Wallet" name="wallet_patient" />
            </div> */}
            </div>
            <div className='col-md-4'>
            <h4>Insurance Agent Details:</h4>
            <div className="form-group mt-3">
            <label>Payor Account Address:</label>
            <Select name="accAddr_InsAgent" onChange={(selectedGroup) => 
                {setCurrencyDetails({...getCurrencyDetails, accAddr_InsAgent: selectedGroup.value})}}
                    
                options={InsuranceDetails.map(InsuranceDetail => ({label: InsuranceDetail.name +" - "+ InsuranceDetail.AccountAddress , value: InsuranceDetail.AccountAddress+"-"+InsuranceDetail.mempool+"-"+InsuranceDetail.wallet}))}
            />

            {/* 
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Account Address" name="accAddr_InsAgent" /> */}
            </div>
            <div className="form-group mt-3">
            <label>Amount Percentage:</label>
            <input type="number" className="form-control" onChange={currencyDetails} placeholder="Enter Amount Percentage" name="amount_per_ins" min="1" value={getCurrencyDetails?getCurrencyDetails.amount_per_ins:''}/>
            </div>
            {/* <div className="form-group mt-3">
            <label>From Account Mempool:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Mempool" name="mempool_InsAgent" />
            </div>
            <div className="form-group mt-3">
            <label>From Account Wallet:</label>
            <input type="string" className="form-control" onChange={currencyDetails} placeholder="Enter Wallet" name="wallet_InsAgent" />
            </div> */}
            </div>
            </div>
            
            
            <div className="row col-md-12 mt-3">
                <div className="col-md-5"></div>
                <div className="col-md-4">
                    <button type="submit" onClick={BalanceSubmit} className="btn btn-primary">Send</button>
                </div>
            </div>
        </form>
        
      
      {/* {resultDetails ?
      <div className="row mt-3">
                <div className="col-md-1"></div>
                <div className="col-md-10">
      <h5 style={{padding:"10px",border:"1px solid black"}}>{resultDetails}</h5>
      </div>
      <div className="col-md-1"></div>
      </div>
      : null} */}
      
      </>
     );
}

export default SendCurrency;
