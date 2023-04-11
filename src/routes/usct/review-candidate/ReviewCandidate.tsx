import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  IconButton,
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
  Tr
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TCitizen } from "../../../mirage/types";
import { EUserType, SimulationContext } from "../USCT";
import { ActionAlert } from "./ActionAlert";
import { documentsData, householdData } from "./data";

const getSubtitle = (state: string | null) => {
  if(state === "done") {
    return {
      description: {
        title: "PHASE 1 - ELIGIBILITY",
        subtitle: "CIVIL SERVANT REQUESTS TO ASSIGN THE CANDIDATE",
      },
      progress: 40,
    }
  }
  if(state === "scheduling") {
    return {
      description: {
        title: "PHASE 2 - ENROLMENT",
        subtitle: "CIVIL SERVANT SCHEDULES THE PAYMENTS",
      },
      progress: 60,
    }
  }
  return {
    description: {
      title: "PHASE 1 - ELIGIBILITY",
      subtitle: "CIVIL SERVANT REVIEWS THE CANDIDATE",
    },
    progress: 15,
  }
}

export default function ReviewCandidate() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useContext(SimulationContext);
  const [citizen, setCitizen] = useState<TCitizen>();
  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN_SERVANT,
      userAuthorized: true,
      ...getSubtitle(searchParams.get("state"))
    });
  }, []);

  useEffect(() => {
    const f = async () => {
      const req = await fetch('/api/users');
      const res = await req.json();
      setCitizen(res.users[0]);
    }
    f();
  }, [])

  console.log(citizen);

  return (
    <Flex w="100%" direction="column" gap="20px">
      <Flex direction="column" gap="20px">
        <Flex justifyContent="space-between">
          <Flex alignItems="center" gap="12px">
            <Heading variant="h2" fontSize="24px">
              Candidate Info
            </Heading>
            <Tag colorScheme="info">Action Required</Tag>
          </Flex>
          <ButtonGroup colorScheme="black" variant="ghost">
            <Button>SCREEN</Button>
            <Button>CONTACT</Button>
            <Button>FLAG</Button>
            <Button>REQUEST</Button>
          </ButtonGroup>
        </Flex>
        <ActionAlert state={searchParams.get("state")} />
        <Box>
          <Heading variant="h3" fontSize="18px">
            Personal Information
          </Heading>
          <Heading variant="h3" fontSize="18px" color="black.500">
            Social ID: {citizen?.socialCode}
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
            <Text>{citizen?.fullName}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Occupation</Text>
            <Text>{citizen?.occupation}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Personal ID Code</Text>
            <Text>{citizen?.idCode}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Home Address</Text>
            <Text>{citizen?.fullAddress}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">E-mail</Text>
            <Text color="gray">{citizen?.email}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Phone Number</Text>
            <Text color="gray">{citizen?.phoneNumber}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Date of Birth</Text>
            <Text>{citizen?.dateOfBirth.toLocaleString('et')}</Text>
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
                    <Tag
                      p="6px 12px"
                      mb="12px"
                      colorScheme="admin"
                      variant="outline"
                      key={need}
                    >
                      <TagLabel>{need}</TagLabel>
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
      <Tabs colorScheme="admin" isFitted variant="enclosed-colored">
        <TabList>
          <Tab>Household Information</Tab>
          <Tab>Documents & Certificates</Tab>
          <Tab>Additional Information</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding="0">
            <Flex direction="column" gap="20px">
              <Table variant="simple">
                <Thead backgroundColor="black.700" color="black.0">
                  <Tr>
                    <Th color="black.0">National ID</Th>
                    <Th color="black.0">Name</Th>
                    <Th color="black.0">Relation</Th>
                    <Th color="black.0">Date of Birth</Th>
                    <Th color="black.0">Individual Needs</Th>
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
                      <Tr key={person.personalCode}>
                        <Td>{person.personalCode}</Td>
                        <Td>{person.name}</Td>
                        <Td>{person.relation}</Td>
                        <Td>{person.dateOfBirth}</Td>
                        <Td>
                          <Flex wrap="wrap" gap="4px">
                            {person.needs.map((need) => (
                              <Tag
                                p="6px 12px"
                                variant="outline"
                                colorScheme="admin"
                                key={need}
                              >
                                <TagLabel>{need}</TagLabel>
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
              <Thead backgroundColor="black.700" color="black.0">
                <Tr>
                  <Th color="black.0">Document Name</Th>
                  <Th color="black.0">Organization</Th>
                  <Th color="black.0">Issued On</Th>
                  <Th color="black.0">Valid Until</Th>
                  <Th color="black.0">Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {documentsData.map((document, index) => {
                  return (
                    <Tr key={index}>
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
