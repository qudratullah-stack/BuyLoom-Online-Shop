import React from 'react'
import { Link } from 'react-router-dom'
import './AllCategoryStyle.css'
function Beauty() {
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
                  <Link className="nav-link" to={`/AllCategory/Beauty & Personal Care`}>
                    Personal Care
                  </Link>    
                </li>
                <li>
                  <Link className="nav-link" to="/AllCategory/Health & Fitness">
                    Health & Fitness
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/AllCategory/Home & Kitchen">
                   Home & Kitchen
                  </Link>
                </li>

            </ul>
        </div>
    </div>
    </>
  )
}

export default Beauty
