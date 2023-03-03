import React from 'react'

import {Button, useDisclosure} from "@chakra-ui/react"

import styles from "./ProductCard.module.css"

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductData } from '../Redux/AppReducer/action'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

const ProductCard = ({data}) => {
const dispatch=useDispatch();
const { isOpen, onOpen, onClose } = useDisclosure()
const cancelRef = React.useRef()

const addToBag=()=>{
 dispatch(addProductData(data))
  console.log("Done")
  console.log(data)
}

  return (
    <div className={styles.main_box} >
    {/* product description on products page- */}

    

    
    <Link to={`/products/${data.id}`}> 
    
     <div className={styles.div_img} >

       <img className={styles.img_in_div} src={data.image} alt="img" />

       {/* <img src={data.image} alt="ima" /> */}


     </div>

     <div>
     <p>  {`${data.title.substring(0, 55)}...`}</p>
    <h3>by <b>{data.brand}</b></h3>
    
    <p>{data.category}</p>
    
 
    <p className={styles.product_price}>RS. {data.price} /Piece </p>
  
   </div>
    </Link>
    
    <div className='button'>
    <>
      <Button colorScheme='red' variant={"outline"} onClick={onOpen}>
       ADD TO CART
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Product is adding to cart....
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? 
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
              CANCEL
              </Button>
              <Button colorScheme='red' onClick={()=>{addToBag()}} ml={3}>
               ADD
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
   {/* <Button colorScheme='red' variant='outline' onClick={()=>{addToBag()}} m='2%'>ADD TO CART</Button> */}
    <Button colorScheme='black' variant='outline' onClick={()=>{console.log("181")}} m='2%'>BUY NOW</Button>
    </div>
    

    </div>
  )
}

export default ProductCard;