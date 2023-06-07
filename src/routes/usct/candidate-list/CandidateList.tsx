import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { colors } from "../../../chakra-overrides/colors";
import Tooltip from "../../../ui/Tooltip/Tooltip";
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from "../USCT";
import { BUILDING_BLOCK } from "../utils";

export default function CandidateList() {
  const { state, dispatch } = useContext(SimulationContext);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN_SERVANT,
      description: {
        title:
          searchParams.get("state") === "enrolled"
            ? "PHASE 2 - ENROLMENT"
            : "PHASE 1 - ELIGIBILITY",
        subtitle:
          searchParams.get("state") === "enrolled"
            ? "CIVIL SERVANT VIEWS THE ASSIGNED ENROLMENT CANDIDATES"
            : "CIVIL SERVANT REVIEWS THE ASSIGNED CANDIDATES",
      },
      progress: searchParams.get("state") === "enrolled" ? 55 : 10,
      nextStep: "../review-candidate/2895379235",
      previousStep: "../case-management",
    });
  }, []);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: true,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: false,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: false,
      [BUILDING_BLOCK.PAYMENT]: true,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: false,
      [BUILDING_BLOCK.SECURITY]: false,
    });
  }, []);

  return (
    <Flex w="100%" direction="column" gap="60px">
      <Flex gap="20px" direction="column">
        <Heading>Assigned Candidate</Heading>
        <Flex justifyContent="space-between">
          <Flex gap="10px" flexShrink="0" alignItems="center">
            <Flex
              color="white"
              backgroundColor="black.900"
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
        </Flex>
        <Box position="relative">
          <Tooltip letter="A">
            <Tabs isFitted variant="enclosed-colored">
              <TabList>
                <Tab>Eligibility (1)</Tab>
                <Tab>Enrollment (1)</Tab>
                <Tab>Active Beneficiaries (21)</Tab>
              </TabList>
              <TabPanels>
                <TabPanel padding="0">
                  <Flex direction="column" gap="20px">
                    <Table variant="simple">
                      <Thead
                        backgroundColor={colors.secondary[800]}
                        color={colors.secondary[0]}
                      >
                        <Tr>
                          <Th color={colors.secondary[0]}>Social ID</Th>
                          <Th color={colors.secondary[0]}>Household Size</Th>
                          <Th color={colors.secondary[0]}>Needs</Th>
                          <Th color={colors.secondary[0]}>Latest Update</Th>
                          <Th color={colors.secondary[0]}>Status</Th>
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
                            <Button colorScheme="black" variant="ghost">
                              ...
                            </Button>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    <Flex justifyContent="flex-end">
                      <Button
                        as={Link}
                        to="../review-candidate/2895379235"
                        colorScheme="admin"
                      >
                        Review Next Candidate
                      </Button>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel padding="0">
                  <Flex direction="column" gap="20px">
                    <Table variant="simple">
                      <Thead
                        backgroundColor={colors.secondary[800]}
                        color={colors.secondary[0]}
                      >
                        <Tr>
                          <Th color={colors.secondary[0]}>Social ID</Th>
                          <Th color={colors.secondary[0]}>Household Size</Th>
                          <Th color={colors.secondary[0]}>Needs</Th>
                          <Th color={colors.secondary[0]}>Latest Update</Th>
                          <Th color={colors.secondary[0]}>Status</Th>
                          <Th></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>37793946215</Td>
                          <Td>5</Td>
                          <Td>High Priority</Td>
                          <Td>Today</Td>
                          <Td>Action Required</Td>
                          <Td>
                            <Button colorScheme="black" variant="ghost">
                              ...
                            </Button>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    <Flex justifyContent="flex-end">
                      <Button
                        as={Link}
                        to="../review-candidate/2895379235?state=scheduling"
                        colorScheme="admin"
                      >
                        Review the Candidate
                      </Button>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel padding="0">
                  <p>active beneficiaries tab</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Tooltip>
        </Box>
      </Flex>
      <Flex gap="20px" direction="column">
        <Heading>Candidate List</Heading>
        <Flex justifyContent="space-between">
          <Flex gap="10px" flexShrink="0" alignItems="center">
            <Text>
              <strong>211</strong> ACTIVE CANDIDATES
            </Text>
          </Flex>
        </Flex>
        <Box position="relative">
          <Tooltip letter="B">
            <Table variant="simple" mb="20px">
              <Thead
                backgroundColor={colors.secondary[800]}
                color={colors.secondary[0]}
              >
                <Tr>
                  <Th color={colors.secondary[0]}>Social ID</Th>
                  <Th color={colors.secondary[0]}>Reviewer</Th>
                  <Th color={colors.secondary[0]}>Household Size</Th>
                  <Th color={colors.secondary[0]}>Latest Update</Th>
                  <Th color={colors.secondary[0]}>Status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>37793946215</Td>
                  <Td>(unassigned)</Td>
                  <Td>High Priority</Td>
                  <Td>Yesterday</Td>
                  <Td>
                    <Tag justifyContent="center" w="140px">
                      Pending
                    </Tag>
                  </Td>
                  <Td>
                    <Button size="sm" colorScheme="black" variant="ghost">
                      ...
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Flex justifyContent="space-between">
              <ButtonGroup colorScheme="secondary">
                <Button disabled variant="solid">
                  1
                </Button>
                <Button disabled variant="outline">
                  2
                </Button>
                <Button disabled variant="outline">
                  3
                </Button>
                <Button disabled variant="outline">
                  4
                </Button>
                <Button
                  disabled
                  variant="outline"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Next
                </Button>
              </ButtonGroup>
              <Button disabled>Request to Assign New Candidate</Button>
            </Flex>
          </Tooltip>
        </Box>
      </Flex>
    </Flex>
  );
}
