import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from "../USCT";
import { BUILDING_BLOCK } from "../utils";

export default function Review() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(SimulationContext);

  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: "PHASE 1 - ELIGIBILITY",
        subtitle: "CITIZEN VALIDATES THEIR INFORMATION",
      },
      progress: 35,
      userAuthorized: true,
    });
  }, []);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: true,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: false,
      [BUILDING_BLOCK.PAYMENT]: false,
      [BUILDING_BLOCK.REGISTRATION]: true,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: true,
      [BUILDING_BLOCK.SECURITY]: true,
    });
  }, []);

  return (
    <Box w="100%">
      <Button
        as={Link}
        to="../personal"
        mb="116px"
        variant="ghost"
        leftIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      <Flex direction="column" w="100%" mb="76px">
        <Heading mb="24px">Validate the Information</Heading>
        <Box>
          <Text mb="16px">
            Please confirm that the information shown below is correct
          </Text>
          <Flex direction="column" gap="16px" w="50%">
            <FormControl
              flexDirection="row"
              alignItems="center"
              display="flex"
              gap="16px"
            >
              <FormLabel fontWeight="600" width="30%" m="0">
                Email Address
              </FormLabel>
              <Input w="70%" value="tom@myspace.com" />
            </FormControl>
            <FormControl
              flexDirection="row"
              alignItems="center"
              display="flex"
              gap="16px"
            >
              <FormLabel fontWeight="600" width="30%" m="0">
                Phone Number
              </FormLabel>
              <Input value="(+00) 94 843 432" w="70%" />
            </FormControl>
          </Flex>
        </Box>
      </Flex>
      <Flex gap="8px" alignItems="center" justifyContent="flex-end">
        <ButtonGroup colorScheme="citizen">
          <Button as={Link} to="../personal" variant="outline">
            Back
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            as={Link}
            to="../personal?done=true"
          >
            Next
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
