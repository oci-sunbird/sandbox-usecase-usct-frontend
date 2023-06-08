// @ts-nocheck

const candidatesResponseMapper = (candidatesResponse) => {
    return candidatesResponse.users;
}

import {
    Button,
    SimpleGrid,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { colors } from "../../chakra-overrides/colors";
import RPC from "./rpc";
export default function DriverPoc() {
  const rpc = new RPC({});

  const [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState();

  useEffect(() => {
    rpc.getCandidates().then(res => setCandidates(candidatesResponseMapper(res)));
  }, [])

  return (
    <>
      <SimpleGrid columns={2} spacing={8}>
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
            {candidates?.map((candidate: any) => (
              <Tr key={candidate.id}>
                <Td>
                  <Text>{candidate.ssn}</Text>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td textAlign="center">
                  <Button
                    colorScheme="admin"
                    onClick={() => rpc.getCandidateInfo(candidate.id).then(setCandidate)}
                  >
                    check
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {candidate && (
          <VStack>
            <Text>SSN: {candidate.information.ssn}</Text>
            <Text>email: {candidate.information.email}</Text>
            <Text>phone: {candidate.information.phone}</Text>
          </VStack>
        )}
      </SimpleGrid>
    </>
  );
}
