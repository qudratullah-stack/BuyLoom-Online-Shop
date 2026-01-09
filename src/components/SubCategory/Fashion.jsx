import React ,{useState}from 'react'
import './AllCategoryStyle.css'
import { Link } from 'react-router-dom'
function Fashion() {
  const [search, setSearch] = useState("")
    const inputValuehandle = (e)=>{
      setSearch(e.target.value)
  
    }
    const categoriesArray = [
      {name:' Accessories', Path:'Fashion & Apparel'},
      {name:'Health & Fitness', Path:'Health & Fitness'},
      {name:'Home & Kitchen', Path:'Home & Kitchen'},
    ]
    const filtercategoriesArray = search? categoriesArray.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
      
    )
    : categoriesArray;
  return (
    <>
   <nav className="homepagenavbar">
              
              <img src="navbaricon.png" alt="navbaricon" />
              <input type="text" name="search" id="categorysearchinput" onChange={inputValuehandle} placeholder='Find Category' />
            </nav>
      <div className="allLinkcontainer">
          <div className="firstchildlink">
               <ul>
                {filtercategoriesArray.map((item, index)=>(
                  <li key={index} >
                     <Link className="nav-link" to={`/AllCategory/${item.Path}`}>
                      {item.name}
                    </Link> 
                  </li>
                ))}
  
  
              </ul>
          </div>
      </div>
    </>
  )
}
export default Fashion
