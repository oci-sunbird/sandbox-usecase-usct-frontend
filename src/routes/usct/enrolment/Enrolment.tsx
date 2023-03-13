import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Radio,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Enrolment() {
  return (
    <Flex direction="column" gap="20px">
      <Flex direction="column">
        <Heading fontSize="36px">Enrolling to the Program</Heading>
        <Heading fontSize="24px">Unconditional Social Cash Transfer</Heading>
      </Flex>
      <Flex direction="column">
        <Text>
          You have been assinged to <strong>Monthly Benefit Package</strong> in
          unconditional social cash transfer program.
        </Text>
        <Text>
          With this benefit package, you and your family will receive:
        </Text>
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
            <Heading fontSize="16px">Monthly cash</Heading>
            <Text>
              Help for you and your family without any additional conditions
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
            <Heading fontSize="16px">Career assessment</Heading>
            <Text>Online monthly consultation and job referrals</Text>
          </Flex>
        </Flex>
      </SimpleGrid>
      <Flex direction="column" gap="20px">
        <Heading fontSize="18px">Package payment</Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>Start Date</Th>
              <Th>Payment Details</Th>
              <Th>Duration</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>01.01.2023</Td>
              <Td>USCT - Monthly Benefit Package</Td>
              <Td>6 Months</Td>
              <Td>$1 234.000</Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
      <Flex direction="column" gap="20px">
        <Heading fontSize="18px">Preferred Payment Method:</Heading>
        <Text>
          Please select your payment method to enroll into the program.
        </Text>
        <Flex direction="column" gap="12px">
          <Flex
            borderRadius="8px"
            border="2px solid lightgray"
            p="26px 29px"
            gap="20px"
            alignItems="center"
          >
            <Icon w="34px" h="34px" flexShrink="0" />
            <Flex direction="column" gap="8px">
              <Heading fontSize="16px">Bank Payment</Heading>
              <Text>Direct cash transfer to your bank account.</Text>
            </Flex>
            <Radio size="lg" ml="auto" />
          </Flex>
          <Flex
            borderRadius="8px"
            border="2px solid lightgray"
            p="26px 29px"
            gap="20px"
            alignItems="center"
          >
            <Icon w="34px" h="34px" flexShrink="0" />
            <Flex direction="column" gap="8px">
              <Heading fontSize="16px">Mobile Money</Heading>
              <Text>Direct cash transfer to mobile money account.</Text>
            </Flex>
            <Text ml="auto">Not Available*</Text>
          </Flex>
          <Flex
            borderRadius="8px"
            border="2px solid lightgray"
            p="26px 29px"
            gap="20px"
            alignItems="center"
          >
            <Icon w="34px" h="34px" flexShrink="0" />
            <Flex direction="column" gap="8px">
              <Heading fontSize="16px">Cash Payment</Heading>
              <Text>Direct cash transfer to your bank account.</Text>
            </Flex>
            <Text ml="auto">Not Available*</Text>
          </Flex>
          <Flex
            borderRadius="8px"
            border="2px solid lightgray"
            p="26px 29px"
            gap="20px"
            alignItems="center"
          >
            <Icon w="34px" h="34px" flexShrink="0" />
            <Flex direction="column" gap="8px">
              <Heading fontSize="16px">Bank Payment</Heading>
              <Text>Direct cash transfer to your bank account.</Text>
            </Flex>
            <Text ml="auto">Not Available*</Text>
          </Flex>
        </Flex>
      </Flex>
      <Checkbox size="lg">
        I reviewed Entitlements of Beneficiaries document and accept...
      </Checkbox>
      <Flex justifyContent="flex-end">
        <Button w="167px" as={Link} to="../candidate-list">
          Enroll
        </Button>
      </Flex>
    </Flex>
  );
}
