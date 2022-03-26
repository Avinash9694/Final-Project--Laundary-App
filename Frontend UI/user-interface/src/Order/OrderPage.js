import React from "react";
import search from "./image/search.svg";
import { Link } from "react-router-dom";
import OrderpageHeader from "./OrderpageHeder"
const OrderCreate=()=> {
  return (
  <div>  <OrderpageHeader/>
              <div class="show-order">
                <b>Order | 0</b>
              </div>
              <div className="serach-bar"> <img src={search} alt="search" /></div>
                <div class="search-bar">
            </div>
            <div className="order-status"><p className="createOrdButton">No order available</p></div>
              <div className="btn-click"><Link to="/creatOrder"class="btn-create"> Create </Link></div>

    </div>  
  );
}
export default OrderCreate;