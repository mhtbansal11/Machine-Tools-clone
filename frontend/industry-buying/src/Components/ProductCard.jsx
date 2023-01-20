import React from 'react'
import {Button} from "@chakra-ui/react"
import styles from "./ProductCard.css"
import ButtonComp from './ButtonComp'

const ProductCard = ({data}) => {
  return (
    <div className="main-box" >
    {/* product description on products page- */}
    <div className="div-img" >
       <img src={data.image}  />
     </div>
     <p> {data.title}</p>
    <h3>by <b>{data.brand}</b></h3>
    
    <p>{data.category}</p>
    
 
    <p className='product-price'>RS. {data.price} /Piece </p>
    <div className='button'>
   <ButtonComp/>
    </div>
    

</div>
  )
}

export default ProductCard;