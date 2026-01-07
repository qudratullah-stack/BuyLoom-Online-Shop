import axios from "axios";
import {  useState, useEffect} from "react";
import { productContext } from "./CreateContex";
export const ProductProvider = ({children}) =>{
   const [product, setProduct] = useState([])
   const [spinner, setSpinner] = useState(false)
   const [threeDot, setThreeDot] = useState(false)
   const [SubCategories, SetSubCotegories] = useState([])
   const [orderproduct, setOrderProduct] = useState([])
    // all product function ***************
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
    // all categories function ***************
    const allsubcategories = async(categoryName)=>{
    try{
        setSpinner(true)
        const response = await axios.get(`http://localhost:9000/api/product/category/subCategory/${encodeURIComponent(categoryName)}`)
        SetSubCotegories(response.data.nameCategory || [])
        
    }catch(err){
        console.error(err)
    }finally{
        setSpinner(false)
    }
   }
   
    // all categories function ***************
    const orderidproduct = async(id)=>{
        try{
            setSpinner(true)
            const order = await axios.get(`http://localhost:9000/api/Orderproduct/Order/${id}`)
                setOrderProduct(order.data.orderid)
        }catch(err){
            console.error(err)
        }finally{
            setSpinner(false)
        }
    }
    return(
        <productContext.Provider 
        value={{product, setProduct, spinner, threeDot, setThreeDot, SubCategories, allsubcategories, orderidproduct, orderproduct}}>
            {children}
        </productContext.Provider>
    )
}