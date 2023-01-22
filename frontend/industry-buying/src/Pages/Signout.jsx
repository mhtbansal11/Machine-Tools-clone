import { auth } from "./firebase";
import { signOut } from "firebase/auth";

import React from 'react'

const Signout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

  return (
    <div>Signout</div>
  )
}

export default Signout