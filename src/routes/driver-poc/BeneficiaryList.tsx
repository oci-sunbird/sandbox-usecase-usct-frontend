import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  CircularProgress,
  Flex,
  Heading,
  Spinner,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { colors } from '../../chakra-overrides/colors';
import { RPCContext } from './rpc';
import { DriverPOC } from './types';

export default function BeneficiaryList() {
  const rpc = useContext(RPCContext);
  const [isOrderingPayment, setIsOrderingPayment] = useState(false);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [isPaymentProcessed, setisPaymentProcessed] = useState(false);
  const [checkedBeneficiaries, setCheckedBeneficiaries] = useState<
    DriverPOC.Beneficiary[]
  >([]);

  const { data: beneficiaries } = useQuery(
    `beneficiaries`,
    rpc.getBeneficiariesList
  );

  const handleCheck = (beneficiary: DriverPOC.Beneficiary) => {
    if (checkedBeneficiaries.find((b) => b.id === beneficiary.id)) {
      setCheckedBeneficiaries(
        [...checkedBeneficiaries].filter((b) => b.id !== beneficiary.id)
      );
    } else {
      setCheckedBeneficiaries([...checkedBeneficiaries, beneficiary]);
    }
  };

  const handleConfirmPayment = async () => {
    setIsPaymentProcessing(true);
    const payment = await rpc.executePayments(checkedBeneficiaries);
    if (payment) {
      setisPaymentProcessed(true);
      setIsPaymentProcessing(false);
    } else {
      setIsPaymentProcessing(false);
    }
  };

  if (isPaymentProcessed) {
    return (
      <Center display="flex" margin="auto">
        <VStack maxW="640px" gap="40px">
          <Heading size="md" mb="20px">
            Thank you! Payment Order received.
          </Heading>
          <Box>
            <Button mb="10px" maxW="380px" w="100%" colorScheme="admin">
              Home
            </Button>
            <ButtonGroup
              maxW="380px"
              w="100%"
              colorScheme="admin"
              variant="outline"
              gap="20px"
            >
              <Button as={Link} to="/driver-poc" w="100%">
                Candidate List
              </Button>
              {/* <Button onClick={() => handleReset()} w="100%">
                Beneficiary List
              </Button> */}
            </ButtonGroup>
          </Box>
        </VStack>
      </Center>
    );
  }

  if (isPaymentProcessing) {
    return (
      <Center display="flex" margin="auto">
        <VStack gap="40px">
          <CircularProgress isIndeterminate size={100} mb="40px" />
          <Heading mb="20px">Receiving Payment Order!</Heading>
          <Text>Please wait! This process might take some time.</Text>
        </VStack>
      </Center>
    );
  }

  if (isOrderingPayment) {
    return (
      <Flex direction="column" gap="60px">
        <Heading>Confirmation</Heading>
        <Text>
          Please confirm that the payment order will be sent for the candidates
          listed below.
        </Text>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>ID Number</Th>
              <Th>Payment Amount</Th>
              <Th>Benefit Package</Th>
              <Th>Payment Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {checkedBeneficiaries.map((vb) => {
              return (
                <Tr key={vb.id}>
                  <Td>
                    <Text>{`${vb.person.firstName} ${vb.person.lastName}`}</Text>
                  </Td>
                  <Td>
                    <Text>{vb.person.id}</Text>
                  </Td>
                  <Td>
                    <Text>{vb.enrolledPackage.amount}€</Text>
                  </Td>
                  <Td>
                    <Text>{vb.enrolledPackage.name}</Text>
                  </Td>
                  <Td>
                    <Text>{vb.paymentStatus}</Text>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Flex justifyContent="flex-end">
          <ButtonGroup colorScheme="admin" gap="20px">
            <Button
              onClick={() => {
                setIsOrderingPayment(false);
              }}
              w="180px"
              variant="outline"
            >
              Cancel
            </Button>
            <Button onClick={() => handleConfirmPayment()} w="180px">
              Confirm
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    );
  }

  return (
    <>
      <Heading mb="40px">Beneficiary List</Heading>
      <Text mb="40px">
        Please choose the beneficiaries for sending payment order. You can
        select multiple beneficiaries.
      </Text>
      <Heading mb="20px" size="md">
        Beneficiaries
      </Heading>
      <Flex mb="20px" gap="10px">
        <Flex
          w="24px"
          h="24px"
          alignItems="center'"
          justifyContent="center"
          borderRadius="100%"
          backgroundColor={colors.secondary[1000]}
          color={colors.secondary[0]}
        >
          <Text>{beneficiaries?.length}</Text>
        </Flex>
        <Text variant="caps" color={colors.secondary[800]}>
          BENEFICIARIES
        </Text>
      </Flex>
      <Table mb="20px" variant="simple">
        <Thead backgroundColor={colors.secondary[800]}>
          <Tr>
            <Th></Th>
            <Th color={colors.secondary[0]}>Name</Th>
            <Th color={colors.secondary[0]}>ID Number</Th>
            <Th color={colors.secondary[0]}>Payment Amount</Th>
            <Th color={colors.secondary[0]}>Benefit Package</Th>
            <Th color={colors.secondary[0]}>Payment Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!beneficiaries && (
            <Tr>
              <Td colSpan={4}>
                <Flex justifyContent="center" alignItems="center" w="100%">
                  <Spinner size="md" />
                </Flex>
              </Td>
            </Tr>
          )}
          {beneficiaries?.map((beneficiary, index) => (
            <Tr
              key={beneficiary.id}
              _hover={{
                background: colors.secondary[100],
              }}
            >
              <Td>
                <Checkbox
                  size="lg"
                  isChecked={checkedBeneficiaries.some(
                    (b) => beneficiary.id === b.id
                  )}
                  onChange={() => handleCheck(beneficiary)}
                />
              </Td>
              <Td>
                <Text>{`${beneficiary.person.firstName} ${beneficiary.person.lastName}`}</Text>
              </Td>
              <Td>{beneficiary.person.id}</Td>
              <Td>{beneficiary.enrolledPackage.amount} €</Td>
              <Td>
                <Tag
                  justifyContent="center"
                  color={colors.secondary[0]}
                  backgroundColor={colors.secondary[800]}
                  w="140px"
                >
                  {beneficiary.enrolledPackage.name}
                </Tag>
              </Td>
              <Td>
                <Tag
                  justifyContent="center"
                  color={colors.secondary[0]}
                  backgroundColor={colors.secondary[800]}
                  w="140px"
                  textAlign="center"
                >
                  {beneficiary.paymentStatus}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justifyContent="flex-end">
        <Button colorScheme="admin" onClick={() => setIsOrderingPayment(true)}>
          Order payment
        </Button>
      </Flex>
    </>
  );
}
