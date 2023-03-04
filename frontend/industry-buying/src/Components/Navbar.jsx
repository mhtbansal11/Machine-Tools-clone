import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import styles from "./Navbar.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { auth } from "../Pages/firebase";

import { SignUpPage } from "../Pages/SignUpPage";
import SignOut from "../Pages/SignOut";
// import { auth } from './firebase';
import { LoginPage } from "../Pages/LoginPage";

export const Navbar = () => {
  const [userName,setUserName]=useState("");
 

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
          if(user){
           await setUserName(user.displayName)
            console.log(userName)
          }else setUserName("")
        
        })
        
      },[])
  const Searchurl =
    "https://static3.industrybuying.com/static/svg/search-icon.svg?de0f06193896";
  return (
    <div className={styles.wrapper}>
      <div className={styles.start}>
        <Link className={styles.logo} to={`/`}>
          <img src={logo} alt="logo" />
          <h1 style={{ color: "white" }}>Machine</h1>
          <h1 style={{ color: "red" }}>&</h1>
          <h1 style={{ color: "orange" }}>Tools</h1>
        </Link>
        <div className={styles.select}>
          <select name="categories" id="categories">
            <option value="All Categories">All Categories</option>
            <option value="LED Lights">LED Lights</option>
            <option value="Paints">Paints</option>
            <option value="Corporate Gifts">Corporate Gifts</option>
            <option value="Geysers">Geysers</option>
            <option value="Welding">Welding</option>
            <option value="Tooling and Cutting">Tooling and Cutting</option>
            <option value="Abrasives">Abrasives</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Bearings">Bearings</option>
          </select>
        </div>
      </div>
      <div className={styles.end}>
        <div className={styles.search}>
          <input type="text" placeholder="Search by Brands" />
          <img style={{marginLeft:"4px"}} src={Searchurl} alt="search" />
        </div>
        <div>
          <Link to={`/cart`}>
            <BsFillCartCheckFill color="white" fontSize={"30px"} />
          </Link>
        </div>
        <div className={styles.login}>
          {/* <Link to={`/login`}> */}
            {/* <Button mr={4} color="white" bg={"#e45301"} _hover={{backgroundColor:"transparent"}} variant={"outline"}>
              
              {userName?userName:"Login"}
            </Button> */}
             <Button mr={4} color="white" bg={"#e45301"} _hover={{backgroundColor:"transparent"}} variant={"outline"}>
              
              {userName?userName:<LoginPage/>}
            </Button>
          {/* </Link> */}
          {/* {userName?<Signout/>: */}
          
            <Button  color="white" bg={"#e45301"} _hover={{backgroundColor:"transparent"}} variant={"outline"}>
                {/* Signup */}
              {userName?<SignOut/>:<SignUpPage/>}
            </Button>
          
        {/* //    }  */}
        </div>
      </div>
    </div>
  );
};