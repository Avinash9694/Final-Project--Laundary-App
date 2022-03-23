import React from 'react';
import { Link } from "react-router-dom";
import "./Alert.css";
import OrderHistory from './OrderHistory';
import Header from './Header.js';
import alert from "./image/alert.png";

const Alert=()=>{
   
return(
    <div>
        
        <div><Header/></div>
        
        <div className='Ordershistory'> <OrderHistory/> </div>
        <div className='alert-white-box'></div>
        <div className='Alert-box'></div>
        <div className='Alert'>Alert</div>
        <div className='Proceed-box'></div>
        <Link to="/" className='Proceed'>
            Proceed
        </Link>

<div className='Text'>Are you sure you want to cancel the order no: OR00001</div>
<div><img className='Alert-icon' src={alert} alt="alert"></img></div>
<Link to="/" className='x'>X</Link>

</div>
)
}

export default Alert