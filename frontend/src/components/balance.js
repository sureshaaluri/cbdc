import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ReactLoading from 'react-loading';


function Balance() {

  const API_URL = process.env.REACT_APP_API_MID_URL
  const [BalanceDetails, setBalanceDetails] = useState();
  const [resultDetails, setresultDetails] = useState();
  const [Details, setDetails] = useState([{}]);
  const [Loader, setLoader] = useState(false);
  const [getActualBalance, setActualBalance] = useState();
  
  let name,value;
  function BalanceDetailsInput(event){
          name = event.target.name;
          value = event.target.value;
          setBalanceDetails({
            ...BalanceDetails,
            [name] : value
        })
      }

     
      useEffect(() => {
        
        async function provInfo() {
            let userInfo    =   await fetch(API_URL+"/getAllAccounts");
            let res         =   await userInfo.json(); 
            setDetails(res.data);
            // console.log(JSON.stringify(res.data));
          }
          provInfo();
      },[])
      
  const BalanceSubmit = async (e)=>{
    e.preventDefault();
    setLoader(true);
        const {getMempoolWallet} = BalanceDetails;
        // alert(getMempoolWallet)
        const res = await fetch(API_URL+"/balance",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                getMempoolWallet
            })
        })
    
        const data = await res.json();
        
        
        if(res.status==200){
          setLoader(false);
          const totalBalance = data.data.object.balance;
        const SplitData = totalBalance.split(",");
        setActualBalance(SplitData);
          setresultDetails(JSON.stringify(data));
        }else if(res.status==400){
          alert("user not registered")
        }
  }
  
  return (
   
    <div className='pageBody'>
    <div className='row col-md-12' style={{paddingBottom:"13%"}}>

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
        <h1>Check Balance</h1>
        <form method="post" >
        <div className="form-group mt-5">

        <label>Select Account</label>
        
        <Select name="getMempoolWallet" onChange={(BalanceDetailsInput) => 
          {setBalanceDetails({...BalanceDetails, getMempoolWallet: BalanceDetailsInput.value})}}
              
          // options={Details.map(Detail => ({label: Detail.name +" - "+ Detail.AccountAddress , value: Detail.mempool+"-"+Detail.wallet}))}
          options={Details.map(Detail => ({label: Detail.name, value: Detail.mempool+"-"+Detail.wallet,required:true}))}
        />


            
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
          <div className="col-md-10" >
          <h5 style={{padding:"10px",border:"1px solid black"}}>Wallet Balance : {getActualBalance[0]}</h5>
          <h5 style={{padding:"10px",border:"1px solid black"}}>{getActualBalance[1]}</h5>
          <h5 style={{padding:"10px",border:"1px solid black"}}>{getActualBalance[2]}</h5>
          </div></div>
      : null}
      </div>
      </div>
      
     );
}

export default Balance;
