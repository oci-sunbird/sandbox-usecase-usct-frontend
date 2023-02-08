import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr
} from "@chakra-ui/react";

export default function PersonalInformationTable({
  columns,
  data,
  title,
}: {
  columns: string[];
  data: Record<string, any>[];
  title: string | React.ReactNode;
}) {
  return (
    <Box>
      <Heading variant="h3" fontSize="18px">
        {title}
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Td>{column}</Td>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((data) => {
              return (
                <Tr>
                  {Object.keys(data).map((key) => {
                    return <Td>{data[key]}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
