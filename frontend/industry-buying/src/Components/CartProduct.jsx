import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "./CartProduct.module.css"

export const CartProduct = ({title,price,brand,image,category}) => {

const [count,setCount] = useState(1)

  return (
    <>
    <div className={styles.productCard}>
    <div className={styles.productDetails}>
    <h2>{title}</h2>
    <img src={image} alt="" width="10%" />
    <h3>Brand:{brand}</h3>
    <h3>Category:{category}</h3>
    </div>
    <div className={styles.quantityDetails}>
      <button disabled={count==1} onClick={()=>setCount(count-1)} >-</button>
      <span>{count}</span>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
    <div className={styles.priceDetails}> 
      <h3>Price:{count*price}</h3>
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          {price}Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <p>Price{Math.floor(price/1.18)}</p>
      <p>GST: {Math.floor(price*.18)}</p>
      <p>Final Price:{price}</p>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
    </div>

    </>
    
  )
}
