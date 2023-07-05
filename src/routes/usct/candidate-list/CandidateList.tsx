import { ReactComponent as HighPriorityIcon } from '@assets/icons/high-priority.svg';
import { ReactComponent as MoreIcon } from '@assets/icons/more-horizontal.svg';
import {
  Box,
  Button,
  Flex,
  Heading,
  Tab,
  Table,
  TableContainer,
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
} from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import Pagination from '@ui/Pagination/Pagination';
import { useContext, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { colors } from '../../../chakra-overrides/colors';
import Tooltip from '../../../ui/Tooltip/Tooltip';
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from '../USCT';
import { BUILDING_BLOCK } from '../utils';

const getConfig = (state: string | null) => {
  switch (state) {
    case 'scheduling':
      return {
        description: {
          title: 'PHASE 2 - ENROLMENT',
          subtitle: 'CIVIL SERVANT VIEWS THE ASSIGNED ENROLMENT CANDIDATES',
        },
        previousStep: '../enrolment',
        nextStep: '../review-candidate/2895379235?state=scheduling',
      };
    case 'submitted':
      return {
        description: {
          title: 'PHASE 2 - ENROLMENT',
          subtitle: 'CIVIL SERVANT VIEWS THE ASSIGNED ENROLMENT CANDIDATES',
        },
        previousStep: '../case-management?state=submitted',
        nextStep: '../review-candidate/2895379235?state=done',
      };
    default:
      return {
        description: {
          title: 'PHASE 1 - ELIGIBILITY',
          subtitle: 'CIVIL SERVANT REVIEWS THE ASSIGNED CANDIDATES',
        },
        nextStep: '../review-candidate/2895379235',
        previousStep: '../case-management',
      };
  }
};

export default function CandidateList() {
  const { state, dispatch } = useContext(SimulationContext);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch({
      type: 'SET_ALL',
      ...state,
      userType: EUserType.CITIZEN_SERVANT,
      ...getConfig(searchParams.get('state')),
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
      [BUILDING_BLOCK.PAYMENT]: false,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: false,
    });
  }, []);

  return (
    <Flex w="100%" direction="column" gap="60px">
      <Flex gap="20px" direction="column">
        <Heading>Review Candidate</Heading>
        <Flex justifyContent="space-between">
          <Flex gap="10px" flexShrink="0" alignItems="center">
            <Flex
              backgroundColor="secondary.1000"
              flexShrink="0"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
              w="24px"
              h="24px"
            >
              <Text color="white" fontWeight="700" fontSize="12">
                1
              </Text>
            </Flex>
            <Text fontSize="12" color="secondary.700">
              ASSIGNED CANDIDATES
            </Text>
          </Flex>
        </Flex>
        <Tooltip letter="A" letterPosition="top">
          <Tabs isFitted defaultIndex={!!searchParams.get('state') ? 1 : 0}>
            <TabList>
              <Tab>Eligibility (1)</Tab>
              <Tab>Enrollment (1)</Tab>
              <Tab>Active Beneficiaries (21)</Tab>
            </TabList>
            <TabPanels>
              <TabPanel padding="0">
                <Flex direction="column" gap="20px">
                  <TableContainer>
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
                          <Td>
                            <Flex gap="10px" alignItems="center">
                              <HighPriorityIcon /> High Priority
                            </Flex>
                          </Td>
                          <Td>Yesterday</Td>
                          <Td>
                            <Tag justifyContent="center" w="140px">
                              Action Required
                            </Tag>
                          </Td>
                          <Td>
                            <MoreIcon />
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>

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
                  <TableContainer>
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
                          <Td>
                            <Flex gap="10px" alignItems="center">
                              <HighPriorityIcon /> High Priority
                            </Flex>
                          </Td>
                          <Td>Today</Td>
                          <Td>
                            <Tag justifyContent="center" w="140px">
                              Action Required
                            </Tag>
                          </Td>
                          <Td>
                            <MoreIcon />
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>

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
              <TabPanel padding="0"></TabPanel>
            </TabPanels>
          </Tabs>
        </Tooltip>
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
        <Tooltip letter="B" letterPosition="top">
          <TableContainer mb="20px">
            <Table variant="simple">
              <Thead
                backgroundColor={colors.secondary[800]}
                color={colors.secondary[0]}
              >
                <Tr>
                  <Th color={colors.secondary[0]}>Candidate No</Th>
                  <Th color={colors.secondary[0]}>Household Size</Th>
                  <Th color={colors.secondary[0]}>Latest Update</Th>
                  <Th color={colors.secondary[0]}>Reviewer</Th>
                  <Th color={colors.secondary[0]}>Status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>37793946215</Td>
                  <Td>{faker.number.int({ min: 1, max: 7 })}</Td>
                  <Td>Yesterday</Td>
                  <Td>{faker.person.fullName()}</Td>
                  <Td>
                    <Tag justifyContent="center" w="140px">
                      Pending
                    </Tag>
                  </Td>
                  <Td>
                    <MoreIcon />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Flex
            justifyContent="space-between"
            gap="20px"
            flexDirection={{ sm: 'column', xl: 'row' }}
          >
            <Pagination />
            <Button disabled>Request to Assign New Candidate</Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
