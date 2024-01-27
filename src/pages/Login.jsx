//import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pharmaseeLogo from '../components/pharmaseeLogo.png';
import pharmaseeName from '../components/pharmasee.png';

import {
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Box,
    FormControl,
    FormHelperText,
    Image
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
            <Flex
            flexDirection="row"
            width="60wh"
            height="100vh"
            backgroundColor="white"
            justify-content = "space-around"
            //justifyContent="center"
            //alignItems="center"
            > 

            <Box bg="#44accf" minW={{base:"40%"}}>
            </Box>

            <Stack
            //pl = "8vw"
            justifyContent="center"
            alignItems="center"
            minW = {{base:"40%"}}
            flexDir="column"
            //m="2"
            >
            <Box>
            <Image src={pharmaseeLogo} alt='cute pill' width="125px" height="125px"/>
            </Box>

            <Box>
            <Image src={pharmaseeName} alt='website name' width = "30vw"/>
            </Box>

            <Box minW={{ base: "100%"}} >
                <form >
                <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="base"
                    rounded = "md"
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