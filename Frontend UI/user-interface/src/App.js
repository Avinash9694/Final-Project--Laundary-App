import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from './Order/OrderPage'
import Ordercreated from './Summary/OrderCreated.js'


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/creatOrder" element={<Ordercreated />} />
     <Route path="/orderPage" element={<OrderPage />} />
     {/* <Route path="/summarypop" element={<SummaryConf />} /> */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
