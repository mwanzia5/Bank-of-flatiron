import { Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react'




function  Tablebox({}) {
    return (


    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Bank of Flatiron</TableCaption>
    <Thead>
      <Tr>
        <Th>date</Th>
        <Th>description</Th>
        <Th> Category</Th>
        <Th isNumeric> amount</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td ></Td>
        <Td></Td>
      </Tr>
     </Tbody>
  </Table>
</TableContainer>
         );
    }
export default Tablebox;
 