import React, { useState } from 'react';
import './support.css'
import { Link } from 'react-router-dom';

function FAQs() {
  const faqData = [
    {
      question: "How do I place an order?",
      answer: "Go to the product page, select your items, and click on the 'Order' button. Make sure you are logged in to complete the order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, and other secure online payment methods."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is confirmed, you'll receive a tracking number via email or WhatsApp."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach us via the Contact Us page or directly on WhatsApp at +92 316 2538676."
    },
    {
      question: "What is your return policy?",
      answer: "We offer returns within 7 days of delivery. Items must be unused and in original packaging."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes! We use secure encryption and never share your data with third parties."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <nav className="homepagenavbar">
        <img src="/navbaricon.png" alt="navbaricon" />
      </nav>

      <div className="faqs-container">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <div 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
         <footer className='footer'>
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

export default FAQs;