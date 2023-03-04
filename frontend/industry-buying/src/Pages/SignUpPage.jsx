import {  Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { async } from '@firebase/util';
import { useNavigate,Link } from 'react-router-dom';
// import industry from "../Pages/industrylogin.png"
// import { Link } from "react-router-dom";



export  function SignUpPage() {
    const navigate=useNavigate()
  const [values,setValues]=useState({
    first_name:"",
    last_name:"",
    email:"",
    pass:"",

  });

  const [errorMess,setErrorMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)
  

  const handleSubmission=()=>{
    if(!values.first_name || !values.last_name||!values.email||!values.pass){
      setErrorMsg("Fill all the fields")
      return;
    }else
    setErrorMsg("")
    setSubmitButtonDisabled(true)
    
    createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
      setSubmitButtonDisabled(false)
      const user=res.user;
      console.log(values)
     await updateProfile(user,{
        displayName:values.first_name,
      })
      navigate("/login")
    })
    .catch((err)=>{
    setSubmitButtonDisabled(false);
    setErrorMsg(err.message)
    //done
  })
  };
  const [showPassword, setShowPassword] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button 
        bg={"red"}
        w="100%"
        onClick={onOpen}>SignUp</Button>
       
        <Modal
          
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
         
          <ModalContent
           m={"auto"}
        //    backgroundColor="red"
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
            <img  src={""}></img>
            <p>{errorMess}</p>

          </Box>
          </Box>
          </ModalContent>
        </Modal>
      </>
    )
  }