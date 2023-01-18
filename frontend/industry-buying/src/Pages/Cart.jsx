import React from 'react'
import styles from "./Cart.module.css"
import {HiOutlineCurrencyRupee} from "react-icons/hi"
import {CiPercent} from "react-icons/ci"
import {Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import { NavbarCart } from '../Components/NavbarCart'

export const Cart = () => {
  return (
    <>
    <NavbarCart/>
    <div className={styles.pageWrapper}>
        <div className={styles.pageLeftside}>

        </div>

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
                    <div><CiPercent/></div>
                </div>
        </div>
       
       <div>
       <div className={styles.textSymbolWrapper}>
            <div>Offers Available</div>
            <div><CiPercent/></div>
        </div>
        {/* <InputGroup size='sm'>
          <Input placeholder='Enter Coupon Code' focusBorderColor='black'/>
          <InputRightElement children={'Apply'} color="orange" bg="none" mr="4"/>
        </InputGroup> */}

<input type="text" placeholder='Enter Coupon Code' style={{backgroundColor:"white", border:"1px solid black"}}/>

       </div>
        
       
        </div>
    </div>
    </>
    
  )
}
