import React from 'react';
import { Link } from 'react-router-dom';

import "./Summary.css";
import OrderHistory from './OrderHistory';
import Header from './Header.js';

const Summary=()=>{
    // const[post,setPost] = useState([])
    // React.useEffect(() => {
    // axios.get('http://localhost:5000/details').then( res => {
    //     console.log(res)
    //     setPost(res.data)
    // })
    // },[]);
return(
    <div className='summary-box'>
        <div><Header/></div>
        <div className='Orderhistory'> <OrderHistory/> </div>
        <div className='ForOverlap'></div>
        <div className='box1'></div>
        <div className='box2'></div>
        <div className='box3'></div>
        <div className='box4'></div>
        <div className='summary'>Summary</div>
        <div className='order-details'>order details</div>
        <div className='Home'>Home</div>
        <div className='storeL'>store location</div>
        <div className='storeA'>store address</div>
        <div className='phone'>phone</div>
        <div className='address'></div>
        <div className='picked'>picked up</div>
        <div className='washed'>washed</div>
        <div className='ironed'>ironed</div>
        <div className='delivered'>Delivered</div>
        <div className='subT'>sub total:</div>
        <div className='charges'>Pickup charges:</div>
        <div className='total'>Total:</div>
        <Link to="/" className='cross'>X</Link>
        <div className='cancel-box'></div>
        <Link to="/cancel" className='cancel'>cancel order</Link>
        <input type="radio" className='one'></input>
        <input type="radio" className='two'></input>
        <input type="radio" className='three'></input>
        <input type="radio" className='four'></input>
        <div className='Home-Address'>#223 10th road,JP Nagar,Bangalore</div>
    </div>
)
}

export default Summary