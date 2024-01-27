import { useState } from 'react';
// import Backend from '../../utils.js';
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
    Radio,
    RadioGroup,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
  } from "@chakra-ui/react";
  import { BsFunnel } from "react-icons/bs";
  import pharmaseeLogo from '../components/pharmaseeLogo.png';
  import { Search2Icon } from '@chakra-ui/icons'

const DrugSearch = () => {

    // const getPatients = async () => {
    //     try {
    //         const response = await Backend.get(`/route/route`);
    //         setEventsData(prevEventsData =>
    //           prevEventsData.map(event =>
    //             event.event_data_id === event_data_id
    //               ? { ...event, is_checked_in: !event.is_checked_in }
    //               : event,
    //           ),
    //         );
    //         return response;
    //       } catch (err) {
    //         console.log(err);
    //       }
    // };

    const PatientTableEntry = ( {patient} ) => {
        
        return (
            <Tr>
                <Td>{patient.first_name} {patient.last_name}</Td>
                <Td>{patient.mrn}</Td>
                <Td>{patient.hospitals}</Td>
            </Tr>
        );
    };

    const [value, setValue] = useState('1')
    
    return (
        <>
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
            height="80vh"
            alignItems="center"
            >
                <Stack spacing={2} direction="row" width='auto' justifyContent="space-evenly">
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='gray.300' />
                        </InputLeftElement>
                        <Input width='81vw' placeholder='Enter Drug Name' />
                    </InputGroup>
                    
                </Stack>
                <TableContainer width='81vw' marginTop='5vh'>
                    <Table variant='unstyled'>
                        <Thead style={{ backgroundColor: '#44ACCF' }}>
                        <Tr>
                            <Th style={{ color: 'white' }}>Drug Name</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='column'>
                                <Box maxW='81vw' borderWidth='1px' borderRadius='lg' overflow='hidden' borderLeft={0} borderRight={0} borderTop={0}>
                                    <Tr justifyContent="space-evenly">
                                        <Td> <Radio value='1'></Radio> </Td>
                                        <Td>Hydrocodone</Td>
                                    </Tr>
                                </Box>
                                <Box maxW='81vw' borderWidth='1px' borderRadius='lg' overflow='hidden' borderLeft={0} borderRight={0} borderTop={0}>
                                    <Tr>
                                        <Td> <Radio value='2'></Radio> </Td>
                                        <Td>Losartan</Td>
                                    </Tr>
                                </Box>
                                <Box maxW='81vw' borderWidth='1px' borderRadius='lg' overflow='hidden' borderLeft={0} borderRight={0} borderTop={0}>
                                    <Tr>
                                        <Td> <Radio value='3'></Radio> </Td>
                                        <Td>Adderall</Td>
                                    </Tr>
                                </Box>
                                <Box maxW='81vw' borderWidth='1px' borderRadius='lg' overflow='hidden' borderLeft={0} borderRight={0} borderTop={0}>
                                    <Tr>
                                        <Td> <Radio value='4'></Radio> </Td>
                                        <Td>Fentanyl</Td>
                                    </Tr>
                                </Box>
                        </Stack>
                        </RadioGroup>
                        </Tbody>
                    </Table>
                    </TableContainer>
            </Flex>
        </Flex>
      </>
    );
};
export default DrugSearch;