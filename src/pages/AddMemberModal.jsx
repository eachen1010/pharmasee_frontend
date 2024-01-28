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
    Stack,
    Text,
    useToast,
    ModalHeader,
    ModalFooter,
    FormHelperText,
    FormErrorMessage,
    useDisclosure,
    Center
  } from '@chakra-ui/react';
  import React, { useRef, useState } from 'react';
//   import { useBackend } from '../../utils.js';

const AddMemberModal = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState('')
  const handleInputChange = (e) => setInput(e.target.value)

  // MRN, first name, last name, sex, drugs

  // const [mrn, setMRN] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [sex, setSex] = useState('');
  // const [drugs, setDrugs] = useState(null);

  return (
    <>
      <Button onClick={onOpen} colorScheme='blue'>Add Member</Button>
      
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
            <ModalHeader fontSize='4xl' fontWeight='bold' marginTop={3} marginBottom={-8}> Add Member</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                <Stack spacing={2}
                    backgroundColor="whiteAlpha.900"
                    rounded = "md"
                    padding = "20px"
                    alignItems = "center"
                    justifyContent = "center"
                    flexDirection='column'
                  >
                    
                    <FormControl isRequired>
                        <FormLabel>MRN</FormLabel>
                        <Input type='mrn' placeholder='1234567' onChange={handleInputChange} width='48vh' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type='first name' placeholder='Bob' onChange={handleInputChange} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input type='last name' placeholder='Miller' onChange={handleInputChange} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Sex</FormLabel>
                        <Select placeholder='Select Sex'>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>
                    </FormControl>

                    <FormControl >
                        <FormLabel marginBottom={-2}>Current Drugs Used</FormLabel>
                        <FormHelperText textAlign="left" color = "gray" marginBottom={2}>
                          <p> Enter all drugs currently used separated by commas</p>
                        </FormHelperText>
                        <Input type='drugs' placeholder='Morphine, Fentanyl, etc.' onChange={handleInputChange} />

                    </FormControl>

                    <Button borderRadius='lg'
                      type="submit"
                      variant="solid"
                      colorScheme='blue'
                      backgroundColor = "#44accf"
                      width="full"
                      marginTop={5} marginBottom={3}>Add New Member</Button>

                </Stack>
                
                </ModalBody>
          </ModalContent>
      </Modal>
      
    </>
  );
};

  export default AddMemberModal;