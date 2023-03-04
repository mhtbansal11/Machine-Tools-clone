


import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import  HomePage  from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import Payment from "../Pages/Payment"
import  ProductPage  from "../Pages/ProductPage";
import Signup from "../Pages/SignUp";
import { SignUpPage } from "../Pages/SignUpPage";
import SingleProductPage from "../Pages/SingleProductPage";


export function AllRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart /> }/>    
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/up" element={<SignUpPage />} />




      </Routes>
  
  );
}