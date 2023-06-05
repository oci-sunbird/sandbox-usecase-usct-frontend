import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FakeLoader from "../../../ui/FakeLoader/FakeLoader";
import { EUserType, SimulationContext } from "../USCT";

export default function AuthoriseCitizen() {
  const { state, dispatch } = useContext(SimulationContext);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: "PHASE 1 - ELIGIBILITY",
        subtitle: "CITIZEN LOGS IN",
      },
      progress: 20,
      userAuthorized: false,
      previousStep: "../review-candidate/2895379235",
      nextStep: "../info",
    });
  }, []);
  return (
    <FakeLoader label="Changing perspective to applicant">
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
    </FakeLoader>
  );
}
