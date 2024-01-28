import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
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
    Th,
    Thead,
    Tr,
    Tbody,
    Td,
    Tag,
    TagLabel,
    HStack,
    chakra,
    Box,
    Radio,
    Text,
    RadioGroup,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
  } from "@chakra-ui/react";
  import { Search2Icon } from '@chakra-ui/icons'


const DrugSearch = () => {

    const DrugList = [
        'Ibritumomab tiuxetan',
        'Warfarin',
        'Daptomycin',
        'Lovastatin',
        'Tositumomab',
        'Succinylcholine',
        'Morphine',
        'Ethylmorphine',
        'Dihydromorphine',
        'Azithromycin',
        'Ranolazine',
        'Oxycodone',
        'Phenindione',
        'Niacin',
        'Gemfibrozil',
        'Bezafibrate',
        'Nicotinamide',
        'Raltegravir',
        'Ethyl biscoumacetate',
        'Acipimox',
        'Ciprofibrate',
        'Fluindione',
        'Amiodarone',
        'Venlafaxine',
        'Desvenlafaxine',
        'Tranilast',
        'Regorafenib',
        'Levomilnacipran',
        'Obinutuzumab',
        'Vorapaxar',
        'Ibrutinib',
        'Nintedanib',
        'Limaprost',
        'Ginkgo biloba',
        'Deoxycholic Acid',
        'Omacetaxine mepesuccinate',
        'Milnacipran',
        'Collagenase',
        'Ibuprofen'
      ];

    const [drugList, setDrugList] = useState([]);

    // const getDrugs = async () => {
    //     try {
    //         const res = await Backend.get(`/ddi`);
    //         setDrugs(res.data);
    //         console.log('Drugs after update:', drugs);
    //         return res.data;
    //       } catch (err) {
    //         console.log(err);
    //       }
    // };

    const DrugTableEntry = ( {drug} ) => {
        console.log()
        return (
            <Box maxW='81vw' borderWidth='1px' borderRadius='lg' overflow='hidden' borderLeft={0} borderRight={0} borderTop={0}>
                <Tr justifyContent="space-evenly">
                    <Td> <Radio value={drug} ></Radio> </Td>
                    <Td>{drug}</Td>
                </Tr>
            </Box>
        );
    };

    const [value, setValue] = useState('1');
    
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
            height="80vh"
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
                        <Input width='81vw' placeholder='Enter Drug Name' />
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
                                        <Stack direction='column' >
                                            {DrugList.map(drug => (<DrugTableEntry drug={drug} />))}
                                        </Stack>
                                    </RadioGroup>
                                </Box>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            </Flex>
        </Flex>
      </>
    );
};
export default DrugSearch;