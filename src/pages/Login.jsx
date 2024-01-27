// import { useState } from 'react';
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
  } from "@chakra-ui/react";
  

const Login = () => {

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
            <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
            >

            <Heading color="teal.400">Login</Heading>
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
                    colorScheme="teal"
                    width="full"
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