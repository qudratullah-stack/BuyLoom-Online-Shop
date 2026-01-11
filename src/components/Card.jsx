import React,{useContext} from 'react'
import { productContext } from '../context/CreateContex'
import Spiner from './Spiner'
import { useNavigate , Link} from 'react-router-dom'
import './SubCategory/AllCategoryStyle.css'
import './style/Responsive.css'
function Card() {
   const navigate = useNavigate();
    const {product, spinner,threeDot , setThreeDot} = useContext(productContext)
    const handlethreedot = () => {
    setThreeDot((prev) => !prev);
  };
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
    {product.map((item)=>(<div className="allcategoryparents" key={item._id}>
        <img src={item.image} alt="productImage" />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h4>{item.category}</h4>
        <div className="child1">
        <h3>{item.priceCents}</h3>
        <h3>{item.rating?.stars}</h3>
        </div>
        <button  onClick={() => {
                  const isverify = localStorage.getItem("verify");
                  const token = localStorage.getItem("token");
                  if (!isverify) {
                    navigate("/signup");
                  } else if (!token) {
                    navigate("/login");
                  } else {
                    navigate(`/OrderPage/${item._id}`);
                  }
                }}>order</button> 
        
    </div>
    ))}
    
    </div>
    </>
  )
}

export default Card
