import {  Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import industry from "../Pages/industrylogin.png"
import { Link } from "react-router-dom";



export  function LoginPage() {
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
      
    
      navigate("/")
    })
    .catch((err)=>{
    setSubmitButtonDisabled(false);
    setErrorMsg(err.message)
    //done
  })
  };

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button 
        bg={"none"}
        w="100%"
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
            <ModalCloseButton />
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
              <Link to="/signup"  >
              <Button onClick={onClose}>SignUp</Button>
              </Link>
            </ModalFooter>
          </Box>
          <Box w={"50%"}
          border={"0px solid red"}
          height={"100%"} 
          >
            <img  src={industry}></img>
            <p>{errorMess}</p>

          </Box>
          </Box>
          </ModalContent>
        </Modal>
      </>
    )
  }