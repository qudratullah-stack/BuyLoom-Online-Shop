import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './support.css'

function OrderGuide() {
  const steps = [
  { 
    title: "Select Product", 
    content: "Browse our categories and select the products you want to order. Add them to your cart." 
  },
  { 
    title: "Add to Cart", 
    content: "Review your selected products and click 'Add to Cart' to proceed." 
  },
  { 
    title: "Checkout & Payment", 
    content: "Provide shipping information and make payment via our secure gateway." 
  },
  { 
    title: "Confirmation", 
    content: "You will receive an order confirmation via email and WhatsApp with tracking details." 
  }
];
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }
  return (
    <>
      <nav className="homepagenavbar">
        <img src="/navbaricon.png" alt="navbaricon" />
      </nav>

      <div className="order-guide-page">
        <h2>Order Guide</h2>

        <p>Welcome to BuyLoom! Follow these simple steps to place your order:</p>

        <ol>
          <li>Create an account by <Link to="/Signup">Signing Up</Link> if you haven't already.</li>
          <li>Login using your credentials on the <Link to="/Login">Login</Link> page.</li>
          <li>Browse our products and choose the ones you like.</li>
          <li>Click on the "Order" button next to the product you want.</li>
          <li>Fill in your shipping details and complete the payment.</li>
          <li>Once your order is confirmed, you will receive an email and WhatsApp confirmation.</li>
        </ol>

        <p>If you have any questions, feel free to <Link to="/ContactUs">Contact Us</Link> anytime.</p>
      </div>
        <div className="order-guide-container">
      <h2>How to Place Your Order</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-title" onClick={() => toggleAccordion(index)}>
              {step.title}
            </div>
            {activeIndex === index && (
              <div className="step-content">{step.content}</div>
            )}
            {index !== steps.length - 1 && <div className="connector"></div>}
          </div>
        ))}
      </div>
    </div>
    <div className="order-guide-summary">
  <h3>Quick Tips Before Placing Your Order</h3>
  <ul>
    <li>Ensure your delivery address is correct.</li>
    <li>Double-check your selected products and quantities.</li>
    <li>Keep your payment details ready for a smooth checkout.</li>
    <li>Contact us anytime if you face issues.</li>
  </ul>
  <button 
    onClick={() => window.location.href="/ContactUs"} 
    className="cta-button"
  >
    Contact Support
  </button>
</div>
    </>
  )
}

export default OrderGuide;