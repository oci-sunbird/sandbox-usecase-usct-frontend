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
import Tooltip from "@ui/Tooltip/Tooltip";
import { useContext, useEffect } from "react";
import { Link, useNavigation } from "react-router-dom";
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from "../USCT";
import { BUILDING_BLOCK } from "../utils";

export default function Review() {
  const { location } = useNavigation();
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
      nextStep: "../personal?done=true",
      previousStep: "../personal",
      userAuthorized: true,
    });
  }, [location]);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: true,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: false,
      [BUILDING_BLOCK.PAYMENT]: true,
      [BUILDING_BLOCK.REGISTRATION]: true,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: true,
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
      <Tooltip letter="A" letterPosition="right-center">
        <Flex direction="column" w="100%" mb="76px">
          <Heading mb="24px">Validate the Information</Heading>
          <Box>
            <Text mb="16px">
              Please confirm that the information shown below is correct
            </Text>
            <Flex direction="column" gap="16px" w={{ sm: "100%", xl: "50%" }}>
              <FormControl
                flexDirection={{ sm: "column", lg: "row" }}
                alignItems={{ sm: "flex-start", lg: "center" }}
                display="flex"
                gap="16px"
              >
                <FormLabel
                  fontWeight="600"
                  width={{ sm: "100%", lg: "30%" }}
                  m="0"
                >
                  Email Address
                </FormLabel>
                <Input w={{ sm: "100%", lg: "70%" }} value="tom@myspace.com" />
              </FormControl>
              <FormControl
                flexDirection={{ sm: "column", lg: "row" }}
                alignItems={{ sm: "flex-start", lg: "center" }}
                display="flex"
                gap="16px"
              >
                <FormLabel
                  fontWeight="600"
                  width={{ sm: "100%", lg: "30%" }}
                  m="0"
                >
                  Phone Number
                </FormLabel>
                <Input value="(+00) 94 843 432" w={{ sm: "100%", lg: "70%" }} />
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
      </Tooltip>
    </Box>
  );
}
