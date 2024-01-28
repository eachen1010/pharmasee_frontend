import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Backend from '../utils/utils.js';
import SafeModal from '../pages/SafeUseModal';

// import Fuse from 'fuse.js';
import {
    Flex,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    TableContainer,
    Table,
    Th,
    Thead,
    Tr,
    Tbody,
    Td,
    Tag,
    TagLabel,
    Tfoot,
    HStack,
    Box,
    Radio,
    Text,
    RadioGroup
  } from "@chakra-ui/react";
  import { Search2Icon } from '@chakra-ui/icons'

/**
 * 
 * @returns page
 */
const DrugSearch = () => {

    const [drugList, setDrugList] = useState([]);
    const [value, setValue] = useState('1');

    const getDrugList = async () => {
        try {
            const res = await Backend.get(`/drugs`);
            console.log(res.data);
            setDrugList(res.data);
            return res.data;
          } catch (err) {
            console.log(err);
          }
    };

    const filterDrugs = async ( newInput ) => {
        try {
            if (newInput.length === 0) {
                const res = getDrugList();
                setDrugList(res.data);
                return res.data;
            } else {
                const res = await Backend.get(`/drugs/${newInput}`);
                setDrugList(res.data);
                return res.data;
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

    const filterDrugs = () => {
        console.log('hi')
    }

    const [value, setValue] = useState('1');
    const [safe, setSafe] = useState(true);
    
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
                <Text fontSize='5xl'>John Doe</Text>
                <Stack spacing={4} direction='row' justifyContent="space-evenly" marginBottom='5vh'>
                    <HStack spacing={4}>
                        {['md'].map((size) => (
                            <Tag size={size} key={size} variant='subtle' colorScheme='green'>
                                <TagLabel>DOB: 07/27/1975</TagLabel>
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
                <Stack spacing={2} direction="row" width='auto' justifyContent="space-evenly">
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='gray.300' />
                        </InputLeftElement>
                        <Input width='81vw' placeholder='Enter Drug Name' onChange={(e) => filterDrugs(e.target.value) } />
                    </InputGroup>
                </Stack>
                <div marginTop="1vw">
                    <TableContainer width='81vw' height='50vh' marginTop='5vh' overflowY='scroll'>
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
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {/* return result decides SafeModal vs NotSafeModal */}
                        <SafeModal safe={safe}/>
                    </div>
                </div>
            </Flex>
        </Flex>

      </>
    );
};

export default DrugSearch;