import React from "react";
import home from "./image/home.svg";
import list from "./image/list.svg";
import more from "./image/more.svg";
// import search from "./image/search.svg";
const OrderpageHeader=()=> {
  return (
  <div>  
              <div className="side-box1"></div>
              <div className="bottom-box1"></div>
              <div className="top-box1"></div>
              <div className="user-box1"></div>
              <div className="footer-part1">2021</div>
              <div className="copy1">&copy;</div>
              <div className="laundry1">Laundry</div>
              <div className="headtext1">LAUNDRY</div>
              <div className="pricebtn1">Pricing</div>
              <div className="careerbtn1">Career</div>
              <div className="username1">User Name</div>
              <div><img className="home-icon1" src={home} alt="home" /></div>
              <div className="white-box1"></div>
              <div className="more1"><img  src={more} alt="more" /></div>
              <div><img className="list1" src={list} alt="list" /></div>

    </div>  
  );
}
export default OrderpageHeader;