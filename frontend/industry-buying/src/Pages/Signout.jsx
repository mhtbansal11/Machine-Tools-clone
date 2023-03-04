import { auth } from "./firebase";
import { signOut } from "firebase/auth";


import React from 'react'

const SignOut = () => {
    const handleSubmission=()=>{
      // const auth=getAuth()
      signOut(auth).then(()=>{
        console.log("Sign Out")
      }).catch((err)=>{
        console.log("err",err)
      })
    }

  return (
    <div>
      <button onClick={handleSubmission}>SignOut</button>
    </div>
  )
}

export default SignOut