import React, { useEffect } from 'react'
import styles from "./Cart.module.css"
import {HiOutlineCurrencyRupee} from "react-icons/hi"
import {TbDiscount2} from "react-icons/tb"
// import {Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import { NavbarCart } from '../Components/NavbarCart'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, getCartItem } from '../Redux/CartReducer/action'
import { CartProduct } from '../Components/CartProduct'
import { Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import {FaPencilAlt} from "react-icons/fa"
import {FaShippingFast} from "react-icons/fa"


export const Cart = () => {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getCartItem())
},[dispatch])
const data = useSelector((store)=>store.cartReducer.cart)

  return (
    <div className={styles.cartPage}>
    {/* ********************NAVBAR************************ */}
    <NavbarCart/>
    <div className={styles.pageWrapper}>


{/* ************************LEFT SIDE SECTION******************* */}
        <div className={styles.pageLeftside}>
          <div className={styles.cartTotalQuantity}>
            <p>My Cart:({data.length}items)</p>
              <div className={styles.orderHeading}> 
                <p className={styles.itemHeading}>Item</p>
                <p className={styles.quantityHeading}>Quantity</p>
                <p className={styles.priceHeading}>Price(Inclusive of GST)</p>
              </div>
          </div>
          <div className={styles.productCardWrapper}>
            {
              data.map((el)=><CartProduct key={el.image} {...el}/>)
            }
          </div>
        </div>


{/* **************************RIGHT SIDE************************ */}
        <div className={styles.pageRightside}>


          {/* ------------------PAYMENT SUMMARY-------------------- */}
          <div>
            <div className={styles.textSymbolWrapper}>
              <div>Payment Summary</div>
              <div><HiOutlineCurrencyRupee/></div>
            </div>
            <p>Estimate shipping charges</p>
            <Stack spacing={4}>
                <InputGroup  w={"90%"} m="auto">
                  <Input variant='outline' borderColor='gray' placeholder='Enter amount' />
                  <InputRightElement children={<FaPencilAlt color='green.500' />} />
                </InputGroup>
            </Stack>
            <p>subtotal:</p>
            <p>shipping charges</p>
            <p>Total Price:</p>
            <div className={styles.shippingText}><FaShippingFast/><p>  Shipping charges applicable as per your pincode</p></div>
          </div>
        


        {/* -------------------Partner Offers----------------------- */}
        <div>
          <div className={styles.textSymbolWrapper}>
                      <div>Partner Offers</div>
                      <div><TbDiscount2/></div>
          </div>
          <div className={styles.offerText}>Get GST invoice and save up to 28% on Business Purchases.</div>
        </div>
       
       <div>
       <div className={styles.textSymbolWrapper}>
            <div>Offers Available</div>
            <div><TbDiscount2/></div>
        </div>
        {/* <InputGroup size='sm'>
          <Input placeholder='Enter Coupon Code' focusBorderColor='black'/>
          <InputRightElement children={'Apply'} color="orange" bg="none" mr="4"/>
        </InputGroup> */}

<input type="text" placeholder='Enter Coupon Code' style={{backgroundColor:"white", border:"1px solid black"}}/>

       </div>
        
       
        </div>
    </div>
    </div>
    
  )
}
