
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import  HomePage  from "../Pages/HomePage";
import Payment from "../Pages/Payment"
import  ProductPage  from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import ProtectedRoutes from "./ProtectedRoutes";


export function AllRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={ <ProtectedRoutes><Cart /></ProtectedRoutes>}/>   
        
        <Route path="/payment" element={<Payment />} />
         
      





      </Routes>
  
  );
}