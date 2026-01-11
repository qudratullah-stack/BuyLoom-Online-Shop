import React,{useEffect, useState} from 'react'
import './support.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { helpwithimage } from './HelpCenterDate'
import { productContext } from '../src/context/CreateContex'
import { useNavigate } from 'react-router-dom'
function HelpCenter() {
  const navigate = useNavigate()
    const {setGiveAnswer} = useContext(productContext)
    const [imagearry, setIimagearry] = useState(0)
    useEffect(()=>{
      const interval = setInterval(() => {
      setIimagearry((prev) => (prev + 1) % helpwithimage.length);
    }, 4000);
     return () => clearInterval(interval);
    },[])
  
  return (
    <>
 <nav className="homepagenavbar">
        <img src="/navbaricon.png" alt="navbaricon" />
      </nav>
     <div className="askquestioninputParent">
   <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=> setGiveAnswer(e.target.value)} placeholder='Ask Your Question ' onKeyDown={(e)=>{
    if(e.key === "Enter"){
      navigate("/AnswerePage")
    }
   }}/>
   <span className='sendIcon' onChange={(e)=> setGiveAnswer(e.target.value)} placeholder='Ask Your Question ' onClick={()=>{
      navigate("/AnswerePage")
   }}>➤</span>
  </div>
    <div className="helpone">
  {helpwithimage.map((item, idx) => (
    <img
      key={idx}
      src={item.image}
      alt="Gallery"
      className={idx === imagearry ? "active" : ""}
    />
  ))}
</div>
  <p className='helpspantext '>{helpwithimage[imagearry].text}</p>
 <div className="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-container">
    {[
      { q: "How can I track my order?", a: "You can track your order using the tracking ID sent to your email or through the 'My Orders' section in your account." },
      { q: "What is your return policy?", a: "We offer a 30-day hassle-free return policy. Ensure the product is in its original packaging and unused." },
      { q: "Do you offer international shipping?", a: "Currently, Buyloom ships nationwide, but we are expanding to international locations very soon. Stay tuned!" },

      // ⭐ New Questions Below

      { q: "How long will my order take to arrive?", a: "Orders are usually delivered within 3–7 business days, depending on your location and the courier service." },

      { q: "Can I change or cancel my order after placing it?", a: "Yes, orders can be changed or cancelled within 12 hours of placement by contacting our support team." },

      { q: "What payment methods do you accept?", a: "We accept Cash on Delivery, Debit/Credit Cards, and popular mobile wallet payments." },

      { q: "Is my personal information secure?", a: "Absolutely. We use industry-standard encryption and never share your information with third parties." },

      { q: "What should I do if I receive a damaged product?", a: "If your product arrives damaged, contact support within 48 hours with photos, and we will replace it free of cost." },

      { q: "Do you offer discounts?", a: "Yes! We regularly offer seasonal discounts and special promo codes. Subscribe to our newsletter to stay updated." },

      { q: "Can I return a sale item?", a: "Sale items can also be returned within 7 days unless marked 'Final Sale' on the product page." },

      { q: "How do I contact customer support?", a: "You can reach us via live chat, email support, or through the 'Contact Us' form available on the website." }

    ].map((faq, index) => (
      <details key={index} className="faq-item">
        <summary>{faq.q}</summary>
        <p>{faq.a}</p>
      </details>
    ))}
  </div>
</div>
  <footer className="footer">
        <div className="footer-box">
          <h3>Buyloom</h3>
          <p>Your smart online shopping destination.</p>
        </div>

        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/products/card">Shop</Link>
            </li>
            <li>
               <Link to="/Fashion">Categories</Link>
              
            </li>
            <li>
               <Link to="/Electronic">Top Deals</Link>
              
            </li>
            <li>
              <Link to="/Electronic">New Arrivals</Link>
             
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <h4>Support</h4>
          <ul>
            <li>
                 <Link to="/HelpCenter">Help Center</Link>
              
            </li>
            <li>
                 <Link to="/ContactUs">Contact Us</Link>
             
            </li>
            <li>
               <Link to="/OrderGuide">Order Guide</Link>
              
            </li>
            <li>
                 <Link to="/FaQs">FaQs</Link>
             
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <h4>Contact</h4>
          <p>Email: masoomkhanqudrat@gmail.com</p>
          <p>WhatsApp: +92 316 2538676</p>
        </div>
      </footer>

      <div className="footer-bottom">© 2026 Buyloom. All rights reserved.</div>
    </>
  )
}

export default HelpCenter
