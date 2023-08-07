/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import "./summarypart1.css"
import { Link } from "react-router-dom";

function Summarypart(props) {
    const [subtotal,setsubtotal]=useState(0);
    const [total,settotal]=useState(0);
    const [data, setData]= useState(0);
    useEffect(()=>{
        const actualdata = props.orderdata;
        setData(actualdata)
        // console.log(data)
    })
    function setalltotal(){
        var sum = 0
        {data.price.map((item)=>
            sum+=item
        )}
        setsubtotal(sum)
        settotal(parseInt(sum)+90)
    }


    const todatabase = async () => {
        const totalp = []
        {data.price.map((item)=> 
            totalp.push(item)
        )};
        const totalquantity = [] 
        {data.qantity.map((item)=>
            totalquantity.push(item)
        )};
        const types=[];
        {data.alltypes.map((item)=>
            types.push(item)
        )}
        const totalprice = totalp;
        const totalitems = totalquantity;
        const productlist = types;
        console.log(productlist, totalprice, totalitems);
        try {
          await fetch("http://localhost:5000/details", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              totalprice,
              productlist,
              totalitems,
            }),
          });
          console.log("done");
          // setpopup(true)
        } catch (e) {
          console.log(e);
        }
      };

  return (
    <div className='summaryone'>
        <div className='summaryheader'>
            <h4>Summary</h4>
            <button onClick={()=> props.closesummary(false)}>X</button>
        </div>
        <div className='summarysecondheader'>
            <div className='storedetails101'>
                <p>Location</p>
                <b>Store Address</b>
                <b>Phone</b>
            </div>
            <div className='storedetails202'>
            <select className="select-location">
                  <option disabled selected value> -- Select City -- </option>
                    <option value="1">JP Nagar</option>
                  </select>
                <p>Near Phone booth, 10th road,</p>
                <p>9999999999</p>
            </div>            
        </div>
        <div>
            <h5 className='orderdetails101'>Order Details</h5>
            <div className="ordersummry101">
                {data &&(
                <div className='for-flex'>
                    {data.alltypes.map((item,idx)=>(
                        <p>{item}</p>
                    ))}
                </div>
                )}
                {data &&(
                <div className='for-flex'>
                    {data.services.map((item,idx)=>(
                        <p>{item}</p>
                    ))}
                </div>
                )}
                {data &&(
                <div className='for-flex'>
                    {data.price.map((item,idx)=>(
                        <p>{item}</p>
                    ))}
                </div>
                )}
            </div>
        </div>
        <div className="sumtotals">
            <div className='Subtotal' onClick={setalltotal}><p>Sub total:{setalltotal} <b> {subtotal}</b></p></div>
            <div className='PickupCharges'><p>Pickup Charges: <b> 90</b></p></div>
            <div className='Total'>
                <p> Total: <b>Rs {total}</b></p>
            </div>
        </div>
        <div className="adresses">
            <h4 className="addre-4">Address</h4>
            <div className="addressicons">
                <div className="address101">
                    <b>Home</b>
                    <p>#223, 10th road, Jp Nagar, Bangalore</p>
                </div>
                <div className="address101">
                    <b>Other</b>
                    <p>#223, 10th road, Jp Nagar, Bangalore</p>
                </div>
            </div>
        </div>
        <div class="addnew-12">
          <button type="button" >
            ADD NEW
          </button>
        </div>
        <div>
        <Link to="/popup"><button className="confirm-btn1" onClick={todatabase}>Confirm</button></Link>
        </div>
        <div className="bottom-123"></div>
    </div>
    )
  }
  
  export default Summarypart; 