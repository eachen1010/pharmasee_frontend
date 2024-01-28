import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Backend from '../utils/utils.js';
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
    Text,
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
import { BsFunnel } from "react-icons/bs";
import pharmaseeLogo from '../components/pharmaseeLogo.png';
import { Search2Icon } from '@chakra-ui/icons';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const isStateValid = (state) => {
    if (!state) return false;
    if (typeof state !== "object") return false;
    if (typeof state.patientMrn !== "number") return false;
    return true;
};


const Patient = () => {
    const [patient, setPatient] = useState([]);

    const { state } = useLocation();
    let patientMrn;
    if (isStateValid(state)) {
        ({ patientMrn } = state);
    } else {
        patientMrn = -1;
    }
    const getPatient = async () => {
        try {
            const res = await Backend.get(`/patients/${patientMrn}`);
            setPatient(res.data);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };
    
    
    
    const PatientDrugEntry = ( {drug} ) => {
        return (
            <Tr justifyContent="space-evenly">
                <Td>{drug.name}</Td>
                <Td>{drug.dosage}</Td>
                <Td></Td>
            </Tr>
        );
    };
    
    useEffect(() => {
        getPatient();
    }, []);

    // const drugs = patient.drugs;

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
            >
            <Flex 
            flexDirection="column"
            width="90vw"
            height="95vh"
            alignItems="center"
            >
                <Text fontSize='5xl'>{patient.firstName} {patient.lastName}</Text>
                <Stack spacing={4} direction='row' justifyContent="space-evenly" marginBottom='5vh'>
                    <HStack spacing={4}>
                        {['md'].map((size) => (
                            <Tag size={size} key={size} variant='subtle' colorScheme='green'>
                                <TagLabel>DOB: {patient.dob}</TagLabel>
                            </Tag>
                        ))}
                    </HStack>
                    <HStack spacing={4}>
                        {['md'].map((size) => (
                            <Tag size={size} key={size} variant='subtle' colorScheme='purple'>
                                <TagLabel>Kaiser Permanente</TagLabel>
                            </Tag>
                        ))}
                    </HStack>
                </Stack>
                <div marginTop="1vw">
                    <TableContainer width='81vw' height='50vh' marginTop='5vh' overflowY='scroll'>
                        <Table variant='unstyled'>
                            <Thead style={{ backgroundColor: '#44ACCF', top: '0px', position: 'sticky', zIndex: 999 }}>
                            <Tr>
                                <Th style={{ color: 'white' }}>Drug Name</Th>
                                <Th style={{ color: 'white' }}>Dosage</Th>
                                <Th></Th>
                            </Tr>
                            </Thead>  
                            <Tbody >
                                {/* {console.log} */}
                                {/* <PatientDrugEntry drug={patient.drugs[0]}/>  */}
                                {/* { (patient.drugs).map((d) => (<PatientDrugEntry drug={d} />))} */}
                                { patient.drugs ? patient.drugs.map(drug => (<PatientDrugEntry drug={drug}/>)) : null }
                            </Tbody> 
                        </Table>
                    </TableContainer>
                </div>
            </Flex>
        </Flex>
      </>
    );
};

export default Patient;