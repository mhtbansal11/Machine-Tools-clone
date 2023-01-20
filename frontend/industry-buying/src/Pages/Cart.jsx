import React, { useEffect } from 'react'
import styles from "./Cart.module.css"
import {HiOutlineCurrencyRupee} from "react-icons/hi"
import {TbDiscount2} from "react-icons/tb"
// import {Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import { NavbarCart } from '../Components/NavbarCart'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../Redux/CartReducer/action'
import { CartProduct } from '../Components/CartProduct'

export const Cart = () => {

const dispatch = useDispatch();
const data = useSelector((store)=>store.cartReducer.cartItem)
console.log(data)

useEffect(()=>{
  dispatch(getCartData())
},[dispatch])


  return (
    <div className={styles.cartPage}>
    <NavbarCart/>
    <div className={styles.pageWrapper}>
        <div className={styles.pageLeftside}>
          <div className={styles.cartTotalQuantity}>
            <p>My Cart:({data.length}items)</p>
          </div>
          <div className={styles.productCardWrapper}>
            {
              data.map((el)=><CartProduct key={el.image} {...el}/>)
            }
          </div>
        </div>
{/* **************************RIGHT SIDE************************ */}
        <div className={styles.pageRightside}>
          <div>
          <div className={styles.textSymbolWrapper}>
            <div>Payment Summary</div>
            <div><HiOutlineCurrencyRupee/></div>
          </div>
          </div>
        
        <div>
        <div className={styles.textSymbolWrapper}>
                    <div>Partner Offers</div>
                    <div><TbDiscount2/></div>
                </div>
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
