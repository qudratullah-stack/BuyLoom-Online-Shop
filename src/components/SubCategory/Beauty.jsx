import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './AllCategoryStyle.css'
function Beauty() {
  const [search, setSearch] = useState("")
  const inputValuehandle = (e)=>{
    setSearch(e.target.value)

  }
  const categoriesArray = [
    {name:'Personal Care', Path:'Beauty & Personal Care'},
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
                   <Link className="nav-link" to={`/AllCategory/${encodeURIComponent(item.Path)}`}>
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

export default Beauty
