import React from 'react'
import './AllCategoryStyle.css'
import { Link } from 'react-router-dom'
function Electronic() {
  return (
    <>
     <nav className="homepagenavbar">
            
            <img src="navbaricon.png" alt="navbaricon" />
            <input type="text" name="search" id="categorysearchinput" placeholder='Find Category' />
            {/* <div className={`linkparent ${threeDot ? "responsivelinkparent" : ""}`}>
              <ul>
                <li>
                  {" "}
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                </li>
            </div>
            <button onClick={handlethreedot}>☰</button> */}
          </nav>
    <div className="allLinkcontainer">
        <div className="firstchildlink">
            <ul>
                <li>
                  <Link className="nav-link" to="/AllCategory/Electronics & Gadgets">
                    Smart Gadgets
                  </Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Electronic
