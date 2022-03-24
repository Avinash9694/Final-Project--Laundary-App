 import React from "react";
 import {Link}from "react-router-dom";
 //import {NavLink} from"react-router-dom";
 const Navbar=()=>{
     return(
         <section className="navbar">
             <div className="laundry">
             <h1 className="laundrytext">LAUNDRY</h1>
             </div>
             <div className="links">
             <ul className="headercontents">
                 
                <Link to="/home" className="home">Home</Link>
                <Link to="/pricing" className="pricing">Pricing</Link>
                <Link to="/career" className="career">Career</Link>
                <Link to="/signin" className="signin">SignIn</Link>
                <hr/>
             </ul>
             </div>
         </section>
     )
 }
 export default Navbar