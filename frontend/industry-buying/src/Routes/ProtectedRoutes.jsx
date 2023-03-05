// import React, { useState } from 'react'
import {  onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../Pages/firebase";






const ProtectedRoutes = ({children}) => {
  const [isauth,setIsAuth]=useState("")
  const navigate=useNavigate()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid)
      setIsAuth(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
   if(isauth){
    return children
   }else{
    navigate("/")
   }
     return 

}


export default ProtectedRoutes