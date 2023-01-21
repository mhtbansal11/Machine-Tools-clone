import React from 'react'
import {Button} from "@chakra-ui/react"
import styles from "./ProductCard.module.css"

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductData } from '../Redux/AppReducer/action'

const ProductCard = ({data}) => {
const dispatch=useDispatch();
const addToBag=()=>{
  dispatch(addProductData(data))
  console.log("Done")
}

  return (
    <div className={styles.main_box} >
    {/* product description on products page- */}

    

    
    <Link to={`/products/${data.id}`}> 
    
     <div className={styles.div_img} >
       <img src={data.image} alt="ima" />

     </div>

     <div>
     <p> {data.title}</p>
    <h3>by <b>{data.brand}</b></h3>
    
    <p>{data.category}</p>
    
 
    <p className={styles.product_price}>RS. {data.price} /Piece </p>
  
   </div>
    </Link>
    
    <div className='button'>
 
   <Button colorScheme='red' variant='outline' onClick={()=>{addToBag()}}>ADD TO CART</Button>
    <Button colorScheme='black' variant='outline' onClick={()=>{console.log("181")}}>BUY NOW</Button>
    </div>
    

    </div>
  )
}

export default ProductCard;