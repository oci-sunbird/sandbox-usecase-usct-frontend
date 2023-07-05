import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FakeLoader from "../../../ui/FakeLoader/FakeLoader";
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from "../USCT";
import { BUILDING_BLOCK } from "../utils";

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

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: false,
      [BUILDING_BLOCK.AUTHENTICATION]: true,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: false,
      [BUILDING_BLOCK.MESSAGING]: false,
      [BUILDING_BLOCK.PAYMENT]: false,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: false,
      [BUILDING_BLOCK.SECURITY]: false,
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
