
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductData } from "../Redux/AppReducer/action";
import {SimpleGrid,Box, Heading, Skeleton, Stack} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const ProductPage = () => {
  const productData = useSelector(store=>store.appReducer)
  // console.log(store)
  const {payload, isLoading, isError} = productData
  const dispatch = useDispatch();
   
  useEffect(()=>{
        dispatch(getProductData())
       
    },[])

  return (
    // parent div
    <div> 
       
        {/* div for heading */}
        <div>
        <Heading mb={4} p={2}   >
Grain Processing Machine
            </Heading>
        </div>
           
            {/* div for page */}
            <div style={{'display':"flex","margin":"2%"}}>
                    {/* div for side bar */}
                    <div style={{"width":"30%", "border":"1px solid red", "height":"100vh"}}></div>
                
                
                    {/* div for products */}
                    <div style={{"width":"70%",'marginLeft':'2%'}}>
                    <SimpleGrid   columns={{base:1,sm:2, md:3}} spacingX='40px' spacingY='20px'>
                 { isLoading ? <Skeleton height={"150vh"} width={"80vw"}/>:  payload &&
                         payload.map(singlePro=>{
                         return (<Box w='100%' key={singlePro.id}  borderColor={"black"}>
                         <Link to={`/products/${singlePro.id}`}> <ProductCard  data={singlePro} /> </Link>  
                         </Box>)
                         }) }
            </SimpleGrid>
                    </div>
            </div>
            
    </div>
  )
}

export default ProductPage