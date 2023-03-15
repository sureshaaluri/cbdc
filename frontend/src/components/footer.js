import React from 'react';
import Logo from '../assets/images/logo.png'
import '../assets/css/styles.css'

function Footer() {
  
  return (
    <div className="App" id="footer">

    <>
    <div className='row col-md-12 text-white text-center' style={{backgroundColor:"#c00" ,marginLeft:"0px"
    // bottom:"0px",position:"absolute"
    }}>

        <div className='col-md-4'>
            <img alt="CVS Health" src={Logo} height="80px" width="150px" />
            
        </div>

        <div className='col-md-4 pt-4'>
            <p>One CVS Drive, Woonsocket RI 02895</p>
        </div>

        <div className='col-md-4' style={{paddingLeft:"10%"}}>

        <a href="https://twitter.com/cvshealth" target="_blank"><i className="fa fa-twitter px-2 py-4 text-white"></i></a>

        <a href="https://www.facebook.com/CVSHealth" target="_blank"><i className="fa fa-facebook px-2 py-4 text-white"></i></a>

        
        <a href="https://www.youtube.com/CVSHealth" target="_blank"><i className="fa fa-youtube-play px-2 py-4 text-white"></i></a>
        <a href="https://www.linkedin.com/company/cvs-health" target="_blank"><i className="fa fa-linkedin px-2 py-4 text-white"></i></a>
        <a href="https://www.instagram.com/cvshealth/" target="_blank"><i className="fa fa-instagram px-2 py-4 text-white"></i></a>
        
        
        
        
        </div>

    </div>
    
</>

    </div>
    
  );
}

export default Footer;
