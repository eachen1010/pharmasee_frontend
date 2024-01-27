//import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import pharmaseeLogo from '../components/pharmaseeLogo.png';

import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    FormControl,
    FormHelperText,
    ChakraProvider,
    extendTheme
  } from "@chakra-ui/react";
  

const Login = () => {

    const navigate = useNavigate();
    //const [error, setError] = useState('');

    // useEffect(() => {
    //     if(currentUser)
    //     {
    //         navigate('/search');
    //     };
    //   });

    const handleClick = async data => {
        //const { username, password } = data;
        try {
          navigate('/search');
          //reset();
        } catch (e) {
          console.log(e);//setError('Failed to log in');
        }
      };


    return (
        <>
            {/* <Flex
            flexDirection="column"
            width="40wh"
            height="100vh"
            backgroundColor="white"
            justifyContent="center"
            alignItems="center">
                {/* <img src={pharmaseeLogo} alt=""> </img> */}
            {/* </Flex> */}
            <Flex
            flexDirection="column"
            width="60wh"
            height="100vh"
            backgroundColor="white"
            justifyContent="center"
            alignItems="center"
            > 
            <Box>

            </Box>
            <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
            >

            <Heading color="#44ACCF">Login</Heading>
            <Box minW={{ base: "90%", md: "468px" }}>
                <form>
                <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                >
                    <FormControl>
                        <Input type="username" placeholder="Hospital username" />
                    </FormControl>
                    <FormControl>
                        <Input type={"password"} placeholder="Password"/>
                    <FormHelperText textAlign="right">
                        <p>forgot password?</p>
                    </FormHelperText>
                    </FormControl>
                    <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme='blue'
                    backgroundColor = "#44accf"
                    width="full"
                    onClick={handleClick}
                    >
                    Login
                    </Button>
                </Stack>
                </form>
            </Box>
            </Stack>
        </Flex>
      </>
    );
};
export default Login;