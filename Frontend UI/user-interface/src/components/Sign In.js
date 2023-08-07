import React,{useState} from "react";
import {Link}from "react-router-dom";
const SignIn=()=>{
    const [userid,setuserid]=useState({
        Email:"",Password:""
});

let name,value
const handler=(e)=>{
  console.log(e)
  name=e.target.name;
  value=e.target.value
  setuserid({...userid,[name]:value})
  console.log(userid)
}
   // const[userpassword,setuserpassword]=useState("")
    const loginuser=async (e)=>{
        e.preventDefault();
        const {Email, Password}=userid;
       const res =await fetch("http://localhost:5000/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Email,Password
              })  
        })
        const data=res.json()
        if(data.status===400 || !data){
            window.alert("user not found")
        }else{
            window.alert("user login successfully")
        }
    }
    return(
        <main className="signinpage"> 
            <div>
                <h1 className="laundryservice">Laundry<br/>Service</h1>
                <p className="doorstep">Doorstep Wash &amp; Dryclean Service</p>
            
                <p className="haventaccount">Don't Have An Account?</p>
                <Link to="/signup"><input type="submit" value="Register" className="registerbtn"/></Link>
        
            </div>
            <div className="signindetails">
            <h1 className="signintext">SIGN IN</h1>
            <form method="POST">
                <input type="text" name="Email" placeholder="Mobile/Email"  className="email" value={userid.Email} onChange={handler}/><br/>
                <input type="password" name="Password" placeholder="Password" className="password" value={userid.Password} onChange={handler}/><span className="passwordpadlock"></span><br/>
                <p className="forgotpassword">Forget Password?</p>

                <input type="submit" name="signin" value="Sign In" className="signinbtn" onClick={loginuser} />

            </form>
            </div>
        </main>
    )
}
export default SignIn