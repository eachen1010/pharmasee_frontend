import {
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    ModalHeader,
    useDisclosure
  } from '@chakra-ui/react';
  import React, { useRef, useState, useEffect } from 'react';
//   import { useBackend } from '../../utils.js';
  import greenCheck from '../components/greencheckmark.png'
  import redX from '../components/redx.png'

const SafeModal = ({safe, drug1, drug2, setPopUp}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Call onOpen after the initial render
    onOpen();
  }, []);


  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent alignItems='center'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '23vh'
          }}>
            {safe ? (<Image src={greenCheck} paddingTop='25px' alt='green checkmark' width="180px"/>) : <Image src={redX} paddingTop='22px' paddingBottom={0} alt='red X' width="180px"/>}
            {safe ? (<ModalHeader fontSize='4xl' fontWeight='bold'> No Issue Detected</ModalHeader>) : <ModalHeader justifyContent='center' fontSize='4xl' fontWeight='bold' paddingTop={0} paddingBottom={0}>Warning</ModalHeader>}
            {safe ? null : (<ModalHeader fontSize='2xl' fontWeight='bold' paddingTop={0}> Consult your doctor</ModalHeader>)}
            <ModalCloseButton onClick={() => setPopUp(false)}/> 
    
            <ModalBody>
              {safe ? (<Text mb='1rem' paddingBottom='15px'>Consult with your doctor prior to taking. </Text>) : (<Text mb='1rem' paddingBottom='15px' textAlign='center'>{`The risk or severity of adverse effects can be increased when ${drug1} is combined with ${drug2}.`}</Text>)}
            </ModalBody>
          </ModalContent>
      </Modal>
      
    </>
  );
};

  export default SafeModal;