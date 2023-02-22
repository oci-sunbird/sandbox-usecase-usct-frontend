import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CandidateList() {
  return (
    <Flex w="100%" direction="column" gap="60px">
      <Flex gap="20px" direction="column">
        <Heading>Assigned Candidate</Heading>
        <Flex justifyContent="space-between">
          <Flex gap="10px" flexShrink="0" alignItems="center">
            <Flex
              color="white"
              backgroundColor="main.900"
              flexShrink="0"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
              w="24px"
              h="24px"
            >
              22
            </Flex>
            <Text>ASSIGNED CANDIDATES</Text>
          </Flex>
          <InputGroup w="348px" borderRadius="8px" border="2px solid black">
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input placeholder="Search" />
          </InputGroup>
          <ButtonGroup>
            <Button>Export</Button>
            <Button>Filter</Button>
          </ButtonGroup>
        </Flex>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Eligibility (1)</Tab>
            <Tab>Enrollment (0)</Tab>
            <Tab>Active Beneficiaries (21)</Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0">
              <Flex direction="column" gap="20px">
                <Table variant="simple">
                  <Thead backgroundColor="main.700" color="main.0">
                    <Tr>
                      <Th color="main.0">Social ID</Th>
                      <Th color="main.0">Household Size</Th>
                      <Th color="main.0">Needs</Th>
                      <Th color="main.0">Latest Update</Th>
                      <Th color="main.0">Status</Th>
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
                      <Td>
                        <Button>...</Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Flex justifyContent="flex-end">
                  <Button
                    as={Link}
                    to="../review-candidate/2895379235"
                    backgroundColor="main.900"
                    color="main.0"
                  >
                    Review Next Candidate
                  </Button>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel padding="0">
              <p>enrollment tab</p>
            </TabPanel>
            <TabPanel padding="0">
              <p>active beneficiaries tab</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Flex gap="20px" direction="column">
        <Heading>Candidate List</Heading>
        <Flex justifyContent="space-between">
          <Flex gap="10px" flexShrink="0" alignItems="center">
            <Text>
              <strong>211</strong> ACTIVE CANDIDATES
            </Text>
          </Flex>
          <InputGroup w="348px" borderRadius="8px" border="2px solid black">
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input placeholder="Search" />
          </InputGroup>
          <ButtonGroup>
            <Button>Export</Button>
            <Button>Filter</Button>
          </ButtonGroup>
        </Flex>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Eligibility</Tab>
            <Tab>Enrollment</Tab>
            <Tab>Active Beneficiaries</Tab>
            <Tab>Not Eligible</Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0">
              <Flex direction="column" gap="20px">
                <Table variant="simple">
                  <Thead backgroundColor="main.700" color="main.0">
                    <Tr>
                      <Th color="main.0">Social ID</Th>
                      <Th color="main.0">Reviewer</Th>
                      <Th color="main.0">Household Size</Th>
                      <Th color="main.0">Latest Update</Th>
                      <Th color="main.0">Status</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>37793946215</Td>
                      <Td>(unassigned)</Td>
                      <Td>High Priority</Td>
                      <Td>Yesterday</Td>
                      <Td>Pending</Td>
                      <Td>
                        <Button>...</Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Flex justifyContent="space-between">
                  <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button rightIcon={<ArrowForwardIcon />}>Next</Button>
                  </ButtonGroup>
                  <Button backgroundColor="main.900" color="main.0">
                    Request to Assign New Candidate
                  </Button>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel padding="0">
              <p>enrollment tab</p>
            </TabPanel>
            <TabPanel padding="0">
              <p>active beneficiaries tab</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
