import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import styles from "./Navbar.module.css";
import {   Box,
  Button,
 
  Icon,
  useDisclosure,
  Collapse,
  } from "@chakra-ui/react";

  

  import { useNavigate } from "react-router";
  import { GiHamburgerMenu } from "react-icons/gi";
  import { CgClose } from "react-icons/cg";

import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { auth } from "../Pages/firebase";

import Signout from "../Pages/SignOut";
import { SignUpPage } from "../Pages/SignUpPage";

import { LoginPage } from "../Pages/LoginPage";
import SignOut from "../Pages/SignOut";

// import { auth } from './firebase';

export const Navbar = () => {
  const navigate=useNavigate()
  const [userName, setUserName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: sIsOpen,
    onOpen: sOnOpen,
    onClose: sOnClose,
  } = useDisclosure();
  const [snavbar, setSnavbar] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);

        console.log(user.displayName);
        await setUserName(user.displayName);
        //  console.log(userName)
      } else setUserName("");
    });
  }, []);
  //  userName? window.location.reload():console.log("not auhorised")

  // const Searchurl =
  //   "https://static3.industrybuying.com/static/svg/search-icon.svg?de0f06193896";

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.start}>
        <Link className={styles.logo} to={`/`}>
          <img src={logo} alt="logo" />
          <h1 style={{ color: "white"}}>Machine</h1>
          <h1 style={{ color: "red" }}>&</h1>
          <h1 style={{ color: "orange"}}>Tools</h1>
        </Link>
      </Box>
      

      <Box className={styles.login}>
        <Box className={styles.cart}>
          <Link to={`/cart`}>
            <BsFillCartCheckFill color="white" fontSize={"30px"} />
          </Link>
        </Box>
        <Button
          mr={4}
          color="white"
          bg={"#e45301"}
          _hover={{ backgroundColor: "#222f3e" }}
          variant={"outline"}
        >
          {userName ? (
            userName
          ) : (
            <LoginPage
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              sOnOpen={sOnOpen}
            />
          )}
        </Button>

        <Button
          color="white"
          bg={"#e45301"}
          _hover={{ backgroundColor: "#222f3e" }}
          variant={"outline"}
        >
          {userName ? (
            <SignOut />
          ) : (
            <SignUpPage
              isOpen={sIsOpen}
              onClose={sOnClose}
              onOpen={sOnOpen}
              lOpen={onOpen}
            />
          )}
        </Button>
      </Box>

      <Box
        w="100%"
        h="70px"
        p="20px"
        display={["flex", "flex", "none"]}
        position={"fixed"}
        fontSize="20px"
        bg="#232f3e"
        zIndex={99999}
        
      >
        <Box position={"absolute"} className={styles.mobile} >
          <Link href="/">
          <img  src={logo} alt="logo" />
         
          </Link>
        </Box>

        

        <Box w="100%" align="right">
        
          {snavbar ? (
            <Button onClick={() => setSnavbar(!snavbar)} p="10px">
              <Icon boxSize="25px" as={CgClose} />
            </Button>
          ) : (
            <Button bg="#232f3e" onClick={() => setSnavbar(!snavbar)} p="10px">
              <Icon color="white" boxSize="25px" as={GiHamburgerMenu} />
            </Button>
          )}

          <Collapse in={snavbar} animateOpacity>
          
            <Box
              p="80px"
              mt="4"
              bg="#232f3e"
              rounded="md"
              shadow="dark-lg"
              zIndex={99}
              display="flex"
              flexDirection="column"
              align="center"
              justifyContent="center"
              gap={5}
              color="white"
            >
             <Link to={`/cart`}>
            <BsFillCartCheckFill color="white" fontSize={"30px"} />
          </Link>
             <Button
          mr={4}
          color="white"
          bg={"#e45301"}
          _hover={{ backgroundColor: "#222f3e" }}
          variant={"outline"}
        >
          {userName ? (
            userName
          ) : (
            <LoginPage
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              sOnOpen={sOnOpen}
            />
          )}
        </Button>

        <Button
          color="white"
          bg={"#e45301"}
          _hover={{ backgroundColor: "#222f3e" }}
          variant={"outline"}
        >
          {userName ? (
            <SignOut />
          ) : (
            <SignUpPage
              isOpen={sIsOpen}
              onClose={sOnClose}
              onOpen={sOnOpen}
              lOpen={onOpen}
              
            />
          )}
        </Button>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </Box>
    
  );
};
