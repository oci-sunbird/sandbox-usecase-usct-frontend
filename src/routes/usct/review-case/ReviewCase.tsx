import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  Select,
  SimpleGrid,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import BankInformation from "../personal/BankInformation";

const personData = {
  fullName: "Thomas Anderson",
  dateOfBirth: "03.10.1994",
  phoneNumber: "(+372) 53937064",
  occupation: "Very Cool Guy",
  idCode: "39410036813",
  email: "veryCoolGuy@gmail.com",
  socialCode: "0235920935kdtt",
  fullAddress:
    "Very long name place, Saskatchewan, Alaskan Minnesota, Finnish Sauna 14, Earth, Milky Way, Known Universe",
};

const householdData = [
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
    needs: [],
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
    needs: ["Hearing Support", "Special Support"],
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
    needs: ["Child Care", "Financial Security"],
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
    needs: ["Food", "Health Care", "Education"],
  },
];

export default function ReviewCase() {
  return (
    <Flex direction="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        mb="20px"
      >
        <Heading fontSize="24px">Case #3779394</Heading>
        <ButtonGroup>
          <Button>Screen</Button>
          <Button>Contact</Button>
          <Button>Flag</Button>
          <Button>Request</Button>
        </ButtonGroup>
      </Flex>
      <SimpleGrid columns={2} spacing="20px" marginBottom="60px">
        <Flex direction="column">
          <Heading fontSize="16px">Status</Heading>
          <Text>Action Required</Text>
        </Flex>
        <Flex direction="column">
          <Heading fontSize="16px">Reason</Heading>
          <Text>Payment Not Received</Text>
        </Flex>
        <Flex direction="column">
          <Heading fontSize="16px">Social ID Code</Heading>
          <Text>123456789</Text>
        </Flex>
        <Flex direction="column">
          <Heading fontSize="16px">Date Issued</Heading>
          <Text>12.12.2022</Text>
        </Flex>
      </SimpleGrid>
      <Flex direction="column" gap="20px" mb="20px">
        <Heading fontSize="18px">Quick Actions</Heading>
        <Text>
          Quick actions steps are automatically created based on the "reason"
          the beneficiary selected. Please control beneficiaries message before
          using these actions.
        </Text>
        <Flex gap="20px">
          <Flex
            border="2px solid black"
            borderRadius="8px"
            alignItems="center"
            gap="20px"
            p="20px"
          >
            <Flex
              w="64px"
              h="64px"
              backgroundColor="black"
              color="white"
              alignItems="center"
              justifyContent="center"
              flexShrink="0"
              borderRadius="100%"
            >
              1
            </Flex>
            <Text>
              Automatic information to the payment provider regarding payment
              not received.
            </Text>
            <Button flexShrink="0" color="white" backgroundColor="black">
              Inform the Payment Provider
            </Button>
          </Flex>
          <Flex
            border="2px solid black"
            borderRadius="8px"
            alignItems="center"
            p="20px"
          >
            <Flex
              w="64px"
              h="64px"
              backgroundColor="black"
              color="white"
              alignItems="center"
              justifyContent="center"
              flexShrink="0"
              borderRadius="100%"
            >
              2
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        backgroundColor="lightgray"
        ml="-60px"
        mr="-60px"
        pl="60px"
        pr="60px"
        pt="30px"
        pb="30px"
        mb="30px"
      >
        <Tabs w="100%" isFitted variant="enclosed">
          <TabList>
            <Tab>Conversation</Tab>
            <Tab>Beneficiary Info</Tab>
            <Tab>Direct the Case</Tab>
          </TabList>
          <TabPanels>
            <TabPanel pl="0" pr="0" pt="20px">
              <Flex direction="column" gap="20px" mb="20px">
                <Flex gap="16px">
                  <Avatar h="48px" w="48px" />
                  <Flex
                    border="2px solid black"
                    borderRadius="8px"
                    minH="112px"
                    w="40%"
                    direction="column"
                  >
                    <Flex p="24px" h="100%">
                      Lorem Ipsum Lorem Ipsum
                    </Flex>
                    <Flex p="8px 14px" justifyContent="flex-end">
                      Thomas Anderson
                    </Flex>
                  </Flex>
                  <Flex alignSelf="center" direction="column">
                    <Text>12.12.2022</Text>
                    <Text>10:20 PM</Text>
                  </Flex>
                </Flex>
                <Flex gap="16px">
                  <Avatar h="48px" w="48px" />
                  <Flex
                    border="2px solid black"
                    borderRadius="8px"
                    minH="112px"
                    w="40%"
                    direction="column"
                  >
                    <Flex p="24px" h="100%">
                      Lorem Ipsum Lorem Ipsum
                    </Flex>
                    <Flex p="8px 14px" justifyContent="flex-end">
                      Thomas Anderson
                    </Flex>
                  </Flex>
                  <Flex alignSelf="center" direction="column">
                    <Text>12.12.2022</Text>
                    <Text>10:20 PM</Text>
                  </Flex>
                </Flex>
                <Flex gap="16px" flexDirection="row-reverse">
                  <Avatar h="48px" w="48px" />
                  <Flex
                    border="2px solid black"
                    borderRadius="8px"
                    minH="112px"
                    w="40%"
                    direction="column"
                  >
                    <Flex p="24px" h="100%">
                      Lorem Ipsum Lorem Ipsum
                    </Flex>
                    <Flex p="8px 14px" justifyContent="flex-end">
                      Thomas Anderson
                    </Flex>
                  </Flex>
                  <Flex alignSelf="center" direction="column">
                    <Text>12.12.2022</Text>
                    <Text>10:20 PM</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Box
                border="2px solid black"
                borderRadius="8px"
                w="100%"
                h="150px"
                backgroundColor="white"
              ></Box>
            </TabPanel>
            <TabPanel padding="0" pt="20px">
              <Flex direction="column" gap="20px">
                <Grid
                  w="100%"
                  gridTemplateRows="repeat(4, min-content)"
                  gridTemplateColumns="repeat(2, 1fr)"
                  gap="20px"
                >
                  <Box>
                    <Text fontWeight="600">Name</Text>
                    <Text>{personData.fullName}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="600">Occupation</Text>
                    <Text>{personData.occupation}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="600">Personal ID Code</Text>
                    <Text>{personData.idCode}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="600">Home Address</Text>
                    <Text>{personData.fullAddress}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="600">Phone Number</Text>
                    <Text>{personData.phoneNumber}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="600">E-mail</Text>
                    <Text>{personData.email}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="600">Date of Birth</Text>
                    <Text>{personData.dateOfBirth}</Text>
                  </Box>
                </Grid>
                <Flex gap="20px">
                  <Flex w="100%" direction="column" gap="12px">
                    <Heading variant="h3" fontSize="18px">
                      Household needs
                    </Heading>
                    <Flex flexWrap="wrap" gap="4px">
                      {householdData
                        .flatMap((person) => person.needs)
                        .map((need) => {
                          return (
                            <Tag
                              key={need}
                              p="6px 12px"
                              mb="12px"
                              variant="outline"
                            >
                              <TagLabel color="main.900">{need}</TagLabel>
                            </Tag>
                          );
                        })}
                    </Flex>
                  </Flex>
                  <Flex w="100%" direction="column" gap="12px">
                    <Heading variant="h3" fontSize="18px">
                      Assigned Benefit Package
                    </Heading>
                    <Text>
                      Additional information required to decide eligibility and
                      recommend benefit packages
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel padding="0" pt="20px">
              <Flex gap="20px" direction="column">
                <Text>Please explain the reason of directing the case:</Text>
                <Flex gap="20px">
                  <Box
                    w="60%"
                    h="112px"
                    backgroundColor="white"
                    border="2px solid black"
                    borderRadius="8px"
                  ></Box>
                  <Flex direction="column" flexGrow="1" gap="20px">
                    <Select w="100%">
                      <option>Option</option>
                      <option>Option</option>
                      <option>Option</option>
                      <option>Option</option>
                      <option>Option</option>
                    </Select>
                    <Button w="min-content" alignSelf="flex-end">
                      Direct the Case
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Flex direction="column" gap="8px">
        <Heading fontSize="16px">Case Attachments</Heading>
        <Table mb="20px">
          <Thead>
            <Tr>
              <Th>File name</Th>
              <Th>File type</Th>
              <Th>Description</Th>
              <Th>Uploaded</Th>
              <Th>Source</Th>
              <Th>icon</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>None</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
      <BankInformation />
    </Flex>
  );
}
