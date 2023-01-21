import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "./CartProduct.module.css"
import {RiDeleteBinLine} from "react-icons/ri"
import {FaShippingFast} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, getCartItem, updateCart, updateCartDataSuccess } from '../Redux/CartReducer/action'

export const CartProduct = ({title,price,brand,image,category,quantity,id,discount}) => {
  const dispatch=useDispatch()

const data = useSelector((store)=>store.cartReducer.cartItem)
// const dispatch = useDispatch();

// function refreshPage() {
  
// }

const [count,setCount] = useState(1)

const handleIncrease = (quant) =>{
   quantity=quant+1;
  let dataSent={
    id,
    title,
    price,
    brand,
    image,
    category,
    quantity,
    discount
  }

  dispatch(updateCart(id,dataSent))
  window.location.reload(true);
  //.then(()=>dispatch(getCartData()));
  // {"quantity":quant+1}
}


  return (
    <>
    <div className={styles.productCard}>
    <div className={styles.productDetails}>
    <h2>{title}</h2>
    <img className={styles.productImg} src={image} alt="" width="10%" />
    <h3>Brand:{brand}</h3>
    <h3>Category:{category}</h3>
    <span><RiDeleteBinLine/>Remove</span>
    </div>


    <div className={styles.quantityDetails}>
      <button disabled={count==1} onClick={()=>setCount(count-1)} >-</button>
      <span>{quantity}</span>
      <button onClick={()=>handleIncrease(quantity)}>+</button>
    </div>


    <div className={styles.priceDetails}> 
      <h3>Price:{count*price}</h3>
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          {count*price}Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <p>Price{count*Math.floor(price/1.18)}</p>
      <p>GST: {count*Math.floor(price*.18)}</p>
      <p>Final Price:{count*price}</p>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<span><FaShippingFast/>Free Shipping</span>

    </div>
    </div>

    </>
    
  )
}
