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
  import React, { useRef, useState, useEffect } from 'react';
  import { useLocation } from 'react-router-dom';
import Backend from '../utils/utils.js';

const AddMemberModal = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [familyname, setFamilyname] = useState('');

  const [input, setInput] = useState('')
  const handleSubmit = async (event) => {
    try {
      const user = {
        mrn,
        firstName,
        lastName,
        sex,
        dob,
        drugs
      };

      onClose();
    
      const response = await Backend.post(`/family/${familyname}/create`, user);
      window.location.reload();
    } catch (e) {
        console.log(e);
    }
  };

  const [mrn, setMRN] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState(null);
  const [drugs, setDrugs] = useState([]);
  const [dob, setDOB] = useState('');

  const handleMRNChange = event => {
    setMRN(parseInt(event.target.value));
  };

  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };

  const handleSexChange = event => {
    setSex(event.target.value);
  };

  const handleDOBChange = event => {
    setDOB(event.target.value)
  };

  const handleDrugChange = event => {
    let drugResponse = (event.target.value.split(',').map(drug => ({ name: drug.trim(), dosage: '40mg' })))
    setDrugs(drugResponse);
  };

  useEffect(() => {
    const loc = location.pathname.split('/');
    setFamilyname(loc[loc.length-1]);
}, [location.pathname]);

  return (
    <>
      <Button onClick={onOpen} backgroundColor='#44accf' color='white'
      _hover={{ bg: '#8ecfe6' }}
      _active={{
          bg: '#44accf',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9'
      }}>
        Add Member</Button>
      
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
                <form onSubmit={handleSubmit}>
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
                          <Input type='mrn' placeholder='1234567' onChange={handleMRNChange} width='48vh' />
                      </FormControl>

                      <FormControl isRequired>
                          <FormLabel>First Name</FormLabel>
                          <Input type='first name' placeholder='Bob' onChange={handleFirstNameChange} />
                      </FormControl>

                      <FormControl isRequired>
                          <FormLabel>Last Name</FormLabel>
                          <Input type='last name' placeholder='Miller' onChange={handleLastNameChange} />
                      </FormControl>

                      <FormControl isRequired>
                          <FormLabel>Sex</FormLabel>
                          <Select placeholder='Select Sex' onChange={handleSexChange}>
                              <option>Male</option>
                              <option>Female</option>
                          </Select>
                      </FormControl>
                      
                      <FormControl >
                          <FormLabel marginBottom={-2}>Date of Birth</FormLabel>
                          <FormHelperText textAlign="left" color = "gray" marginBottom={2}>
                            <p> Enter DOB in MM/DD/YYYY format</p>
                          </FormHelperText>
                          <Input type='drugs' placeholder='07/27/2004' onChange={handleDOBChange} />
                      </FormControl>

                      <FormControl >
                          <FormLabel marginBottom={-2}>Current Drugs Used</FormLabel>
                          <FormHelperText textAlign="left" color = "gray" marginBottom={2}>
                            <p> Enter all drugs currently used separated by commas</p>
                          </FormHelperText>
                          <Input type='drugs' placeholder='Morphine, Fentanyl, etc.' onChange={handleDrugChange} />
                      </FormControl>

                      <Button borderRadius='lg'
                        type="submit"
                        variant="solid"
                        colorScheme='blue'
                        backgroundColor = "#44accf"
                        width="full"
                        marginTop={5} marginBottom={3}>Add New Member</Button>
                  </Stack>
                </form>
                </ModalBody>
          </ModalContent>
      </Modal>
      
    </>
  );
};

  export default AddMemberModal;