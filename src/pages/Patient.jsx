import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Backend from '../utils/utils.js';
import SafeModal from '../pages/SafeUseModal';
import bottle from '../components/bottleTransparent.png'
import { Search2Icon } from '@chakra-ui/icons'
import { useLocation } from 'react-router-dom';
import Fuse from 'fuse.js';

import {
    Flex,
    Stack,
    TableContainer,
    Table,
    Text,
    Th,
    Thead,
    Tr,
    Tbody,
    Button,
    Td,
    Tag,
    TagLabel,
    HStack,
    Box,
    Radio,
    RadioGroup,
    InputGroup,
    InputLeftElement,
    Input,
    useDisclosure,
    Modal,
    ModalCloseButton,
    Image,
    ModalOverlay,
    ModalContent,
  } from "@chakra-ui/react";

const Patient = () => {
    const [drugList, setDrugList] = useState([]);
    const [value, setValue] = useState('1');
    const [patient, setPatient] = useState([]);
    const [safe, setSafe] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [drug2, setDrug2] = useState('defaultDrug');
    const [input, setInput] = useState('');
    const [loadDrugJSON, setLoadDrugJSON] = useState([]);

    const isStateValid = (state) => {
        if (!state) return false;
        if (typeof state !== "object") return false;
        if (typeof state.patientMrn !== "number") return false;
        return true;
    };
    
    const HelpModal = () => {
        const { isOpen, onOpen, onClose } = useDisclosure();
      
        return (
          <>
            <Button onClick = {onOpen} fontSize='6vh' width='8vh' height='8vh' borderRadius='200px'  fontColor='white' background='#a6a6a6' colorScheme='blue'>?</Button>
    
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent centerContent={true}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: '23vh'
                }}>
                  <Text marginLeft='2vw' fontSize='2xl' fontWeight='bold' textAlign='center'>Check active ingredients here!</Text>
                  <Image src={bottle} paddingTop='25px' marginRight='2vw' paddingBottom={0} alt='red X' width="180px"/>
                  <ModalCloseButton />
                </ModalContent>
            </Modal>
          </>
        );
      };    
    
    const getDrugList = async () => {
        try {
            const res = await Backend.get(`/drugs`);
            setDrugList(res.data);
            setLoadDrugJSON(res.data);
            
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const filterDrugs = ( searchResults ) => {
        try {
            if (searchResults.length === 0) {
                const res = getDrugList();
                setDrugList(res.data);
                return res.data;
            } else {
                setDrugList(searchResults);
                return searchResults;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getDrugList();
    }, []);

    const DrugTableEntry = ( {drug} ) => {
        return (
            <Box maxW='81vw' borderWidth='1px' borderRadius='lg' overflow='hidden' borderLeft={0} borderRight={0} borderTop={0}>
                <Tr justifyContent="space-evenly">
                    <Td> <Radio value={drug.drugName} ></Radio> </Td>
                    <Td>{drug.drugName}</Td>
                </Tr>
            </Box>
        );
    };

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

    useEffect(() => {
        const options = {
            keys: ['drugName'],
            threshold: 0.3
          };
        const fuse = new Fuse(loadDrugJSON, options);
        const results = fuse.search(input).map(result => result.item);
        filterDrugs(results);
    }, [input]);
    
    useEffect(() => {
        getPatient();
    }, []);

    const compareDrugs = async (drug1) => {
        try {
            const meds = patient.drugs;

            if(meds)
            {
                for(let i = 0; i<meds.length;++i)
                {
                    setDrug2(meds[i].name);
                    const res = await Backend.get(`/ddi/${drug1}/${meds[i].name}`); 
                    if(res.data.length !== 0)
                    {
                        setSafe(false);
                        setDrug2(meds[i].name);
                        setPopUp(true);
                        return;
                    }
                }
            }
            setSafe(true);
            setPopUp(true);
        }
        catch (err){
            console.log(err.message);
        }
    }

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
                <Text textShadow='2px 1px 2px gray' fontSize='5xl'>{patient.firstName} {patient.lastName}</Text>
                <Stack spacing={4} direction='row' justifyContent="space-evenly" marginBottom='5vh'>
                    <HStack spacing={4}>
                        {['md'].map((size) => (
                            <Tag size={size} key={size} variant='subtle' colorScheme='green'>
                                <TagLabel><strong>DOB: </strong> {patient.dob}</TagLabel>
                            </Tag>
                        ))}
                    </HStack>
                    <HStack spacing={4}>
                        {['md'].map((size) => (
                            <Tag size={size} key={size} variant='subtle' colorScheme='purple'>
                                <TagLabel><strong>MRN: </strong>{patient.mrn}</TagLabel>
                            </Tag>
                        ))}
                    </HStack>
                    <HStack spacing={4}>
                        {['md'].map((size) => (
                            <Tag size={size} key={size} variant='subtle' colorScheme='orange'>
                                <TagLabel>{patient.sex}</TagLabel>
                            </Tag>
                        ))}
                    </HStack>
                </Stack>
                <Stack spacing={2} direction="row" width='auto' justifyContent="space-evenly">
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='gray.300' />
                        </InputLeftElement>
                        <Input width='81vw' placeholder='Enter Drug Name' onChange={(e) => setInput(e.target.value) } />
                    </InputGroup>
                </Stack>
                <div margin-top="1vw">
                    <TableContainer width='81vw' maxHeight='50vh' marginTop='5vh' overflowY='scroll'>
                        <Table variant='unstyled'>
                            <Thead style={{ backgroundColor: '#44ACCF', top: '0px', position: 'sticky', zIndex: 999 }}>
                            <Tr>
                                <Th style={{ color: 'white' }}>Drug Name</Th>
                            </Tr>
                            </Thead>   
                            <Tbody>
                                <Box>
                                    <RadioGroup onChange={setValue} value={value} >
                                        <Stack direction='column'>
                                            {drugList ? (drugList.map(drug => (<DrugTableEntry drug={drug} />) )): null}
                                        </Stack>
                                        
                                    </RadioGroup>
                                </Box>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <div 
                    style={{
                        marginTop: '5vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Button onClick = {() => compareDrugs(value)} backgroundColor='#44accf' colorScheme='blue'>Compare</Button>
                        {popUp ? (<SafeModal safe={safe} drug1={value} drug2={drug2} setPopUp={setPopUp}/>) : null}
                    </div>
                </div>
                <div style={{
                        position:'fixed',
                        bottom: '15px',
                        right: '20px',
                        zIndex: '999'
                      }}>
                        {<HelpModal/>}
                </div>
            </Flex>
        </Flex>
      </>
    );
};

export default Patient;