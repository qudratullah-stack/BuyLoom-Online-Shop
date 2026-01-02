import React,{useContext} from 'react'
import { productContext } from '../context/CreateContex'
import Spiner from './Spiner'

function Card() {
    const {product, spinner} = useContext(productContext)
  return (
    <>
    <div className="parentBox">
     {spinner && <Spiner/>}
    {product.map((item)=>(<div className="parent">
        <img src={item.image} alt="productImage" />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h4>{item.category}</h4>
        <div className="child1">
        <h3>{item.priceCents}</h3>
        <h3>{item.rating?.stars}</h3>
        </div>
    </div>
    ))}
    </div>
    </>
  )
}

export default Card
