import React, { useEffect } from 'react'
import { addProductData, getProductData } from '../Redux/AppReducer/action'
import { useDispatch, useSelector } from "react-redux"

const ProductPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProductData())
        dispatch(addProductData())
    },[])

  return (
    // parent div
    <div> 
       
        {/* div for heading */}
        <div>
            <h1>ProductPage</h1>
        </div>
           
            {/* div for page */}
            <div style={{'display':"flex"}}>
                    {/* div for side bar */}
                    <div style={{"width":"30%", "border":"1px solid red", "height":"100vh"}}></div>
                
                
                    {/* div for products */}
                    <div style={{"width":"70%", "border":"5px solid green", "height":"100vh"}}>
                        
                    </div>
            </div>
            
    </div>
  )
}

export default ProductPage