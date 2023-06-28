import {
  Button,
  Checkbox,
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
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { colors } from "../../chakra-overrides/colors";
import { RPCContext } from "./rpc";

export default function BeneficiaryList() {
  const rpc = useContext(RPCContext);
  const navigate = useNavigate();
  const [isValidating, setIsValidating] = useState(false);
  const [checkedBeneficiaries, setCheckedBeneficiaries] = useState<number[]>(
    []
  );

  const { data: beneficiaries } = useQuery(
    `beneficiaries`,
    rpc.getBeneficiariesList
  );

  const handleCheck = (id: number) => {
    if (checkedBeneficiaries.includes(id)) {
      setCheckedBeneficiaries(
        [...checkedBeneficiaries].filter((b) => b !== id)
      );
    } else {
      setCheckedBeneficiaries([...checkedBeneficiaries, id]);
    }
  };

  const handleOrderPayment = () => {};

  // if (isPaymentProcessed) {
  //   return (
  //     <Center display="flex" margin="auto">
  //       <VStack maxW="640px" gap="40px">
  //         <Heading size="md" mb="20px">
  //           Thank you! Payment Order received.
  //         </Heading>
  //         <Box>
  //           <Button mb="10px" maxW="380px" w="100%" colorScheme="admin">
  //             Home
  //           </Button>
  //           <ButtonGroup
  //             maxW="380px"
  //             w="100%"
  //             colorScheme="admin"
  //             variant="outline"
  //             gap="20px"
  //           >
  //             <Button as={Link} to="/driver-poc" w="100%">
  //               Candidate List
  //             </Button>
  //             {/* <Button onClick={() => handleReset()} w="100%">
  //               Beneficiary List
  //             </Button> */}
  //           </ButtonGroup>
  //         </Box>
  //       </VStack>
  //     </Center>
  //   );
  // }

  // if (isPaymentProcessing) {
  //   return (
  //     <Center display="flex" margin="auto">
  //       <VStack gap="40px">
  //         <CircularProgress isIndeterminate size={100} mb="40px" />
  //         <Heading mb="20px">Receiving Payment Order!</Heading>
  //         <Text>Please wait! This process might take some time.</Text>
  //       </VStack>
  //     </Center>
  //   );
  // }

  // if (validatedBeneficiaries.length) {
  //   return (
  //     <Flex direction="column" gap="60px">
  //       <Heading>Confirmation</Heading>
  //       <Text>
  //         Please confirm that the payment order will be sent for the candidates
  //         listed below.
  //       </Text>
  //       {/* <Table>
  //         <Thead>
  //           <Tr>
  //             <Th>Name</Th>
  //             <Th>National ID</Th>
  //             <Th>Benefit Package</Th>
  //             <Th>Payment Due Date Approximation</Th>
  //           </Tr>
  //         </Thead>
  //         <Tbody>
  //           {validatedBeneficiaries.map((vb) => {
  //             return (
  //               <Tr key={vb.id}>
  //                 <Td>
  //                   <Text>{`${vb.firstName} ${vb.lastName}`}</Text>
  //                 </Td>
  //                 <Td>
  //                   <Text>{vb.idCode}</Text>
  //                 </Td>
  //                 <Td>
  //                   <Text>{vb.benefitPackage.id}</Text>
  //                 </Td>
  //                 <Td>
  //                   <Text>{vb.dateOfPayment}</Text>
  //                 </Td>
  //               </Tr>
  //             );
  //           })}
  //         </Tbody>
  //       </Table> */}
  //       <Flex justifyContent="flex-end">
  //         <ButtonGroup colorScheme="admin" gap="20px">
  //           <Button
  //             onClick={() => {
  //               setIsValidating(false);
  //               setValidatedBeneficiaries([]);
  //             }}
  //             w="180px"
  //             variant="outline"
  //           >
  //             Cancel
  //           </Button>
  //           {/* <Button onClick={() => handleConfirmPayment()} w="180px">
  //             Confirm
  //           </Button> */}
  //         </ButtonGroup>
  //       </Flex>
  //     </Flex>
  //   );
  // }

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
            <Th color={colors.secondary[0]}>Benefit Package</Th>
            <Th color={colors.secondary[0]}>Payment Status</Th>
            <Th></Th>
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
                    (b) => beneficiary.id === b
                  )}
                  onChange={() => handleCheck(beneficiary.id)}
                />
              </Td>
              <Td>
                <Text>{`${beneficiary.person.firstName} ${beneficiary.person.lastName}`}</Text>
              </Td>
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
              <Td></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justifyContent="flex-end">
        <Button
          isLoading={isValidating}
          colorScheme="admin"
          onClick={() => handleOrderPayment()}
        >
          Order payment
        </Button>
      </Flex>
    </>
  );
}
