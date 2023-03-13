import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  IconButton,
  Input,
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
import { Link, useSearchParams } from "react-router-dom";

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

const householdNeeds = [
  "Housing",
  "Food",
  "Health Care",
  "Education",
  "Child Care",
  "Financial Security",
  "Special Support",
];

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

const documentsData = [
  {
    name: "Medical Certificate",
    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
];

export default function ReviewCandidate() {
  const [searchParams, setSearchParams] = useSearchParams();
  const Alert = () => {
    if (searchParams.get("done")) {
      return (
        <Flex
          alignItems="center"
          border="2px solid black"
          borderRadius="8px"
          padding="18px 36px"
        >
          <Flex
            flexShrink="0"
            borderRadius="100%"
            alignItems="center"
            justifyContent="center"
            w="64px"
            h="64px"
            backgroundColor="main.900"
            color="white"
            mr="54px"
          >
            K
          </Flex>
          <Text>
            Candidate is eligible for unconditional cash transfer program.
          </Text>
          <Button marginLeft="auto" as={Link} to="../info?done=true">
            Request to Assign the Candidate
          </Button>
        </Flex>
      );
    }
    if (searchParams.get("scheduling")) {
      return (
        <Flex
          alignItems="center"
          border="2px solid black"
          borderRadius="8px"
          padding="18px 36px"
        >
          <Flex
            flexShrink="0"
            borderRadius="100%"
            alignItems="center"
            justifyContent="center"
            w="64px"
            h="64px"
            backgroundColor="main.900"
            color="white"
            mr="54px"
          >
            K
          </Flex>
          <Text>
            Scheduling the payment required for candidate to enroll in the
            program.
          </Text>
          <Flex direction="column" marginLeft="auto" gap="10px">
            <Flex gap="10px">
              <Input placeholder="00/00/23" />
              <Button>O</Button>
            </Flex>
            <Button
              backgroundColor="black"
              color="white"
              as={Link}
              to="../active-program"
            >
              Enroll Into the Program
            </Button>
          </Flex>
        </Flex>
      );
    }
    return (
      <Flex
        alignItems="center"
        border="2px solid black"
        borderRadius="8px"
        padding="18px 36px"
      >
        <Flex
          flexShrink="0"
          borderRadius="100%"
          alignItems="center"
          justifyContent="center"
          w="64px"
          h="64px"
          backgroundColor="main.900"
          color="white"
          mr="54px"
        >
          K
        </Flex>
        <Text>
          Additional information required to <br /> continue the eligibility
          process.
        </Text>
        <Button marginLeft="auto" as={Link} to="../authorise-citizen">
          Ask For More Information
        </Button>
      </Flex>
    );
  };
  return (
    <Flex w="100%" direction="column" gap="20px">
      <Flex direction="column" gap="20px">
        <Flex justifyContent="space-between">
          <Flex alignItems="center" gap="12px">
            <Heading variant="h2" fontSize="24px">
              Candidate Info
            </Heading>
            <Tag>Action Required</Tag>
          </Flex>
          <ButtonGroup variant="ghost">
            <Button>SCREEN</Button>
            <Button>CONTACT</Button>
            <Button>FLAG</Button>
            <Button>REQUEST</Button>
          </ButtonGroup>
        </Flex>
        <Alert />
        <Box>
          <Heading variant="h3" fontSize="18px">
            Personal Information
          </Heading>
          <Heading variant="h3" fontSize="18px" color="main.500">
            Social ID: {personData.socialCode}
          </Heading>
        </Box>
        <Grid
          w="100%"
          gridTemplateRows="repeat(4, min-content)"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="23px"
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
            <Text fontWeight="600">E-mail</Text>
            <Text color="gray">{personData.email}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Phone Number</Text>
            <Text color="gray">{personData.phoneNumber}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Date of Birth</Text>
            <Text>{personData.dateOfBirth}</Text>
          </Box>
        </Grid>
        <Flex>
          <Flex w="100%" direction="column" gap="12px">
            <Heading variant="h3" fontSize="18px">
              Household needs
            </Heading>
            <Flex flexWrap="wrap" gap="4px">
              {householdData
                .flatMap((person) => person.needs)
                .map((need) => {
                  return (
                    <Tag p="6px 12px" mb="12px" variant="outline">
                      <TagLabel color="main.900">{need}</TagLabel>
                    </Tag>
                  );
                })}
            </Flex>
          </Flex>
          <Flex w="100%" direction="column" gap="12px">
            <Heading variant="h3" fontSize="18px">
              Recommended Benefit Package
            </Heading>
            <Text>
              Additional information required to decide eligibility and
              recommend benefit packages
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Household Information</Tab>
          <Tab>Documents & Certificates</Tab>
          <Tab>Additional Information</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding="0">
            <Flex direction="column" gap="20px">
              <Table variant="simple">
                <Thead backgroundColor="main.700" color="main.0">
                  <Tr>
                    <Th color="main.0">National ID</Th>
                    <Th color="main.0">Name</Th>
                    <Th color="main.0">Relation</Th>
                    <Th color="main.0">Date of Birth</Th>
                    <Th color="main.0">Individual Needs</Th>
                    <Th>
                      <IconButton
                        borderRadius="100%"
                        icon={<AddIcon />}
                        aria-label="asd"
                      />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {householdData.map((person) => {
                    return (
                      <Tr>
                        <Td>{person.personalCode}</Td>
                        <Td>{person.name}</Td>
                        <Td>{person.relation}</Td>
                        <Td>{person.dateOfBirth}</Td>
                        <Td>
                          <Flex wrap="wrap" gap="4px">
                            {person.needs.map((need) => (
                              <Tag p="6px 12px" variant="outline">
                                <TagLabel color="main.900">{need}</TagLabel>
                              </Tag>
                            ))}
                          </Flex>
                        </Td>
                        <Td>
                          <Button>...</Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Flex>
          </TabPanel>
          <TabPanel padding="0">
            <Table variant="simple">
              <Thead backgroundColor="main.700" color="main.0">
                <Tr>
                  <Th color="main.0">Document Name</Th>
                  <Th color="main.0">Organization</Th>
                  <Th color="main.0">Issued On</Th>
                  <Th color="main.0">Valid Until</Th>
                  <Th color="main.0">Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {documentsData.map((document) => {
                  return (
                    <Tr>
                      <Td>{document.name}</Td>
                      <Td>{document.organization}</Td>
                      <Td>{document.issuedOn}</Td>
                      <Td>{document.validUntil}</Td>
                      <Td>{document.status}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel padding="0">
            <p>active beneficiaries tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
        <Heading variant="h3" fontSize="18px">
          Active Programs
        </Heading>
        <Text>None</Text>
      </Box>
      <Box>
        <Heading variant="h3" fontSize="18px" mb="20px">
          Bank Account Information
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
              International Bank Account Number (IBAN)
            </Text>
            <Text>AA02300209000106531065</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
