
import './App.css';
import React from 'react';
import OrderHistory from './components/OrderHistory';
import OrderPage from './Order/OrderPage'
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
        <Route path="/confirm" element={<summary />} />
      </Routes>
    </div>
  </Router>
</div>
  );
};

export default Apps;
