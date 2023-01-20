import React from 'react'
import {Button} from "@chakra-ui/react"
import styles from "./ProductCard.css"

const ButtonComp = () => {
  return (
    <div className='button'>
   
   
    <Button colorScheme='red' variant='outline' >ADD TO CART</Button>
    <button >BUY NOW</button>
    </div>
  )
}

export default ButtonComp