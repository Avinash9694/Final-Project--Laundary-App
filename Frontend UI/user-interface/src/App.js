
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/footer.js";
import SignIn from "./components/Sign In.js";
import Register from "./components/Register.js";
import OrderHistory from './components/OrderHistory';
import OrderPage from './Order/OrderPage'
import Create from './components/create';
import Alert from './components/Alert';
import Summary from './components/Summary';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ordercreated from './Summary/OrderCreated.js'
const Apps=()=> {
    return (
    <div>
    <Router>
    <div className="App">
      <Routes>
      <Route path="/creatOrder" element={<Ordercreated />} />
        <Route path="/orderPage" element={<OrderPage />} />
        <Route path="/" exact element={<OrderHistory />} />
        <Route path="/view"  element={<Summary />}/>
        <Route path="/create"  element={<Create />}/>
        <Route path="/cancel" element={<Alert />} />
        <Route path="/Proceed" element={<OrderHistory />} />
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