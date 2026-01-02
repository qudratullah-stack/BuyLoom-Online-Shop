import axios from "axios";
import {  useState, useEffect} from "react";
import { productContext } from "./CreateContex";
export const ProductProvider = ({children}) =>{
   const [product, setProduct] = useState([])
   const [spinner, setSpinner] = useState(false)
   const [threeDot, setThreeDot] = useState(false)
   const fetchproduct = async()=>{
    try{
        setSpinner(true)
      const res =   await axios.get('http://localhost:9000/api/readproduct') 
        setProduct(res.data.Products || [])
        
    }catch(err){
       console.error(err)
    }finally{
         setSpinner(false)
    }
   }
   useEffect(()=>{
    fetchproduct()
   },[])
    return(
        <productContext.Provider 
        value={{product, setProduct, spinner, threeDot, setThreeDot}}>
            {children}
        </productContext.Provider>
    )
}