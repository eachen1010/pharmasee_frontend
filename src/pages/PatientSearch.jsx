import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Backend from '../utils/utils.js';
// import Fuse from 'fuse.js';
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    TableContainer,
    Table,
    TableCaption,
    Th,
    Thead,
    Tr,
    Tbody,
    Td,
    Tfoot,
    Tag,
    TagLabel,
    HStack,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
  } from "@chakra-ui/react";
import { BsFunnel, BsPlusCircle } from "react-icons/bs";
import { Search2Icon } from '@chakra-ui/icons';
import { useNavigate, useNavigation } from 'react-router-dom';
import AddMemberModal from './AddMemberModal.jsx';

const PatientSearch = () => {

    const [patients, setPatients] = useState([]);

    const getPatients = async () => {
        try {
            const res = await Backend.get(`/family/banhmi`);
            setPatients(res.data);
            console.log('Patients after update:', patients);
            return res.data;
          } catch (err) {
            console.log(err);
          }
    };

    const PatientTableEntry = ( {patient} ) => {
        const navigate = useNavigate();
        console.log(patient.firstName, patient.lastName)
        return (
            <Tr >{/*justifyContent="space-evenly">*/}
                <Td>{patient.firstName} {patient.lastName}</Td>
                <Td>{patient.dob}</Td>
                <Td textAlign="right">

                <Box
                    as='button'
                    height='5vh'
                    width='5vw'
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    border='1px'
                    px='8px'
                    borderRadius='10px'
                    fontSize='16px'
                    fontWeight='semibold'
                    bg='#8ecfe6'
                    borderColor='#44accf'
                    color='white'
                    _hover={{ bg: '#44accf' }}
                    _active={{
                        bg: '#44accf',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                    }}
                    onClick={() => {
                        navigate('/patient', {state: {"patientMrn": patient.mrn}});   
                    }}
                    >
                    View
                    </Box>
                </Td>
            </Tr>
        );
    };

    useEffect(() => {
        getPatients();
    }, []);
    
    return (
        <>
            <Navbar />
            <Flex
            flexDirection="column"
            width="100vw"
            height="100vh"
            backgroundColor="F3F3F3"
            justifyContent="center"
            alignItems="center"
            marginTop='-5vh'
            >
            <Flex 
            flexDirection="column"
            width="90vw"
            height="80vh"
            alignItems="center"
            >
                <Stack spacing={2} direction="row" width='auto' justifyContent="space-evenly">
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='gray.300' />
                        </InputLeftElement>
                        <Input width='75vw' placeholder='Enter Member Name' />
                    </InputGroup>
                    <InputGroup alignItems="right">
                        <Button backgroundColor="#44ACCF"><Search2Icon style={{ color: 'white' }} /></Button>
                    </InputGroup>
                </Stack>
                <TableContainer width='81vw' marginTop='5vh' overflowY='scroll'>
                    <Table variant='simple' >
                    <Thead style={{ backgroundColor: '#44ACCF' , top: '0px', position: 'sticky', zIndex: 999}}>
                    <Tr>
                        <Th style={{ color: 'white'}}>Member Name</Th>
                        <Th style={{ color: 'white'}}>DOB</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody >
                        {patients && patients.map(patient => (<PatientTableEntry patient={patient} />))}
                    </Tbody>
                    </Table>
                    
                </TableContainer>
                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop:'5vh'
                      }}>
                        <AddMemberModal />
                    </div>
            </Flex>
        </Flex>
      </>
    );
};
export default PatientSearch;