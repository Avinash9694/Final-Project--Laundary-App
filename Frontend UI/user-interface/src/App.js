import './App.css';
import React from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import OrderHistory from './components/OrderHistory';
// import summary from './components/summary';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Apps=()=> {
  // React.useEffect(() => {
  //   let email = "avinash@gmail.com";
  //   let password = "avinash1234"
  //   axios.get(`http://localhost:5000/user/signin?emailId=${email}&password=${password}`)
  //   .then(res => {
  //     console.log("RESPONSE -> ", res);
  //   })
  // });

  return (
    <div>
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<OrderHistory />} />
        <Route path="/confirm" element={<summary />} />
      </Routes>
    </div>
  </Router>



</div>
  );
};

export default Apps;
