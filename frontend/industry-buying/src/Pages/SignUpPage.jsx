import {  Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { async } from '@firebase/util';
import { useNavigate,Link } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import category from "../Pages/industrysign.png"
import category2 from "../Pages/industry2.png"
import category3 from "../Pages/industrylogo.png"
import { LoginPage } from "./LoginPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import { Link } from "react-router-dom";



export  function SignUpPage({ isOpen, onOpen, onClose,lOpen}) {
  // const notify = () => toast("Wow so easy!");
    // const navigate=useNavigate()
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
      // toast("Sign Up Successful")
      // navigate("/")
      onClose()
     window.location.reload()

      
    })
    .catch((err)=>{
    setSubmitButtonDisabled(false);
    setErrorMsg(err.message)
    //done
  })
  };
  const [showPassword, setShowPassword] = useState(false);

    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button 
        bg={"none"}
        w="100%"
        onClick={onOpen}>SignUp</Button>
       
        <Modal
          // bg="teal"
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

            <ModalHeader>Sign Up With New account</ModalHeader>
            {/* <ModalCloseButton bg={"blue"}  /> */}
            <ModalBody pb={6}>
            <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={(event)=>setValues((pre)=>({...pre,first_name:event.target.value}))}/>
                </FormControl>
  
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={(event)=>setValues((pre)=>({...pre,last_name:event.target.value}))} />
                </FormControl>
                <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(event)=>setValues((pre)=>({...pre,email:event.target.value}))}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}onChange={(event)=>setValues((pre)=>({...pre,pass:event.target.value}))} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            </ModalBody>
  
            <ModalFooter>
               
               
              <Button onClick={handleSubmission} disabled={submitButtonDisabled} colorScheme='blue' mr={3}  >
              SignUp
              </Button>
              
              <Button  onClick={() => (lOpen(), onClose())} ><LoginPage/></Button>
              
            </ModalFooter>
          </Box>
          <Box w={"50%"}
          border={"0px solid red"}
          height={"100%"} 
          >
            <img  src={category3}></img>
            <img  src={category}></img>
            <img  src={category2}></img>


            <p>{errorMess}</p>

          </Box>
          </Box>
          </ModalContent>
        </Modal>
      </>
    )
  }