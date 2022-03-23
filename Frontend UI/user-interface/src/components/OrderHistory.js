import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./OrderHistory.css";
import search from './image/search.svg';
import axios from 'axios';
import Header from './Header.js';


const OrderHistory=()=>{
    const[posts,setPost] = useState([])
    posts.cancelOrder="cancel order"
    React.useEffect(() => {
    axios.get('http://localhost:5000/details').then( res => {
        // console.log(res.data.presentOrders)
        setPost(res.data.presentOrders)
        
    })
    },[]);
    
    // console.log(posts)
return(
<div className='body'>
<div><Header/></div>
<div className='navbar'>  </div>
<div className='create-box'></div>

<Link to="/create" className='create'>
    Create
</Link>

<div className='orders'>Orders|0</div>

<img src={search} alt="search" className='image'></img>

<input type="text" className='input'/>

    <div className='orderid'>Order Id</div>
    <div className='orderdate'>Order Date & Time</div>
    
    <div className='city'>City</div>
    <div className='storeP'>Store phone</div>
    <div className='Items'>Total Items</div>
    <div className='price'>Price</div>
    <div className='status'>Status</div>
    <div className='view'>View</div> 
    
    
    <div className='storel'>Store Location</div>
    
    <div className='historybox'>
    {posts.map((post,idx) => {
        return (
            <div className='orderHistoryBox'>
            <div className='ORDERIDS'>OR0000{posts.length-idx}</div>

            <div className='postDateOrdered'>{post.dateOrdered}</div>
            <div className='postStoreLocation'>{post.storelocation}</div>
            <div className='postCity'>{post.city}</div>
            <div className='postTotalItems'>{post.totalitems}</div>
            <div className='postProductListPhone'>{post.storephone}</div>
            <div>{(posts.status === "ready to pickup")?<p></p>:<Link to="/cancel" className='cancel-order'>cancel order</Link>}</div>
            <div className='postProductListPrice'>{post.price}</div>
            <div className='postStatus'>{post.status}</div>
            <Link to="/view">
            <div className="fa-eye">&#128065;</div>
            </Link>
            </div>
        )})
    }
</div>
</div>
)
}

export default OrderHistory;