import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { EUserType, SimulationContext } from "../USCT";

export default function AuthoriseCitizenServant() {
  const { state, dispatch } = useContext(SimulationContext);

  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN_SERVANT,
      userAuthorized: false,
      description: {
        title: "PHASE 1 - ELIGIBILITY",
        subtitle: "CIVIL SERVANT LOGS IN",
      },
      progress: 0,
    });
  }, []);
  return (
    <Center w="100%">
      <VStack maxW="312px" textAlign="center" gap="20px">
        <Heading>Ministry of Social Welfare Log In</Heading>
        <Text>
          Please use your National ID Card or Work ID Card to enter the system.
        </Text>
        <Button as={Link} to="./case-management" colorScheme="admin" w="100%">
          ID Card
        </Button>
        <Button as={Link} to="./case-management" colorScheme="admin" w="100%">
          Work ID Card
        </Button>
      </VStack>
    </Center>
  );
}
