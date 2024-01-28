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
  import greenCheck from '../components/greencheckmark.png'

const SafeModal = () => {
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
            <Image src={greenCheck} paddingTop='25px' alt='green checkmark' width="180px"/>
            <ModalHeader fontSize='4xl' fontWeight='bold'> Safe to Use</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text mb='1rem' paddingBottom='15px'>
                Check with your doctor prior to taking.
                </Text>
            </ModalBody>
          </ModalContent>
      </Modal>
      
    </>
  );
};

  export default SafeModal;