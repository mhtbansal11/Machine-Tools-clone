import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

export default function LoginPage() {
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


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(event)=>setValues((pre)=>({...pre,email:event.target.value}))} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(event)=>setValues((pre)=>({...pre,pass:event.target.value}))}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                disabled={submitButtonDisabled}
                onClick={handleSubmission}
                >
                Sign in
              </Button>
              <p>{errorMess}</p>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}