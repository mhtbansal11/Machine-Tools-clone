
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductData } from "../Redux/AppReducer/action";
import {SimpleGrid,Box, Heading, Skeleton, Stack} from "@chakra-ui/react"
import { useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Sidebar2_P from "../Components/Sidebar2_P";
import { Navbar } from "../Components/Navbar";

const ProductPage = () => {
  const productData = useSelector(store=>store.appReducer)



  // console.log(store)
  const location = useLocation();
 const [searchParams] = useSearchParams();
  // console.log(location);

  const {payload, isLoading, isError} = productData
  const dispatch = useDispatch();
   
  useEffect(()=>{
    const order = searchParams.get('order');

    let paramObj = {
      params: {
        brand: searchParams.getAll('brand'),
        _sort: order && "price",
        _order: order,
      }
    }

        dispatch(getProductData(paramObj))
        // dispatch(getProductData())
    },[location.search]) //location.search

  return (
    // parent div
    <div> 
       <Navbar />
        {/* div for heading */}
        <div>
        <Heading mb={4} p={2}   >
        Grain Processing Machine
            </Heading>
        </div>
           
            {/* div for page */}
            <div style={{'display':"flex","margin":"2%"}}>
                    {/* div for side bar */}
                    <div style={{"width":"30%", "height":"100vh"}}>

                            <Sidebar2_P/>

                    </div>
                
                
                    {/* div for products */}
                    <div style={{"width":"70%",'marginLeft':'2%'}}>
                    <SimpleGrid   columns={{base:1,sm:2, md:3}} spacingX='40px' spacingY='20px'>
                 { isLoading ? <Skeleton height={"150vh"} width={"80vw"}/>:  payload &&
                         payload.map(singlePro=>{
                         return (<Box w='100%' key={singlePro.id}  borderColor={"black"}>
                     <ProductCard  data={singlePro} /> 
                         </Box>)
                         }) }
            </SimpleGrid>
                    </div>
            </div>
            
    </div>
  )
}

export default ProductPage