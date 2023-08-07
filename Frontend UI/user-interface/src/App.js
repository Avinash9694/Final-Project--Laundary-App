import './App.css';
import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/footer.js";
import SignIn from "./components/Sign In.js";
import Register from "./components/Register.js";
import OrderHistory from './components/OrderHistory';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Apps=()=> {
    return (
    <div>
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<OrderHistory />} />
        <Route path="/signin" element={SignIn}/>
        <Route path="/signup" element={Register}/>
        <Route path="/confirm" element={<summary />} />
      </Routes>
    </div>
  </Router>



</div>
  );
};

export default Apps;