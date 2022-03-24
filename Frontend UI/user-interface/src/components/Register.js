import React ,{useState}from "react";
import { Link ,useHistory} from "react-router-dom";
const Register = () => {
  const history=useHistory()
  const[user,setuser]=useState({
    Name:"", Email:"", Password:"", Phone:"", State:"", Distric:"", Address:"", Pincode:""
  })
  let name,value
  const handlerinputs=(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value
    setuser({...user,[name]:value})
    console.log(user)
  }
  const Postdata=async (e)=>{
    e.preventDefault();
    const {Name, Email, Password, Phone, State, Distric, Address, Pincode}=user;
    const res=await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Name, Email, Password, Phone, State, Distric, Address, Pincode
      })
    })
    const data=await res.json()
    if(data.status===400 || !data){
      window.alert("user already exist")
      console.log("user alreadyexist")
    }else{
      window.alert("user registration success")
      console.log("user regstrationsuccess")
      history.push("/signin")
    }
  }
  return (
    <main className="registerpage">
      <div>
        <h1 className="reglaundryservice">
          Laundry
          <br />
          Service
        </h1>
        <p className="regdoorstep">Doorstep Wash &amp; Dryclean Service</p>
        <p className="reghaveaccount">Already have Account</p>
        <Link to="/signin">
          <input type="submit" value="Sign In" className="regsigninbtn" />
        </Link>
      </div>
      <div className="registerdetails">
        <h1 className="registertext">REGISTER</h1>
        <form method="POST">
          <div>
            <input type="text" name="Name" placeholder="Name" className="name" autoComplete="off" value={user.Name} onChange={handlerinputs}/>
          </div>
          <div>
            <input type="text" name="Email" placeholder="Email" className="regemail"autoComplete="off" value={user.Email} onChange={handlerinputs}/>
          </div>
          <div>
            <input type="text" name="Phone" placeholder="Phone" className="phone" autoComplete="off" value={user.Phone} onChange={handlerinputs}/>
          </div>
          <div>
            <input type="password" name="Password" placeholder="Password" className="regpassword" autoComplete="off" value={user.Password} onChange={handlerinputs}/>
          </div>
          <div>
            <input type="text" name="State" placeholder="State" className="state" autoComplete="off" value={user.State} onChange={handlerinputs} />
            <span className="statearrow"></span>
          </div>
          <div>
            <input type="text" name="Distric" placeholder="Distric" className="district" autoComplete="off" value={user.Distric} onChange={handlerinputs}/>
            <span className="districtarrow"></span>
          </div>
          <div>
            <input type="text" name="Address" placeholder="Address" className="address" autoComplete="off" value={user.Address} onChange={handlerinputs}/>
          </div>
          <div>
            <input type="text" name="Pincode" placeholder="Pincode"className="pincode" autoComplete="off" value={user.Pincode} onChange={handlerinputs}/>
          </div>
          <input type="checkbox" className="box" name="box"  />
          <label className="label">I agree to Terms &amp;Condition receiving marketing and promotional materials</label>
          <input type="submit" name="register" value="Register" className="regregisterbtn" onClick={Postdata}/>
        </form>
      </div>
    </main>
  );
};
export default Register;
