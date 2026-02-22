import axios from "axios";
import {  useEffect, useState} from "react";
import { productContext } from "./CreateContex";
export const ProductProvider = ({children}) =>{
   const [product, setProduct] = useState([])
   const [spinner, setSpinner] = useState(false)
   const [threeDot, setThreeDot] = useState(false)
   const [SubCategories, SetSubCotegories] = useState([])
   const [orderproduct, setOrderProduct] = useState([])
   const [giveAnswer, setGiveAnswer] = useState('')
    // all product function ***************
const [page, setPage] = useState(1);
 

 const fetchproduct = async (targetPage) => {
  if (spinner) return; 

  setSpinner(true);
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/readproduct?page=${targetPage}&limit=10`
    );

    const newProducts = res.data?.products || [];
    
    if (newProducts.length > 0) {
      setProduct((prev) => [...prev, ...newProducts]);
      setPage(targetPage + 1); 
    }
  } catch (err) {
    console.error(err);
  } finally {
    setSpinner(false);
  }
};
    // all categories function ***************
    const allsubcategories = async(categoryName)=>{
    try{
        setSpinner(true)
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/product/category/subCategory/${encodeURIComponent(categoryName)}`)
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
            const order = await axios.get(`${import.meta.env.VITE_API_URL}/api/Orderproduct/Order/${id}`)
                setOrderProduct(order.data.orderid)
        }catch(err){
            console.error(err)
        }finally{
            setSpinner(false)
        }
    }
    return(
        <productContext.Provider 
        value={{product, setProduct, spinner, threeDot, setThreeDot, SubCategories, allsubcategories, orderidproduct, orderproduct, giveAnswer, setGiveAnswer, fetchproduct,page}}>
            {children}
        </productContext.Provider>
    )
}