


import { Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import  HomePage  from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import Payment from "../Pages/Payment"
import  ProductPage  from "../Pages/ProductPage";
import Signup from "../Pages/SignUp";
import SingleProductPage from "../Pages/SingleProductPage";
import PrivateRoute from "./PrivateRoute";


export function AllRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={
          <PrivateRoute> <Cart /></PrivateRoute>
       
         }/>    
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>
  
  );
}