import React,{ useContext, useEffect, useState} from 'react'
import { useParams , Link} from 'react-router-dom'
import { productContext } from '../../context/CreateContex'
import Spiner from '../Spiner'
import './AllCategoryStyle.css'
import '../style/Responsive.css'
function OrderPage() {
  const [quantity, setQuantity] = useState(0)
  const [showPayment, setShowPayment] = useState(false);
  const {id} = useParams()
  const {orderidproduct, orderproduct, spinner, threeDot,setThreeDot} = useContext(productContext)
  const price = orderproduct.priceCents
  const discount = 10;
  const totlalPrice = (price * quantity)
  const totalDiscount = (totlalPrice * discount)/100
  const totlaPriceWithdiscount =  totlalPrice - totalDiscount 
   const handlethreedot = () => {
    setThreeDot((prev) => !prev);
  };
  useEffect(()=>{
    orderidproduct(id)
  },[id])
  
  return (
    <>
   <nav className="homepagenavbar">
        
        <img src="/navbaricon.png" alt="navbaricon" />
        <div className={`linkparent ${threeDot ? "responsivelinkparent" : ""}`}>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
             <li>
              <Link className="nav-link" to="/Beauty">
                Beauty
              </Link>
            </li>
             <li>
              <Link className="nav-link" to="/Electronic">
                Electronic
              </Link>
            </li>
             <li>
              <Link className="nav-link" to="/Fashion">
                Fashion
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={handlethreedot}>☰</button>
      </nav>
    {showPayment &&  <div className="paymentboxundergreycolor"></div>}
      <div className="spinerparent">

  {spinner && <Spiner/>}
      </div>
    <div className="ordercontainer">
      {orderproduct && 
    <div className="orderparent" key={orderproduct._id}>
      <img src={orderproduct.image} alt="orderimg" />
      <h3>{orderproduct.name}</h3>
        <p>{orderproduct.description}</p>
        <div className="child1">
        <h3>Unit Price: {orderproduct.priceCents}</h3>
        <h3>Rating: {orderproduct.rating?.stars}</h3>
        </div>
    </div> }
    <div className="orderprocuctquantity">
       <h3>Unit Price: {orderproduct.priceCents}</h3>
    <div className="btnparetn">
      <button onClick={()=>{
        setQuantity(prev => prev+1)
      }}>➕ </button>
      <span>{quantity}</span>
       <button onClick={()=>{
        setQuantity(prev => prev >1? prev-1: 1)
      }}>  ➖</button>
       <p>Subtotal: {totlalPrice}</p>
      <p>Discount:{totalDiscount}</p>
      <p>Total Payable: {totlaPriceWithdiscount}</p>
    <button onClick={() => setShowPayment(true)}>Complete Your Purchase Securely</button>
    </div>
    </div>
    </div>
      {showPayment && (
  <div className="payment-box">
    <button className="close-btn" onClick={() => setShowPayment(false)}>×</button>
    <h3>Select Payment Method</h3>
    <ul>
      <li>
        <a href={`https://wa.me/923162538676?text=I want to pay for my order`} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </li>
      <li>
        <a href="https://www.easypaisa.com.pk/" target="_blank" rel="noopener noreferrer">
          Easypaisa
        </a>
      </li>
      <li>
        <a href="https://www.visa.com/" target="_blank" rel="noopener noreferrer">
          Credit Card
        </a>
      </li>
      <li>
        <a href="https://www.jazzcash.com.pk/" target="_blank" rel="noopener noreferrer">
          JazzCash
        </a>
      </li>
    </ul>
  </div>)}
    </>
  )
}

export default OrderPage
