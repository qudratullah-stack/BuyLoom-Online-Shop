import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productContext } from "../../context/CreateContex";
import Spiner from "../Spiner";
import "./AllCategoryStyle.css";
function AllCategory() {
  const { categoryName } = useParams();
  const { SubCategories, allsubcategories, spinner } =
    useContext(productContext);
  useEffect(() => {
    allsubcategories(categoryName);
  }, [categoryName]);
  const navigate = useNavigate();
  return (
    <>
      <nav className="homepagenavbar">
        <img src="/navbaricon.png" alt="navbaricon" />
      </nav>
      
      <div className="parentBox">
        {spinner && <Spiner />}
        {SubCategories &&
          SubCategories.map((item) => (
            <div className="allcategoryparents" key={item._id}>
              <img src={item.image} alt="categortyproductImage" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <h4>{item.category}</h4>
              <div className="child1">
                <h3>Price: {item.priceCents}</h3>
                <h3>Rating: {item.rating?.stars}</h3>
              </div>
              <button
                onClick={() => {
                  const isverify = localStorage.getItem("verify");
                  const token = localStorage.getItem("token");
                  if (!isverify) {
                    navigate("/signup");
                  } else if (!token) {
                    navigate("/login");
                  } else {
                    navigate(`/OrderPage/${item._id}`);
                  }
                }}
              >
                Order
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default AllCategory;
