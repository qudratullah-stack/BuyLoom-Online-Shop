import React,{useContext, useState, useEffect} from 'react'
import { productContext } from '../context/CreateContex'
import Spiner from './Spiner'
import { useNavigate , Link} from 'react-router-dom'
import './SubCategory/AllCategoryStyle.css'
import './style/Responsive.css'
import { allcategoryArray } from '../../supportPage/HelpCenterDate'

function Card() {
  const [imagearry, setIimagearry] = useState(1);
 useEffect(()=>{
          const interval = setInterval(() => {
          setIimagearry((prev) => (prev + 1) % allcategoryArray.length);
        }, 4000);
         return () => clearInterval(interval);
        },[])
   const navigate = useNavigate();
   const handlethreedot = () => {
     setThreeDot((prev) => !prev);
    };
    const {product, spinner,threeDot , setThreeDot, fetchproduct,page} = useContext(productContext)
  
useEffect(() => {
  if (page === 1 && product.length === 0) {
    fetchproduct(1);
  }

  const handleScroll = () => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
    if (scrolledToBottom && !spinner) {
      fetchproduct(page);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [page, spinner, product.length]);
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
    <div className="parentBox">
          {spinner && <Spiner/>}
        <div className="helpone">
        {allcategoryArray.map((item, idx) => (
          <img
            key={idx}
            src={item.image}
            alt="Gallery"
            className={idx === imagearry ? "active" : ""}
          />
        ))}
               </div>
    
      {product.map((item, index) => (
        <div className="allcategoryparents" key={item._id + "-"+ index}>
          <img src={item.image} alt="productImage" />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <h4>{item.category}</h4>
          <div className="child1">
            <h3>{item.priceCents}</h3>
            <h3>{item.rating?.stars}</h3>
          </div>
          <button
          onClick={() => {
           
            const token = localStorage.getItem("token");
            if (!token) {
              navigate("/login");
            } else {
              navigate(`/OrderPage/${item._id}`);
            }
          }}
        >
          order
        </button>
        </div>
      ))}
       
      {spinner && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
        
    </div>
     <footer className="footer" style={{marginTop:'0px', backgroundColor:'rgb(117, 213, 242)'}}>
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

export default Card