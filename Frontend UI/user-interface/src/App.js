import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/footer.js";
import SignIn from "./components/Sign In.js";
import Register from "./components/Register.js";
import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom";
const app = () => {
  return (
    <section className="homepage">
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/signin" exact component={SignIn}/>
            <Route path="/signup" exact component={Register}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
    </section>
  );
};
export default app;
