import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Select,
    VStack,
    Text,
    useToast,
    ModalHeader,
    ModalFooter,
    useDisclosure
  } from '@chakra-ui/react';
  import React, { useRef, useState } from 'react';
//   import { useBackend } from '../../utils.js';
  import redX from '../components/redx.png'

const NotSafeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme='blue'>Compare</Button>
      
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent alignItems='center' centerContent={true}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '23vh'
          }}>
            <Image src={redX} paddingTop='25px' paddingBottom={0} alt='red X' width="180px"/>
            <ModalHeader fontSize='4xl' fontWeight='bold' paddingTop={0} paddingBottom={0}>Warning</ModalHeader>
            <ModalHeader fontSize='2xl' fontWeight='bold' paddingTop={0}> Consult your doctor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text mb='1rem' paddingBottom='15px' textAlign='center'>
                The risk or severity of adverse effects can be increased when Fentanyl is combined with Adderall.
                </Text>
            </ModalBody>
          </ModalContent>
      </Modal>
      
    </>
  );
};

  export default NotSafeModal;