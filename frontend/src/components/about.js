import React, { useState } from 'react';

function About() {
  
    const [getData,setData] = useState();

//   const AboutRes = async (e)=>{
//     e.preventDefault();
       
//         const res = await fetch("/api/about",{
//             method:"get"})
//         const data = await res.json();
//         setData(data.message);
//         // alert(JSON.stringify(data.message));
        
//   }

  const Exploit = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/exploit",{method:"get"})
       const data = await res.json();
        setData(JSON.stringify(data));
  }

  const Images = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/images",{method:"get"})
    const data = await res.json();
        setData(JSON.stringify(data));
  }

  const Ps = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/ps",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  const Network = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/network",{method:"get"}) 
    const data = await res.json();
    setData(JSON.stringify(data));
  }
  
  const Inspect = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/inspect",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  const Search = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/search",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  const LoginSuccess = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/loginSuccess",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  const LoginFail = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/loginFail",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }
  
  const Pull = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/pullLatest",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  const PullVersion = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/pullVersion",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  const Pullfake = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/pullfake",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  const Push = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/push",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  const PushFake = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/pushFake",{method:"get"})
    const data = await res.json();
    setData(JSON.stringify(data));
  }

  return (
    <div style={{paddingTop:"6%"}}>
    {/* <button onClick={AboutRes}>Click Me</button>
        <h1>{getData}</h1>    */}
    {/* <button className='btn btn-primary' style={{"margin":"5px"}} onClick={Exploit}>Exploit</button> */}
    <button className='btn btn-primary' style={{"margin":"5px"}} onClick={Images}>Docker Images</button>
    <button className='btn btn-primary' style={{"margin":"5px"}} onClick={Ps}>Docker Running images list</button>
    <button className='btn btn-primary' style={{"margin":"5px"}} onClick={Network}>Docker Network List</button>
    <button className='btn btn-primary' style={{"margin":"5px"}} onClick={Inspect}>Docker Inspect</button>
    <button className='btn btn-primary' style={{"margin":"5px"}} onClick={Search}>Docker Search</button>
    <button className='btn btn-success' style={{"margin":"5px"}} onClick={LoginSuccess}>Docker Login Success</button>
    <button className='btn btn-danger' style={{"margin":"5px"}} onClick={LoginFail}>Docker Login Fail</button>
    <button className='btn btn-success' style={{"margin":"5px"}} onClick={Pull}>Docker Pull Latest</button>
    <button className='btn btn-success' style={{"margin":"5px"}} onClick={PullVersion}>Docker Pull specific version</button>
    <button className='btn btn-danger' style={{"margin":"5px"}} onClick={Pullfake}>Docker Pull invalid image</button>
    <button className='btn btn-success' style={{"margin":"5px"}} onClick={Push}>Docker Push</button>
    <button className='btn btn-danger' style={{"margin":"5px"}} onClick={PushFake}>Docker Push Fake</button>
    
    <p>{getData}</p>
    </div>
     );
}

export default About;
