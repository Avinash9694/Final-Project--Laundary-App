import React from "react";
import home from "./image/home.svg";
import list from "./image/list.svg";
import more from "./image/more.svg";
import "./Header.css";
import userImage from "./image/userImage.png";
const OrderCreate=()=> {
  return (
  <div>  
              <div className="side-box"></div>
              <div className="bottom-box"></div>
              <div className="top-box"></div>
              <div className="user-box"></div>
              <div className="footer-part">2021</div>
              <div className="copy">&copy;</div>
              <div className="laundry">Laundry</div>
              <div className="headtext">LAUNDRY</div>
              <div className="pricebtn">Pricing</div>
              <div className="career-box"></div>
              <div className="careerbtn">Career</div>
              <div className="username">User Name</div>
              <div><img className="home-icon" src={home} alt="home" /></div>
              <div className="more"><img  src={more} alt="more" /></div>
              <div className="white-box"></div>
              <div><img className="list" src={list} alt="list" /></div>
              <div ><img className="userImage" src={userImage} alt = "userImage"/></div>           
    </div>  
  );
}
export default OrderCreate;