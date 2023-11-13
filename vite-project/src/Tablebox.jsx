import { Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react'


    import TransactionItem from './Transactionitem';

const  Tablebox = ({ transactions, handleDelete}) => {
    return (
<TableContainer>
			<Table variant="simple">
				<TableCaption>All my transactions</TableCaption>

				<Thead>
					<Tr>
						<Th>Date</Th>
						<Th>Description</Th>
						<Th>Category</Th>
						<Th isNumeric>Amount</Th>
						<Th>Actions</Th>
					</Tr>
				</Thead>

				<Tbody>
					{transactions.map((transaction) => (
						<TransactionItem
							key={transaction.id}
							{...transaction}
							handleDelete={handleDelete}
						/>
					))}
				</Tbody>
			</Table>
		</TableContainer>
    )
}


   export default Tablebox;
 