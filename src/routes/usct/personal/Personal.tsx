import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  Link,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Personal() {
  return (
    <Flex w="100%" gap="48px" direction="column">
      <Flex justifyContent="space-between" marginBottom="48px">
        <Heading fontSize="36px">My Information</Heading>
        <ButtonGroup>
          <Button variant="outline">Back</Button>
          <Button>Submit for eligibility review</Button>
        </ButtonGroup>
      </Flex>
      <Flex gap="24px" direction="column">
        <Heading fontSize="18px">Personal Information</Heading>
        <Flex gap="40px">
          <Avatar borderRadius="0" width="25%" height="auto" />
          <Grid
            w="100%"
            gridTemplateRows="repeat(4, 1fr)"
            gridTemplateColumns="repeat(2, 1fr)"
          >
            <Box>
              <Text fontWeight="600">Name</Text>
              <Text>Thomas Anderson</Text>
            </Box>
            <Box>
              <Text fontWeight="600">Date of Birth</Text>
              <Text>12.12.1975</Text>
            </Box>
            <Box>
              <Text fontWeight="600">Personal ID Code</Text>
              <Text>12345678910</Text>
            </Box>
            <Box>
              <Text fontWeight="600">Social ID Code</Text>
              <Text>123456789</Text>
            </Box>
            <Box>
              <Text fontWeight="600">Home Address</Text>
              <Text>Soo Street 12345 Lorem 098098</Text>
            </Box>
            <Box>
              <Text fontWeight="600">Occupation</Text>
              <Text>Unemployed</Text>
            </Box>
            <Box>
              <Text fontWeight="600">E-mail</Text>
              <Text color="gray">tom@myspace.com</Text>
            </Box>
            <Box>
              <Text fontWeight="600">Phone Number</Text>
              <Text color="gray">(+00) 94 843 432</Text>
            </Box>
          </Grid>
        </Flex>
        <Text>
          If the shown information is not up to date, please update the
          information via the <Link href="#">citizen portal</Link>
        </Text>
      </Flex>
      <Box>
        <Heading variant="h3" fontSize="18px">
          Household Information
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Td>Name</Td>
                <Td>National ID</Td>
                <Td>Relation</Td>
                <Td>Date of Birth</Td>
                <Td>Needs</Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Ms Lorem Ipsum</Td>
                <Td>12345678910</Td>
                <Td>Wife</Td>
                <Td>12.12.1975</Td>
                <Td>Data</Td>
              </Tr>
              <Tr>
                <Td>Liram Ipsum</Td>
                <Td>12345678910</Td>
                <Td>Father</Td>
                <Td>12.12.1955</Td>
                <Td>Data</Td>
              </Tr>
              <Tr>
                <Td>Lorem Ipsum Jr 2</Td>
                <Td>12345678910</Td>
                <Td>Wife</Td>
                <Td>12.12.2008</Td>
                <Td>Data</Td>
              </Tr>
              <Tr>
                <Td>Lorem Ipsum Jr 3</Td>
                <Td>12345678910</Td>
                <Td>Wife</Td>
                <Td>12.12.2014</Td>
                <Td>Data</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Heading variant="h3" fontSize="18px">
          Documents
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Td>Document Name</Td>
                <Td>Organization</Td>
                <Td>Issued On</Td>
                <Td>Valid Until</Td>
                <Td>Status</Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Medical Certificate</Td>
                <Td>12345678910</Td>
                <Td>12.12.1965</Td>
                <Td>12.12.2025</Td>
                <Td>
                  <Flex gap="8px">
                    <Tag colorScheme="green" size="sm" borderRadius="full" />
                    <Text>Approved</Text>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Medical Certificate</Td>
                <Td>12345678910</Td>
                <Td>12.12.1965</Td>
                <Td>12.12.2025</Td>
                <Td>
                  <Flex gap="8px">
                    <Tag colorScheme="green" size="sm" borderRadius="full" />
                    <Text>Approved</Text>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Medical Certificate</Td>
                <Td>12345678910</Td>
                <Td>12.12.1965</Td>
                <Td>12.12.2025</Td>
                <Td>
                  <Flex gap="8px">
                    <Tag colorScheme="yellow" size="sm" borderRadius="full" />
                    <Text>Uploaded</Text>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Medical Certificate</Td>
                <Td>12345678910</Td>
                <Td>12.12.1965</Td>
                <Td>12.12.2025</Td>
                <Td>
                  <Flex gap="8px">
                    <Tag colorScheme="green" size="sm" borderRadius="full" />
                    <Text>Uploaded</Text>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Medical Certificate</Td>
                <Td>12345678910</Td>
                <Td>12.12.1965</Td>
                <Td>12.12.2025</Td>
                <Td>
                  <Flex gap="8px">
                    <Tag colorScheme="green" size="sm" borderRadius="full" />
                    <Text>Uploaded</Text>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Heading variant="h3" fontSize="18px">
          Active Programs
        </Heading>
        <Text>None</Text>
      </Box>
      <Box>
        <Heading variant="h3" fontSize="18px'">
          Bank Account Information (Optional)
        </Heading>
        <Flex justifyContent="space-between">
          <Box>
            <Text fontWeight="600">Bank Account Owner Name</Text>
            <Text>Thomas Anderson</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Bank Name</Text>
            <Text>Sunshine Bank</Text>
          </Box>
          <Box>
            <Text fontWeight="600">
              Inetrnational Bank Account Number (IBAN)
            </Text>
            <Text>AA02300209000106531065</Text>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="flex-end">
        <ButtonGroup gap="12px">
          <Button variant="outline">Back</Button>
          <Button>Submit for eligibility review</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
