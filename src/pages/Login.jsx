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
    Text,
    Link
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

    const handleClickLogin = async data => {
        //const { username, password } = data;
        try {
          navigate('/search');
          //reset();
        } catch (e) {
          console.log(e);//setError('Failed to log in');
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
            //justifyContent="center"
            //alignItems="center"
            > 

            <Box bg="#44accf" minW={{base:"40%"}}>
              <Heading mt = "50%" ml = "7%" color="white">Keep your family safe by staying informed on your loved ones' medications!</Heading>
            </Box>

            <Stack
            justifyContent="center"
            alignItems="center"
            minW = {{base:"60%"}}
            flexDir="column"
            //m="2"
            >
            <Box>
            <Image src={pharmaseeLogo} alt='cute pill' width="125px" height="125px"/>
            </Box>

            <Box>
            <Image src={pharmaseeName} alt='website name' width = "30vw"/>
            </Box>

            <Box minW={{ base: "50%"}}>
                <form >
                <Stack
                   // maxW = {{base:"60%"}}
                    //maxW = "10vw"
                    spacing={2}
                    backgroundColor="whiteAlpha.900"
                    boxShadow="base"
                    rounded = "md"
                    padding = "20px"
                    alignItems = "center"
                    justifyContent = "center"
                >
                    <FormControl justifyContent = "center">
                        <Input type="username" placeholder="Family Username" />
                    </FormControl>
                    <FormControl>
                        <Input type={"password"} placeholder="Password"/>
                    <FormHelperText textAlign="right" color = "gray">
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
                    onClick={handleClickLogin}
                    >
                      Login
                    </Button>

                    {/* <Text>
                      Not registered yet? {' '}
                      <Link color='teal.500' href='/signup'>
                        Sign Up Family
                      </Link>
                    </Text> */}
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
                   {/*} <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme='blue'
                    backgroundColor = "#44accf"
                    width="full"
                    onClick={handleClickSignUp}
                    >
                        Sign Up Family
                    </Button> */}

                </Stack>
                </form>
            </Box>
            </Stack>
        </Flex>
      </>
    );
};
export default Login;