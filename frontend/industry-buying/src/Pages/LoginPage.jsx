import {  Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';
// import { accessToken} from './firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import industry from "../Pages/industrylogin.png"
import { Link } from "react-router-dom";
import { SignUpPage } from "./SignUpPage";



export  function LoginPage({isOpen, onOpen, onClose,sOnOpen}) {






    const navigate=useNavigate()
  const [values,setValues]=useState({
    email:"",
    pass:"",

  });

  const [errorMess,setErrorMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)
  

  const handleSubmission=()=>{
    if(!values.email||!values.pass){
      setErrorMsg("Fill all the fields")
      return;
    }else
    setErrorMsg("")
    setSubmitButtonDisabled(true)
    
    signInWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
      setSubmitButtonDisabled(false)
      
       onClose()
      navigate("/")
    })
    .catch((err)=>{
    setSubmitButtonDisabled(false);
    setErrorMsg(err.message)
    //done
  })
  };
    // console.log("auth dtails: ",users.accessToken)
  
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
 
    return (
      <>
        <Button 
        bg={"none"}
        onClick={onOpen}>SignIn</Button>
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
  
        <Modal
          
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          {/* <ModalOverlay
          bg={"white"}
          
          /> */}
       
          <ModalContent
           m={"auto"}
          >
           <Box w={"600px"}  bg={"#fa832a"}
          display={"flex"} >
          <Box     
          border={"1px solid teal"}
          w={"50%"}
          >

            <ModalHeader>Sign in your account</ModalHeader>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='Email Address' type="email" onChange={(event)=>setValues((pre)=>({...pre,email:event.target.value}))} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' type="password" onChange={(event)=>setValues((pre)=>({...pre,pass:event.target.value}))} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
               
               
              <Button onClick={handleSubmission} disabled={submitButtonDisabled} colorScheme='blue' mr={3}  >
              Login
              </Button>
              
              <Button onClick={() =>(sOnOpen(), onClose())} ><SignUpPage/></Button>
              
            </ModalFooter>
          </Box>
          <Box w={"50%"}
          border={"0px solid red"}
          height={"100%"} 
          display="flex"
          >
            {/* <ModalCloseButton /> */}

            <img  src={industry}></img>
            <p>{errorMess}</p>

          </Box>
          </Box>
          </ModalContent>
        </Modal>
      </>
    )
  }