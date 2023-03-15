import React , {useEffect} from "react"
import { useLocation} from 'react-router-dom';
import { useHistory} from 'react-router-dom';

function Msg(){
    const history = useHistory();
    var location        =   useLocation();
 
        // alert(location.state.balance);
        useEffect( () => {
        setTimeout(
            function(){
                history.push({pathname:'/balance'})
            },3000);
        },[]);
    return (
<div className="row col-md-12 mt-5 text-center" style={{paddingBottom:"29%",height:"200px"}}>
                
      <h5>
      Balance Transfered Successfully 
     </h5>
     <h5>Balance ${location.state.balance} </h5>
      
      </div>
    );
}

export default Msg;

