import { Heading, SimpleGrid,Text,Button,Box} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carousel from '../Components/ImageCarousel';


const SingleProductPage = () => {
  const {id} =useParams();
    const productData = useSelector(store=>store.appReducer.payload)
    const dispatch=useDispatch()

    const [currrentPro,setCurrentPro]=useState([])

    useEffect(()=>{
        if(id){
            const product=productData.filter((item)=>item.id===Number(id))
            const pro=product[0]
            console.log(pro)
            pro && setCurrentPro(pro)
        }
     },[id])
  
     return (
    <div style={{'display':"flex","margin":"2%"}}>
    {/* div for side bar */}
    <div style={{"width":"70%", "border":"1px solid red"}}>

      <div style={{"justifyContent":"start"}}>

     

    <SimpleGrid   columns={{base:1,sm:1,md:2}} className="single-div" >
          
          <img className="single-div-img" src={currrentPro.image}/>

       
        <div style={{lineHeight:"30px",marginLeft:"5%",marginRight:"5%"}}>
          
          <Heading as='h4'><b>{currrentPro.title}</b></Heading>
          
          <Text  fontSize='lg'>by<b> {currrentPro.brand}</b></Text>
          
         

          <Text  fontSize='lg'>Discount Upto <b>{currrentPro.discount} % </b></Text>
         
          <Text  fontSize='lg'>Rs. {currrentPro.price}/Piece  </Text>
         
          <div>
          <ul>
              <Text  fontSize='lg' text-align="left"><b> Features</b></Text>
                <li>Brand Name : {currrentPro.brand}  </li>
                <li>Machine Size :	800 (L) x 300 (W) x 1130 (H) mm </li>
                <li>Spindle Speed :	1400-1600 RPM</li>
                <li>Type of Product :	Rice Mill Machine</li>
                <li>Production Capacity :	Rice ≥165-200 kg/hour, Millet ≥120-150 kg/hour</li>
              </ul>
              <Button variant='solid'>MORE DETAILS</Button>
          </div>
          
          <div>
            <Text color='blue' underline='true'>More Agripro Grain Processing Machine
                 More Grain Processing Machine
            </Text>
          </div>

          <Box bg='yellow.100' display='flex'>
            <Text>Flat Rs.100 Off on Orders Above Rs.2000 only on App orders.</Text>
            <Box>Use Code : APP100</Box>
          </Box>
         
          </div>

          
          </SimpleGrid>
          </div>
   <Carousel/>
          
    </div>


    {/* div for products */}
    <div style={{"width":"30%",'marginLeft':'2%'}}>
     
    </div>

  
</div>
  )
}

export default SingleProductPage