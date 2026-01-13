import React, { useState } from "react";
import { Link } from "react-router-dom";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "923162538676";

    const message =
      `📩 Contact Request\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📞 Phone: ${phone}\n` +
      `💬 Message: ${messageText}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <nav className="homepagenavbar">
        <img src="/navbaricon.png" alt="navbaricon" />
      </nav>

      <div className="contact-page">
        <h2>Contact Us</h2>
        <p className="subtitle">We usually reply within 24 hours.</p>

        <div className="contact-container">

          <form onSubmit={handleSubmit} className="contact-form">

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Phone</label>
            <input
              type="tel"
              placeholder="0300xxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              required
            ></textarea>

            <button type="submit">Send on WhatsApp</button>
          </form>

          <div className="contact-info">
            <h3>📍 Our Office</h3>
            <p>Quetta, Balochistan, Pakistan</p>

            <h3>📞 Phone</h3>
            <p>+92 316 2538676</p>

            <h3>📧 Email</h3>
            <p>Masoomkhanqudrat@gmail.com</p>
          </div>

        </div>
      </div>
     <footer className="footer">

  <div className="footer-box">
    <h4>Support</h4>
    <ul>
      <li>
        <Link to="/HelpCenter">Help Center</Link>
      </li>
      <li>
        <Link to="/ContactUs">Contact Us</Link>
      </li>
    </ul>
  </div>

 <div className="footer-box">
     <h4>Social Media</h4>
     <ul>
       <li>
         <Link  to="https://facebook.com" target="_blank" rel="noopener noreferrer">
           Facebook
         </Link>
       </li>
 
       <li>
         <Link  to="https://instagram.com" target="_blank" rel="noopener noreferrer">
           Instagram
         </Link>
       </li>
 
       <li>
         <Link to="https://wa.me/923162538676" target="_blank" rel="noopener noreferrer">
           WhatsApp
         </Link>
       </li>
     </ul>
   </div>

  <div className="footer-box">
    <h4>Contact</h4>
    <p>Email: masoomkhanqudrat@gmail.com</p>
    <p>WhatsApp: +92 316 2538676</p>
  </div>

</footer>

<div className="footer-bottom">
  © 2026 Buyloom. All rights reserved.
</div>
    </>
  );
}

export default ContactUs;