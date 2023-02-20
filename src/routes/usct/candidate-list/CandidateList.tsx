import {
    Button,
    Flex,
    Tab,
    Table,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";

export default function CandidateList() {
  return (
    <Flex w="100%" direction="column">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Eligibility (1)</Tab>
          <Tab>Enrollment (0)</Tab>
          <Tab>Active Beneficiaries (21)</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding="0">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Social ID</Th>
                  <Th>Household Size</Th>
                  <Th>Needs</Th>
                  <Th>Latest Update</Th>
                  <Th>Status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                    <Td>37793946215</Td>
                    <Td>5</Td>
                    <Td>High Priority</Td>
                    <Td>Yesterday</Td>
                    <Td>Action Required</Td>
                    <Td><Button>...</Button></Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel padding="0">
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
