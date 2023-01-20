import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
  const {id} =useParams();
    const productData = useSelector(store=>console.log(store))
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
    <div style={{"width":"70%", "border":"1px solid red", "height":"100vh"}}></div>


    {/* div for products */}
    <div style={{"width":"30%",'marginLeft':'2%'}}>
      <img src={currrentPro.image}></img>
    </div>
</div>
  )
}

export default SingleProductPage