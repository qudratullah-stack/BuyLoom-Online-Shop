import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../context/CreateContex";

function HomePage() {
  const { threeDot, setThreeDot } = useContext(productContext);
  const handlethreedot = () => {
    setThreeDot((prev) => !prev);
  };
  const text = [
    "❤️Welcome to Buyloom Shop 🛍️  Everything You Need in One Place ✨ ❤️",
    "Explore a wide range of products and enjoy exclusive offers. Start your shopping journey now!",
    "Discover quality products at the best prices, handpicked just for you.",
    "Shop smart, shop fast, and enjoy a seamless online shopping experience.",
    "From daily essentials to premium items. everything you need is right here.",
  ];
  const [pahargraphtext, setPaharagraphtext] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPaharagraphtext((prev) => (prev + 1) % text.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const colors = ["#0e1f4eff", "#08525fff", "#0d2fc4ff", "#a116a1ff", "black"];

  return (
    <>
      <nav className="homepagenavbar">
        
        <img src="navbaricon.png" alt="navbaricon" />
        <div className={`linkparent ${threeDot ? "responsivelinkparent" : ""}`}>
          <ul>
            <li>
              {" "}
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={handlethreedot}>☰</button>
      </nav>
      <div className="homepagebody">
        <div className="containers">
          <div className="homeinformation">
            <h2>Welcome to Our Store</h2>
            <div className="pharagraph">
              <p
                key={pahargraphtext}
                style={{ color: colors[pahargraphtext] }}
                className="animate-text"
              >
                {text[pahargraphtext]}
              </p>
            </div>
            <button className="homepagelinkbtn">
              <Link className="nav-link" to="/products">
                Start free trail
              </Link>
            </button>
          </div>
          <img src="banner2.webp" alt="byloom" />
          <div className="responsiveimg">
            <img src="responsivebanner.jpeg" alt="responsivebanner" />
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="homepageinformationscrool">
          <ul>
            <li> 🛍️ Welcome to Buyloom</li>
            <li>
              {" "}
              🏠 Easy Shopping Experience Buyloom makes online shopping simple,
              fast, and enjoyable for everyone.
            </li>
            <li>
              {" "}
              🔍 Find Products Quickly Browse products easily with clear
              categories and a smooth layout.
            </li>
            <li>
              {" "}
              📱 Works on Any Device Shop comfortably on mobile, tablet, or
              desktop without any issues.
            </li>
            <li>
              {" "}
              ⚡ Fast & Smooth Performance Pages load quickly so you can shop
              without waiting.
            </li>
            <li>
              {" "}
              🖼️ Clear Product Details View product images, prices, categories,
              and ratings all in one place.
            </li>
            <li>
              {" "}
              🔄 Always Up-to-Date Products Products are updated in real time,
              so you always see the latest items.
            </li>
            <li>
              {" "}
              ⏳ No Confusing Loading Screens A simple loading indicator keeps
              you informed while products load.
            </li>
            <li>
              {" "}
              🧭 Simple Navigation Easily move between Home, Products, Login,
              and Signup pages.
            </li>
            <li>
              {" "}
              🛒 Focused Shopping Journey Start exploring products only when you
              are ready, with a clean home page first.
            </li>
            <li>
              🔐 Safe User Accounts (Coming Soon) Login and Signup features are
              designed to keep your account secure.
            </li>
            <li>
              {" "}
              🎨 Clean & Modern Design A visually pleasing interface designed
              for comfort and clarity.
            </li>
            <li>
              {" "}
              🧾 Organized Product Cards Products are displayed in neat cards
              for easy comparison.
            </li>
            <li>
              {" "}
              💡 Beginner-Friendly Interface No technical knowledge needed —
              everything is easy to understand.
            </li>
            <li>
              🚀 Built for Speed & Growth Buyloom is designed to grow with new
              features over time.{" "}
            </li>{" "}
            <li>
              🤝 Made for Real Users Every feature is created with user comfort
              and ease in mind.
            </li>
            <li>
              ⭐ User-Friendly Tagline Buyloom — Smart, Simple, and Smooth
              Online Shopping.
            </li>
          </ul>
        </div>
        <div className="homepagevideo2">
          <video src="byloom.mp4" autoPlay loop muted></video>
          <ul>
            <li>
              🛒 Browse Products: Explore a wide variety of items available in
              our store.
            </li>
            <li>
              🔍 Search Easily: Use the search bar to find your favorite
              products quickly.
            </li>
            <li>
              📝 Add to Cart: Select items and add them to your shopping cart.
            </li>
            <li>
              💳 Secure Payment: Checkout safely with multiple payment options.
            </li>
            <li>
              📦 Track Orders: Get real-time updates on your order delivery.
            </li>
            <li>
              ⭐ Rate & Review: Share your feedback to help other shoppers.
            </li>
          </ul>
        </div>
      </div>
      <div className="homepagecontactcontainer">
        <div className="whatsapp">
          <div className="whatsappanimat">
            <a href="https://wa.me/03162538676" target="_blank">
              {" "}
              <img src="whatsappicon.png" alt="whatsappicon" />
            </a>
          </div>
          <h2>Order via WhatsApp</h2>
        </div>
        <div className="whatsapp">
          <div className="gmailanimate">
            <a href="mailto:qudratullahmasoom6688@gmail.com">
              {" "}
              <img src="gmailicon.png" alt="gmailcon" />
            </a>
          </div>
          <h2>Contact via Email</h2>
        </div>
      </div>
      <div className="parent-container">
        <div className="trusted-list">
          <span>⚡ Electronics </span>
          <span>🧥 Fashion</span>
          <span>🛍️ Buyloom </span>
          <span>✨ Beauty & Care </span>
          <span>🚀 Smart Gadgets </span>
          <span>📦 Daily Needs</span>
          <span>Top Deals</span>
          <span>🧍‍♂️ Men's Wear</span>
          <span>🧍‍♀️ Women's Fashion</span>
          <span>🧰 Kitchen Tools</span>

          <span>⚡ Electronics </span>
          <span>🧥 Fashion</span>
          <span>🛍️ Buyloom </span>
          <span>✨ Beauty & Care </span>
          <span>🚀 Smart Gadgets </span>
          <span>📦 Daily Needs</span>
          <span>Top Deals</span>
          <span>🧍‍♂️ Men's Wear</span>
          <span>🧍‍♀️ Women's Fashion</span>
          <span>🧰 Kitchen Tools</span>
        </div>
      </div>
      <footer class="footer">
        <div class="footer-box">
          <h3>Buyloom</h3>
          <p>Your smart online shopping destination.</p>
        </div>

        <div class="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Top Deals</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
          </ul>
        </div>

        <div class="footer-box">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Order Guide</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div class="footer-box">
          <h4>Contact</h4>
          <p>Email: support@buyloom.com</p>
          <p>WhatsApp: +92 316 2538676</p>
        </div>
      </footer>

      <div class="footer-bottom">© 2026 Buyloom. All rights reserved.</div>
    </>
  );
}

export default HomePage;

