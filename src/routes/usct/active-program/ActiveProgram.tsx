import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
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

export default function ActiveProgram() {
  return (
    <Flex direction="column" gap="20px">
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
              border="2px dotted black"
            >
              <Icon w="28px" h="28px" />
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
              border="2px dotted black"
            >
              <Icon w="28px" h="28px" />
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
              <Td>Pending</Td>
              <Td>#123456789</Td>
            </Tr>
          </Tbody>
        </Table>
        <Text fontWeight="600">Next Payment: 02.01.2023</Text>
      </Flex>
      <Flex direction="column" gap="20px">
        <Heading fontSize="18px">Package payment</Heading>
        <Text>
          Please start a conversation if you need any help, or if you have any
          questions
        </Text>
        <Tabs w="100%" isFitted variant="enclosed">
          <TabList>
            <Tab>My Active Conversations (0)</Tab>
            <Tab>Closed Conversations (0)</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
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
            </TabPanel>
            <TabPanel>
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
