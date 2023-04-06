import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { EUserType, SimulationContext } from "../USCT";

export default function AuthoriseCitizen() {
  const { state, dispatch } = useContext(SimulationContext);

  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: "PHASE 2 - SOMETHING SOMETHING",
        subtitle: "PERSON LOGS IN OR SOMETHING",
      },
      progress: 30,
      userAuthorized: false,
    });
  }, []);
  return (
    <Center w="100%">
      <VStack maxW="312px" textAlign="center" gap="20px">
        <Heading>Log In</Heading>
        <Text>
          Our self-service environment is your opportunity to communicate with
          us conveniently and paper-free.
        </Text>
        <Button colorScheme="citizen" as={Link} to="../info" w="100%">
          ID Card
        </Button>
        <Button colorScheme="citizen" as={Link} to="../info" w="100%">
          Mobile ID
        </Button>
        <Button colorScheme="citizen" as={Link} to="../info" w="100%">
          e-ID Account
        </Button>
        <Button colorScheme="citizen" as={Link} to="../info" w="100%">
          Online Bank
        </Button>
      </VStack>
    </Center>
  );
}
