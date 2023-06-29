import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  Grid,
  GridItem,
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
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from '../USCT';
import { BUILDING_BLOCK } from '../utils';
import { ReactComponent as BanknoteIcon } from '@assets/icons/banknote.svg';
import { ReactComponent as CreditCardIcon } from '@assets/icons/credit-card.svg';
import { ReactComponent as MobilePaymentIcon } from '@assets/icons/mobile-payment.svg';
import { ReactComponent as HashIcon } from '@assets/icons/hash.svg';
import { ReactComponent as WalletIcon } from '@assets/icons/wallet.svg';
import radioCheck from '@assets/icons/radio-check.svg';

export default function Enrolment() {
  const { state, dispatch } = useContext(SimulationContext);

  const [paymentMethodSelected, setPaymentMethodSelected] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'SET_ALL',
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: 'PHASE 2 - ENROLMENT',
        subtitle:
          'CITIZEN CHOOSES AVAILABLE PAYMENT METHOD AND ACCEPTS ENROLMENT',
      },
      progress: 50,
      userAuthorized: true,
    });
  }, []);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: false,
      [BUILDING_BLOCK.AUTHENTICATION]: true,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: true,
      [BUILDING_BLOCK.PAYMENT]: true,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: false,
      [BUILDING_BLOCK.SECURITY]: false,
    });
  }, []);

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
            border="2px dashed var(--chakra-colors-secondary-1000)"
          >
            <BanknoteIcon
              width="34px"
              height="34px"
              color="var(--chakra-colors-secondary-1000)"
            />
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
            border="2px dashed var(--chakra-colors-secondary-1000)"
          >
            <BanknoteIcon
              width="34px"
              height="34px"
              color="var(--chakra-colors-secondary-1000)"
            />
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
          <Box
            borderRadius="8px"
            border={`2px solid ${
              paymentMethodSelected
                ? 'var(--chakra-colors-secondary-1000)'
                : 'lightgray'
            }`}
          >
            <Flex p="32px 24px" gap="20px" alignItems="center">
              <CreditCardIcon />
              <Flex direction="column" gap="8px">
                <Heading fontSize="16px">Bank Payment</Heading>
                <Text>Direct cash transfer to your bank account.</Text>
              </Flex>
              <Radio
                size="lg"
                ml="auto"
                borderColor="secondary.1000"
                _checked={{
                  background: 'black',
                  content: `url(${radioCheck})`,
                }}
                onChange={() => setPaymentMethodSelected(true)}
              />
            </Flex>
            <Collapse in={paymentMethodSelected}>
              <Box px="24px" pb="20px">
                <Text mb="16px">
                  With this method, the arranged amount will be transferred
                  directly to your bank account at the designated time for each
                  month.
                </Text>
                <Text mb="24px">
                  Please review your bank account information:
                </Text>
                <Grid marginBottom="24px" gap="12px" templateColumns={{ sm: "1fr", xl: "1fr 1fr" }}>
                  <GridItem>
                    <Text size="sm" fontWeight="bold">Bank Account Owner Name</Text>
                    <Text size="sm">Thomas Anderson</Text>
                  </GridItem>
                  <GridItem>
                    <Text size="sm" fontWeight="bold">International Bank Account Number (IBAN)</Text>
                    <Text size="sm">AA02300209000106531065</Text>
                  </GridItem>
                  <GridItem>
                    <Text size="sm" fontWeight="bold">Bank Name</Text>
                    <Text size="sm">Sunshine Bank</Text>
                  </GridItem>
                </Grid>
                <Text align="right" textDecorationLine="underline" color="secondary.500">Change Account</Text>
              </Box>
            </Collapse>
          </Box>

          <Flex
            borderRadius="8px"
            border="2px solid lightgray"
            p="26px 29px"
            gap="20px"
            alignItems="center"
            color="secondary.600"
          >
            <MobilePaymentIcon />
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
            color="secondary.600"
          >
            <HashIcon />
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
            color="secondary.600"
          >
            <WalletIcon />
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
        <Button
          w="167px"
          colorScheme="citizen"
          as={Link}
          to="../candidate-list?state=enrolled"
        >
          Enroll
        </Button>
      </Flex>
    </Flex>
  );
}
