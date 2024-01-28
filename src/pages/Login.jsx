//import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pharmaseeLogo from '../components/pharmaseeLogo.png';
import pharmaseeName from '../components/pharmasee.png';

import {
    Heading,
    Flex,
    Input,
    Button,
    Stack,
    Box,
    FormControl,
    FormHelperText,
    Image,
    Link
  } from "@chakra-ui/react";
  

const Login = () => {

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        // console.log(event.target.elements.username.value);
        // console.log(event.target.elements.password.value);
        const user = event.target.elements.username.value;
        if (user === "TheMillers")
        {
          navigate('/dashboard');
        }
        else{
          alert("Family username does not exist")
        }
        // const res = await fetch('./logins.json'); // Assuming logins.json is in the public folder
        // console.log(res);


        // if (!res.ok) {
        //   throw new Error(`Failed to fetch logins data (${res.status} ${res.statusText})`);
        // }

        // const loginsData = await res.json();
        // console.log(loginsData);
        // const userExists = loginsData.users.includes(user);
        // if(userExists){
        //   navigate('/dashboard');
        // }
        // else{
        //   alert("Family username does not exist")
      } catch (e) {
        console.log(e);
      }
    };

    const handleClickSignUp = async data => {
      //const { username, password } = data;
      try {
        navigate('/signup');
        //reset();
      } catch (e) {
        console.log(e);//setError('Failed to log in');
      }
    };


    return (
        <>
            <Flex
            flexDirection="row"
            width="100wh"
            height="100vh"
            backgroundColor="white"
            > 

            <Box bg="#44accf" minW={{base:"40%"}}>
              <Heading paddingLeft={4} paddingRight={4} textAlign = "center" mt = "50%" color="white">Stay informed on your loved ones' medications!</Heading>
            </Box>

            <Stack
            justifyContent="center"
            alignItems="center"
            minW = {{base:"60%"}}
            flexDir="column"
            >
            <Box>
            <Image src={pharmaseeLogo} alt='cute pill' width="125px" height="125px"/>
            </Box>

            <Box>
            <Image src={pharmaseeName} alt='website name' width = "30vw"/>
            </Box>

            <Box minW={{ base: "50%"}}>
                <form onSubmit={handleSubmit}>
                  <Stack
                    spacing={2}
                    backgroundColor="whiteAlpha.900"
                    boxShadow="base"
                    rounded = "md"
                    padding = "20px"
                    alignItems = "center"
                    justifyContent = "center"
                  >
                    <FormControl id="username" isRequired>
                        <Input type="username" placeholder="Family Username" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <Input type="password" placeholder="Password"/>
                      <FormHelperText textAlign="right" color = "gray" textDecoration = "underline">
                          <p> Forgot password?</p>
                      </FormHelperText>
                    </FormControl>

                    <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme='blue'
                    backgroundColor = "#44accf"
                    width="full"
                    >
                      Login
                    </Button>
    
                    <Stack
                      flexDir = "row"
                      justifyContent = "center"
                    >
                      <FormControl minW = {{base:"80%"}}>
                          <FormHelperText textAlign="right" color = "gray">
                          <p>Not registered yet?</p> 
                        </FormHelperText>
                      </FormControl>

                      <FormControl minW = {{base:"80%"}}>
                          <FormHelperText textAlign="left" color = "gray">
                          <Link textDecoration = "underline" color='#44accf' href='/signup'>Sign Up Family</Link>
                        </FormHelperText>
                      </FormControl>
                    </Stack>
                  </Stack>
                </form>
            </Box>
            </Stack>
        </Flex>
      </>
    );
};
export default Login;