import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
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
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from '../USCT';
import { BUILDING_BLOCK } from '../utils';
import { ReactComponent as BanknoteIcon } from '@assets/icons/banknote.svg';

export default function ActiveProgram() {
  const { state, dispatch } = useContext(SimulationContext);

  useEffect(() => {
    dispatch({
      type: 'SET_ALL',
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: 'PHASE 3 - PAYMENT',
        subtitle: 'CITIZEN REVIEWS THEIR PROGRAM AND STARTS A NEW CONVERSATION',
      },
      progress: 65,
      userAuthorized: true,
    });
  }, []);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: false,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: false,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: false,
      [BUILDING_BLOCK.PAYMENT]: false,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: true,
      [BUILDING_BLOCK.WORKFLOW]: true,
      [BUILDING_BLOCK.SECURITY]: true,
    });
  }, []);

  return (
    <Flex direction="column" gap="20px" width="100%">
      <Flex direction="column">
        <Heading fontSize="36px">Active Program:</Heading>
        <Heading fontSize="24px">Unconditional Social Cash Transfer</Heading>
      </Flex>
      <Flex direction="column" maxW="60%">
        <Text>
          Unconditional Social Cash Transfer helps families meet their basic
          needs for well-being and safety and serves as their path to
          self-sufficiency.
        </Text>
      </Flex>

      <Flex background="theme.light" direction="column" gap='20px' padding="20px 60px" mx="-60px">
        <Heading>Conversations</Heading>
        <Text>Conversations</Text>

        <Tabs
          isFitted
        >
          <TabList>
            <Tab>My Active Conversations (1)</Tab>
            <Tab>Closed Conversations (0)</Tab>
          </TabList>
          <TabPanels>
            <TabPanel gap="20px" display="flex" flexDirection="column">
              <TableContainer>
                <Table>
                  <Thead>
                    <Th>Date</Th>
                    <Th>Topic</Th>
                    <Th>Attachment</Th>
                    <Th>Status</Th>
                    <Th>#</Th>
                  </Thead>
                  <Tbody></Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Button colorScheme='citizen' ml="auto">Review Conversation</Button>
      </Flex>

      <Flex direction="column" gap="20px">
        <Flex direction="column">
          <Heading fontSize="18px">Assigned Benefit Package:</Heading>
          <Text>Monthly Benefit Package</Text>
        </Flex>
        <SimpleGrid columns={2} spacing="20px">
          <Flex alignItems="center" gap="20px">
            <Flex
              borderRadius="8px"
              alignItems="center"
              justifyContent="center"
              flexShrink="0"
              w="64px"
              h="64px"
              border="2px dashed black"
            >
              <BanknoteIcon
                width="34px"
                height="34px"
                color="var(--chakra-colors-secondary-1000)"
              />
            </Flex>
            <Flex direction="column" gap="8px">
              <Text>
                Monthly cash help for you and your family without any additional
                conditions.
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center" gap="20px">
            <Flex
              borderRadius="8px"
              alignItems="center"
              justifyContent="center"
              flexShrink="0"
              w="64px"
              h="64px"
              border="2px dashed black"
            >
              <BanknoteIcon
                width="34px"
                height="34px"
                color="var(--chakra-colors-secondary-1000)"
              />
            </Flex>
            <Flex direction="column" gap="4px">
              <Text>
                Career assessment, online consultation and job referrals.
              </Text>
            </Flex>
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing="20px">
          <Box>
            <Text fontWeight="600">Payment Amount</Text>
            <Text>1 234.00 at the beginning of each month</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Consultation Date</Text>
            <Text>Please select a date for your consultation</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Duration</Text>
            <Text>01.01.2023 - 01.06.2023 (6 Months)</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Location</Text>
            <Text>Online - Link will be shared ...</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Payment Method</Text>
            <Text>Bank Payment</Text>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex direction="column" gap="20px">
        <Heading fontSize="18px">Package payment</Heading>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Method</Th>
                <Th>Amount</Th>
                <Th>Payment Details</Th>
                <Th>Status</Th>
                <Th>Invoice</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>01.01.2023</Td>
                <Td>Bank Payment</Td>
                <Td>1 234.00</Td>
                <Td>USCT - Monthly Benefit Package</Td>
                <Td>
                  <Tag width="140px" justifyContent="center">
                    Pending
                  </Tag>
                </Td>
                <Td>#123456789</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Text fontWeight="600">Next Payment: 02.01.2023</Text>
      </Flex>
    </Flex>
  );
}
