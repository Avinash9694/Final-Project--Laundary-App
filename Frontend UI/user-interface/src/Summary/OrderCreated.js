import React, { useState, useEffect } from "react";
import OrderpageHeader from "../Order/OrderpageHeder"
import "./OrderCreated.css"
import search from "../Order/image/search.svg"
import Summarypart from "./summarypart1";

// ----  Product List -------------
import shirts from "../Order/prodimage/shirts.jpg"
import tshirts from "../Order/prodimage/tshirts.jpg"
import trousers from "../Order/prodimage/trousers.jpg"
import jeans from "../Order/prodimage/jeans.jpg"
import boxers from "../Order/prodimage/boxers.jpg"
import joggers from "../Order/prodimage/joggers.jpg"
import others from "../Order/prodimage/others.jpg"

// ---- washtypes ---------
import washmach from "../Order/image/washmach.svg";
import washmachclick from "../Order/image/washmachclick.svg";
import pack from "../Order/image/pack.svg";
import packclick from "../Order/image/packclick.svg";
import ironing from "../Order/image/ironing.svg";
import ironingclick from "../Order/image/ironingclick.svg";
import fold from "../Order/image/fold.svg";
import foldclick from "../Order/image/foldclick.png";


const Ordercreated = () => {

  const [openmodalone, setOpenmodalone] = useState(false)
  const [data, setData] = useState(" ")

  const washcost = 20;
  const presscost = 15;
  const foldcost = 10;
  const packcost = 25;

  // ---------  Shirts -------------
  const [wash1, setWashpicked1] = useState(false);
  const [iron1, setIronpicked1] = useState(false);
  const [fold1, setFoldpicked1] = useState(false);
  const [pack1, setPackpicked1] = useState(false);
  const [quantity1, setQuantity1] = useState(0);
  const [price1, setPrice1] = useState("---");
  const [type1, setType1] = useState(0);

  const washtouch1 = () => {
    setWashpicked1(!wash1)
  }
  const irontouch1 = () => {
    setIronpicked1(!iron1)
  }
  const foldtouch1 = () => {
    setFoldpicked1(!fold1)
  }
  const packtouch1 = () => {
    setPackpicked1(!pack1)
  }

  const subtotal1 = () => {
    let cost = 0;
    let type = 0;

    if (wash1) {
      cost += quantity1 * washcost;
      type += washcost;
    }
    if (iron1) {
      cost += quantity1 * presscost;
      type += presscost;
    }
    if (fold1) {
      cost += quantity1 * foldcost;
      type += foldcost;
    }
    if (pack1) {
      cost += quantity1 * packcost;
      type += packcost;
    }
    setPrice1(cost)
    setType1(type)
  }

  // ---- T-Shirts -----------
  const [wash2, setWashpicked2] = useState(false);
  const [iron2, setIronpicked2] = useState(false);
  const [fold2, setFoldpicked2] = useState(false);
  const [pack2, setPackpicked2] = useState(false);
  const [quantity2, setQuantity2] = useState(0);
  const [price2, setPrice2] = useState("---");
  const [type2, setType2] = useState(0);

  const washtouch2 = () => {
    setWashpicked2(!wash2)
  }
  const irontouch2 = () => {
    setIronpicked2(!iron2)
  }
  const foldtouch2 = () => {
    setFoldpicked2(!fold2)
  }
  const packtouch2 = () => {
    setPackpicked2(!pack2)
  }

  const subtotal2 = () => {
    let cost = 0;
    let type = 0;

    if (wash2) {
      cost += quantity2 * washcost
      type += washcost
    }
    if (iron2) {
      cost += quantity2 * presscost
      type += presscost
    }
    if (fold2) {
      cost += quantity2 * foldcost
      type += foldcost
    }
    if (pack2) {
      cost += quantity2 * packcost
      type += packcost
    }
    setPrice2(cost)
    setType2(type)
  }
  // ---- trousers -----------
  const [wash3, setWashpicked3] = useState(false);
  const [iron3, setIronpicked3] = useState(false);
  const [fold3, setFoldpicked3] = useState(false);
  const [pack3, setPackpicked3] = useState(false);
  const [quantity3, setQuantity3] = useState(0);
  const [price3, setPrice3] = useState("---");
  const [type3, setType3] = useState(0);

  const washtouch3 = () => {
    setWashpicked3(!wash3)
  }
  const irontouch3 = () => {
    setIronpicked3(!iron3)
  }
  const foldtouch3 = () => {
    setFoldpicked3(!fold3)
  }
  const packtouch3 = () => {
    setPackpicked3(!pack3)
  }

  const subtotal3 = () => {
    let cost = 0;
    let type = 0;

    if (wash3) {
      cost += quantity3 * washcost
      type += washcost
    }
    if (iron3) {
      cost += quantity3 * presscost
      type += presscost
    }
    if (fold3) {
      cost += quantity3 * foldcost
      type += foldcost
    }
    if (pack3) {
      cost += quantity3 * packcost
      type += packcost
    }
    setPrice3(cost)
    setType3(type)
  }
  // ---- Jeans -----------
  const [wash4, setWashpicked4] = useState(false);
  const [iron4, setIronpicked4] = useState(false);
  const [fold4, setFoldpicked4] = useState(false);
  const [pack4, setPackpicked4] = useState(false);
  const [quantity4, setQuantity4] = useState(0);
  const [price4, setPrice4] = useState("---");
  const [type4, setType4] = useState(0);

  const washtouch4 = () => {
    setWashpicked4(!wash4)
  }
  const irontouch4 = () => {
    setIronpicked4(!iron4)
  }
  const foldtouch4 = () => {
    setFoldpicked4(!fold4)
  }
  const packtouch4 = () => {
    setPackpicked4(!pack4)
  }

  const subtotal4 = () => {
    let cost = 0;
    let type = 0;

    if (wash4) {
      cost += quantity4 * washcost;
      type += washcost;
    }
    if (iron4) {
      cost += quantity4 * presscost;
      type += presscost;
    }
    if (fold4) {
      cost += quantity4 * foldcost;
      type += foldcost;
    }
    if (pack4) {
      cost += quantity4 * packcost;
      type += packcost;
    }
    setPrice4(cost)
    setType4(type)
  }

  // ---- Boxers -----------
  const [wash5, setWashpicked5] = useState(false);
  const [iron5, setIronpicked5] = useState(false);
  const [fold5, setFoldpicked5] = useState(false);
  const [pack5, setPackpicked5] = useState(false);
  const [quantity5, setQuantity5] = useState(0);
  const [price5, setPrice5] = useState("---");
  const [type5, setType5] = useState(0);

  const washtouch5 = () => {
    setWashpicked5(!wash5)
  }
  const irontouch5 = () => {
    setIronpicked5(!iron5)
  }
  const foldtouch5 = () => {
    setFoldpicked5(!fold5)
  }
  const packtouch5 = () => {
    setPackpicked5(!pack5)
  }

  const subtotal5 = () => {
    let cost = 0;
    let type = 0;

    if (wash5) {
      cost += quantity5 * washcost
      type += washcost
    }
    if (iron5) {
      cost += quantity5 * presscost
      type += presscost
    }
    if (fold5) {
      cost += quantity5 * foldcost
      type += foldcost
    }
    if (pack5) {
      cost += quantity5 * packcost
      type += packcost
    }
    setPrice5(cost)
    setType5(type)
  }
  // ---- Joggers -----------
  const [wash6, setWashpicked6] = useState(false);
  const [iron6, setIronpicked6] = useState(false);
  const [fold6, setFoldpicked6] = useState(false);
  const [pack6, setPackpicked6] = useState(false);
  const [quantity6, setQuantity6] = useState(0);
  const [price6, setPrice6] = useState("---");
  const [type6, setType6] = useState(0);

  const washtouch6 = () => {
    setWashpicked6(!wash6)
  }
  const irontouch6 = () => {
    setIronpicked6(!iron6)
  }
  const foldtouch6 = () => {
    setFoldpicked6(!fold6)
  }
  const packtouch6 = () => {
    setPackpicked6(!pack6)
  }

  const subtotal6 = () => {
    let cost = 0;
    let type = 0;

    if (wash6) {
      cost += quantity6 * washcost
      type += washcost
    }
    if (iron6) {
      cost += quantity6 * presscost
      type += presscost
    }
    if (fold6) {
      cost += quantity6 * foldcost
      type += foldcost
    }
    if (pack6) {
      cost += quantity6 * packcost
      type += packcost
    }
    setPrice6(cost)
    setType6(type)
  }
  // ---- Others -----------
  const [wash7, setWashpicked7] = useState(false);
  const [iron7, setIronpicked7] = useState(false);
  const [fold7, setFoldpicked7] = useState(false);
  const [pack7, setPackpicked7] = useState(false);
  const [quantity7, setQuantity7] = useState(0);
  const [price7, setPrice7] = useState("---");
  const [type7, setType7] = useState(0);

  const washtouch7 = () => {
    setWashpicked7(!wash7)
  }
  const irontouch7 = () => {
    setIronpicked7(!iron7)
  }
  const foldtouch7 = () => {
    setFoldpicked7(!fold7)
  }
  const packtouch7 = () => {
    setPackpicked7(!pack7)
  }

  const subtotal7 = () => {
    let cost = 0;
    let type = 0;

    if (wash7) {
      cost += quantity7 * washcost
      type += washcost
    }
    if (iron7) {
      cost += quantity7 * presscost
      type += presscost
    }
    if (fold7) {
      cost += quantity7 * foldcost
      type += foldcost
    }
    if (pack7) {
      cost += quantity7 * packcost
      type += packcost
    }
    setPrice7(cost)
    setType7(type)
  }

  useEffect(() => { subtotal1(); subtotal2(); subtotal3(); subtotal4(); subtotal5(); subtotal6(); subtotal7(); })
const opensummary = async () => {
    var types = []
    var allprices = []
    var allservices = []
    var quantity = []
    var shirtservices = []
    var tshirtservices = []
    var trouserservices = []
    var jeanservices = []
    var boxerservices = []
    var joggerservices = []
    var otherservices = []

    if (price1 > 0) {
      types.push("Shirt")
      if (wash1) {shirtservices.push("Washing")}
      if (iron1) {shirtservices.push("Ironing")}
      if (fold1) {shirtservices.push("Folding")}
      if (pack1) {shirtservices.push("Chemical Wash")}}
    if (shirtservices) {allservices.push(shirtservices)}
    if (shirtservices && quantity1 > 0) {
      allprices.push(price1)
      quantity.push(quantity1)}
    if (price2 > 0) {
      types.push("T-Shirt")
      if (wash2) {tshirtservices.push("Washing")}
      if (iron2) {tshirtservices.push("Ironing")}
      if (fold2) {tshirtservices.push("Folding")}
      if (pack2) {tshirtservices.push("Chemical Wash")}
    }
    if (tshirtservices) {
      allservices.push(tshirtservices)
    }
    if (tshirtservices && quantity2 > 0) {
      allprices.push(price2)
      quantity.push(quantity2)
    }

    if (price3 > 0) {
      types.push("Trousers")
      if (wash3) { trouserservices.push("Washing") }
      if (iron3) { trouserservices.push("Ironing") }
      if (fold3) { trouserservices.push("Folding") }
      if (pack3) { trouserservices.push("Chemical Wash") }
    }
    if (trouserservices) { allservices.push(trouserservices) }
    if (trouserservices && quantity3 > 0) {
      allprices.push(price3)
      quantity.push(quantity3)
    }
    if (price4 > 0) {
      types.push("Jeans")
      if (wash4) {jeanservices.push("Washing")}
      if (iron4) {jeanservices.push("Ironing")}
      if (fold4) {jeanservices.push("Folding")}
      if (pack4) {jeanservices.push("Chemical Wash")}
    }
    if (jeanservices) {allservices.push(jeanservices)}
    if (jeanservices && quantity4 > 0) {
      allprices.push(price4)
      quantity.push(quantity4)
    }
    if (price5 > 0) {
      types.push("Boxers")
      if (wash5) {boxerservices.push("Washing")}
      if (iron5) {boxerservices.push("Ironing")}
      if (fold5) {boxerservices.push("Folding")}
      if (pack5) {boxerservices.push("Chemical Wash")}}
    if (boxerservices) {allservices.push(boxerservices)}
    if (boxerservices && quantity5 > 0) {
      allprices.push(price5)
      quantity.push(quantity5)
    }
    if (price6 > 0) {
      types.push("Joggers")
      if (wash6) {joggerservices.push("Washing")}
      if (iron6) {joggerservices.push("Ironing")}
      if (fold6) {joggerservices.push("Folding")}
      if (pack6) {joggerservices.push("Chemical Wash")}
    }
    if (joggerservices) { allservices.push(joggerservices) }
    if (joggerservices && quantity6 > 0) {
      allprices.push(price6)
      quantity.push(quantity6)
    }
    if (price7 > 0) {
      types.push("Others")
      if (wash7) { otherservices.push("Washing") }
      if (iron7) { otherservices.push("Ironing") }
      if (fold7) { otherservices.push("Folding") }
      if (pack7) { otherservices.push("Chemical Wash") }
    }
    if (otherservices) { allservices.push(otherservices) }
    if (otherservices && quantity7 > 0) {
      allprices.push(price7)
      quantity.push(quantity7)
    }
    setData({ "alltypes": types, "services": allservices, "price": allprices, "qantity": quantity })
    console.log(data)
    setOpenmodalone(true)
  }

  return (
    <div>
      <div className='ordershome'>
        <OrderpageHeader />
        <div className='mainbody1'>

          <div className='mainbody2'>
            <div className='orderslist1'>
              <div className='orderscountandsearch'>
                <h3>Create Order</h3>
                <span><input type="text" class="ordersearchbar1" placeholder="Search" /><img src={search} alt="searchicon" /></span>
              </div>
            </div>
            <div className='orderingtable1'>
              <div className='orderingtableheadings'>
                <div className='orderingtableheadingsrow'>
                  <h3>Produt Types</h3>
                  <h3>Quantity</h3>
                  <h3>Wash Type</h3>
                  <h3>Price</h3>
                  <h3>Reset</h3>
                </div>
              </div>
              <div>
                <div className="row1">
                  <div className='product1-shirts'>
                    <img src={shirts} alt="Shirts" className="product-image" />
                    <div className='productdescription'>
                      <p className='title1'>Shirts</p>
                      <p className='description1'>Lorem Ipsum is simply dummy text of the</p>
                    </div>
                  </div>
                  <div>
                    <div className='inputquantity'>
                      <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => { setQuantity1(e.target.value); }} value={quantity1} />
                    </div>
                  </div>
                  <div>
                    <div className="washtype">
                      <img src={wash1 ? washmachclick : washmach} onClick={() => { washtouch1() }} alt="wash" />
                      <img src={iron1 ? ironingclick : ironing} onClick={() => { irontouch1() }} alt="iron" />
                      <img src={fold1 ? foldclick : fold} onClick={() => { foldtouch1() }} alt="fold" />
                      <img src={pack1 ? packclick : pack} onClick={() => { packtouch1() }} alt="pack" />
                    </div>
                  </div>
                  <div className="price">
                    {`${quantity1} x ${type1} = ${price1}`}
                  </div>
                  <div className="resetbtn-12">
                    <button type="button" className="rest-btn" onClick={() => { setWashpicked1(false); setIronpicked1(false); setFoldpicked1(false); setPackpicked1(false); setQuantity1(0) }} >Reset</button>
                  </div>
                </div>
                <div className="row2">
                  <div className='product1-shirts'>
                    <img src={tshirts} alt="T-Shirts" className="product-image" />
                    <div className='productdescription'>
                      <p className='title1'>T-Shirts</p>
                      <p className='description1'>Lorem Ipsum is simply dummy text of the</p>
                    </div>
                  </div>
                  <div>
                    <div className='inputquantity'>
                      <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => { setQuantity2(e.target.value); }} value={quantity2} />
                    </div>
                  </div>
                  <div>
                    <div className="washtype">
                      <img src={wash2 ? washmachclick : washmach} onClick={() => { washtouch2() }} alt="wash" />
                      <img src={iron2 ? ironingclick : ironing} onClick={() => { irontouch2() }} alt="iron" />
                      <img src={fold2 ? foldclick : fold} onClick={() => { foldtouch2() }} alt="fold" />
                      <img src={pack2 ? packclick : pack} onClick={() => { packtouch2() }} alt="pack" />
                    </div>
                  </div>
                  <div className="price">
                    {`${quantity2} x ${type2} = ${price2}`}
                  </div>
                  <div>
                    <button type="button" className="rest-btn" onClick={() => { setWashpicked2(false); setIronpicked2(false); setFoldpicked2(false); setPackpicked2(false); setQuantity2(0) }} >Reset</button>
                  </div>
                </div>
                <div className="row2">
                  <div className='product1-shirts'>
                    <img src={trousers} alt="Trousers" className="product-image" />
                    <div className='productdescription'>
                      <p className='title1'>Trousers</p>
                      <p className='description1'>Lorem Ipsum is simply dummy text of the</p>
                    </div>
                  </div>
                  <div>
                    <div className='inputquantity'>
                      <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => { setQuantity3(e.target.value); }} value={quantity3} />
                    </div>
                  </div>
                  <div>
                    <div className="washtype">
                      <img src={wash3 ? washmachclick : washmach} onClick={() => { washtouch3() }} alt="wash" />
                      <img src={iron3 ? ironingclick : ironing} onClick={() => { irontouch3() }} alt="iron" />
                      <img src={fold3 ? foldclick : fold} onClick={() => { foldtouch3() }} alt="fold" />
                      <img src={pack3 ? packclick : pack} onClick={() => { packtouch3() }} alt="pack" />
                    </div>
                  </div>
                  <div className="price">
                    {`${quantity3} x ${type3} = ${price3}`}
                  </div>
                  <div>
                    <button type="button" className="rest-btn" onClick={() => { setWashpicked3(false); setIronpicked3(false); setFoldpicked3(false); setPackpicked3(false); setQuantity3(0) }} >Reset</button>
                  </div>
                </div>
                <div className="row2">
                  <div className='product1-shirts'>
                    <img src={jeans} alt="Jeans" className="product-image" />
                    <div className='productdescription'>
                      <p className='title1'>Jeans</p>
                      <p className='description1'>Lorem Ipsum is simply dummy text of the</p>
                    </div>
                  </div>
                  <div>
                    <div className='inputquantity'>
                      <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => { setQuantity4(e.target.value); }} value={quantity4} />
                    </div>
                  </div>
                  <div>
                    <div className="washtype">
                      <img src={wash4 ? washmachclick : washmach} onClick={() => { washtouch4() }} alt="wash" />
                      <img src={iron4 ? ironingclick : ironing} onClick={() => { irontouch4() }} alt="iron" />
                      <img src={fold4 ? foldclick : fold} onClick={() => { foldtouch4() }} alt="fold" />
                      <img src={pack4 ? packclick : pack} onClick={() => { packtouch4() }} alt="pack" />
                    </div>
                  </div>
                  <div className="price">
                    {`${quantity4} x ${type4} = ${price4}`}
                  </div>
                  <div>
                    <button type="button" className="rest-btn" onClick={() => { setWashpicked4(false); setIronpicked4(false); setFoldpicked4(false); setPackpicked4(false); setQuantity4(0) }} >Reset</button>
                  </div>
                </div>
                <div className="row2">
                  <div className='product1-shirts'>
                    <img src={boxers} alt="Boxers" className="product-image" />
                    <div className='productdescription'>
                      <p className='title1'>Boxers</p>
                      <p className='description1'>Lorem Ipsum is simply dummy text of the</p>
                    </div>
                  </div>
                  <div>
                    <div className='inputquantity'>
                      <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => { setQuantity5(e.target.value); }} value={quantity5} />
                    </div>
                  </div>
                  <div>
                    <div className="washtype">
                      <img src={wash5 ? washmachclick : washmach} onClick={() => { washtouch5() }} alt="wash" />
                      <img src={iron5 ? ironingclick : ironing} onClick={() => { irontouch5() }} alt="iron" />
                      <img src={fold5 ? foldclick : fold} onClick={() => { foldtouch5() }} alt="fold" />
                      <img src={pack5 ? packclick : pack} onClick={() => { packtouch5() }} alt="pack" />
                    </div>
                  </div>
                  <div className="price">
                    {`${quantity5} x ${type5} = ${price5}`}
                  </div>
                  <div>
                    <button type="button" className="rest-btn" onClick={() => { setWashpicked5(false); setIronpicked5(false); setFoldpicked5(false); setPackpicked5(false); setQuantity5(0) }} >Reset</button>
                  </div>
                </div>
                <div className="row2">
                  <div className='product1-shirts'>
                    <img src={joggers} alt="Joggers" className="product-image" />
                    <div className='productdescription'>
                      <p className='title1'>Joggers</p>
                      <p className='description1'>Lorem Ipsum is simply dummy text of the</p>
                    </div>
                  </div>
                  <div>
                    <div className='inputquantity'>
                      <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => { setQuantity6(e.target.value); }} value={quantity6} />
                    </div>
                  </div>
                  <div>
                    <div className="washtype">
                      <img src={wash6 ? washmachclick : washmach} onClick={() => { washtouch6() }} alt="wash" />
                      <img src={iron6 ? ironingclick : ironing} onClick={() => { irontouch6() }} alt="iron" />
                      <img src={fold6 ? foldclick : fold} onClick={() => { foldtouch6() }} alt="fold" />
                      <img src={pack6 ? packclick : pack} onClick={() => { packtouch6() }} alt="pack" />
                    </div>
                  </div>
                  <div className="price">
                    {`${quantity6} x ${type6} = ${price6}`}
                  </div>
                  <div>
                    <button type="button" className="rest-btn" onClick={() => { setWashpicked6(false); setIronpicked6(false); setFoldpicked6(false); setPackpicked6(false); setQuantity6(0) }} >Reset</button>
                  </div>
                </div>
                <div className="row2">
                  <div className='product1-shirts'>
                    <img src={others} alt="Others" className="product-image" />
                    <div className='productdescription'>
                      <p className='title1'>Others</p>
                      <p className='description1'>Lorem Ipsum is simply dummy text of the</p>
                    </div>
                  </div>
                  <div>
                    <div className='inputquantity'>
                      <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => { setQuantity7(e.target.value); }} value={quantity7} />
                    </div>
                  </div>
                  <div>
                    <div className="washtype">
                      <img src={wash7 ? washmachclick : washmach} onClick={() => { washtouch7() }} alt="wash" />
                      <img src={iron7 ? ironingclick : ironing} onClick={() => { irontouch7() }} alt="iron" />
                      <img src={fold7 ? foldclick : fold} onClick={() => { foldtouch7() }} alt="fold" />
                      <img src={pack7 ? packclick : pack} onClick={() => { packtouch7() }} alt="pack" />
                    </div>
                  </div>
                  <div className="price">
                    {`${quantity7} x ${type7} = ${price7}`}
                  </div>
                  <div>
                    <button type="button" className="rest-btn" onClick={() => { setWashpicked7(false); setIronpicked7(false); setFoldpicked7(false); setPackpicked7(false); setQuantity7(0) }} >Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="proceedandcancelbtn">
            <div className="proceedbtn"><button className="proceedbtn101" onClick={opensummary}>Proceed</button></div>
            <div className="cancelbtn12">Cancel</div>
          </div>

        </div>
      </div>
      <div className="summaryone1">{openmodalone && <Summarypart closesummary={setOpenmodalone} orderdata={data} />}</div>
    </div>
  )
}
export default Ordercreated; 