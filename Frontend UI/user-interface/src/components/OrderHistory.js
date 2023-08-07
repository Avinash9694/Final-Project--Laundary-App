import React from 'react';
import { Link } from "react-router-dom";
import "./OrderHistory.css";
import "./image"
// import axios from 'axios';


const OrderHistory=()=>{
    // const[post,setPost] = useState([])
    // React.useEffect(() => {
    // axios.get('http://localhost:5000/signin').then( res => {
    //     console.log(res)
    //     setPost(res.data)
    // })
    // },[]);
return(
<div className='body'>
<div className='navbar'>  
</div>
<div className='create-box'></div>
<div className='create'>
<Link to="/create">
    Create
</Link>
</div>
    <div className='orderId'>Order Id</div>
    <div className='orderDate'>Order Date & Time</div>
    <div className='storeL'>Store Location</div>
    <div className='city'>City</div>
    <div className='storeP'>Store phone</div>
    <div className='Items'>Total Items</div>
    <div className='price'>Price</div>
    <div className='status'>Status</div>
    <div className='view'>View</div> 
    
    
    
    
    </div>
)
}


export default OrderHistory;