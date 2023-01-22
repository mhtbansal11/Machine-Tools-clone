import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "./CartProduct.module.css"
import {RiDeleteBinLine} from "react-icons/ri"
import {FaShippingFast} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, getCartItem, updateCart, updateCartDataSuccess } from '../Redux/CartReducer/action'
import {BiMinus,BiPlus} from "react-icons/bi"


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
    <div className={styles.productCardCart}>


{/* ----------------------Product Description Div--------------------- */}
        <div className={styles.productDetails}>
          <p className={styles.titleDesc}>{title}</p>
          <div className={styles.imgTextWrapper}>
            <div className={styles.productImgDiv}>
            <img className={styles.productImg} src={image} alt="" width="10%" />
            </div>
            <div className={styles.textDescDiv}>
              <div><p>Brand:</p><span>{brand}</span></div>
              <div><p>Category:</p><span>{category}</span></div>
              <div className={styles.removeIconText}><RiDeleteBinLine/><p>Remove</p></div>
            </div>
          </div>
          
          
        </div>


    
{/* ----------------------Quantity Div------------------------- */}

    <div className={styles.quantityDetailsWrapper}>
      <div className={styles.quantityDiv}>
          <div className={styles.decrementDisplay}>
          <button disabled={count==1} onClick={()=>setCount(count-1)} ><BiMinus/></button>
          </div>
          <div className={styles.quantityDisplay}>
          <span>{quantity}</span>
          </div>
          <div className={styles.incrementDisplay}>
          <button onClick={()=>handleIncrease(quantity)}><BiPlus/></button>
          </div>
          
      </div>
    </div>

{/* ----------------------Pricing Div---------------------- */}

    <div className={styles.priceDetails}> 
      {/* <h3>Price:{count*price}</h3> */}
      <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem textAlign={"left"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' display={"flex"} alignItems="center">
                  Rs. {count*price}
                  <Box fontSize={"12px"} color="#3d86d4" pl={2}>
                  Details<AccordionIcon />
                  </Box>
                  
                </Box>
                
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bgColor={"#f7f7f7"} fontSize={"12px"}>
              <p>Price Rs{count*Math.floor(price/1.18)}</p>
              <p>GST @18% +{count*Math.floor(price*.18)}</p>
              <p>Final Price{count*price}</p>
            </AccordionPanel>
          </AccordionItem>
</Accordion>
<div className={styles.shipIconText}><FaShippingFast/><p>Free Shipping</p></div>


    </div>
    </div>

    </>
    
  )
}
