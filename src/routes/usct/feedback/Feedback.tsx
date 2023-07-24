import { ReactComponent as StarIcon } from "@assets/icons/star.svg";
import { Box, Button, Flex, Heading, Text, Textarea } from "@chakra-ui/react";
import Tooltip from "@ui/Tooltip/Tooltip";
import { useContext, useEffect, useState } from "react";
import { ContextualHelpContext } from "../ContextualHelpContext";
import { ContextualTitle, EUserType } from "../ContextualHelpUtils";
import { ActiveBuildingBlockContext, SimulationContext } from "../USCT";
import { BUILDING_BLOCK } from "../utils";
import OffboardingModal from "./OffboardingModal";
import { colors } from "../../../chakra-overrides/colors";
import { RatingIcon } from "./Feedback.styles";

export default function Feedback() {
  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);
  const { state, dispatch } = useContext(SimulationContext);

  const [offboardingModalOpened, setOffboardingModalOpened] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: false,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: true,
      [BUILDING_BLOCK.PAYMENT]: false,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: true,
    });
  }, []);

  const { setLetterContextualTitleMap } = useContext(ContextualHelpContext);

  useEffect(() => {
    setLetterContextualTitleMap({
      A: ContextualTitle.FEEDBACK,
    });
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: "CITIZEN GIVES FEEDBACK",
        subtitle: "PRIMARY TASK",
      },
      userAuthorized: true,
      previousStep: '../conversation/300'
    });
  }, []);

  return (
    <Box w="100%" pt="80px">
      <Tooltip letter="A">
        <Heading mb="20px">Thank you for your time!</Heading>
        <Text>How would you rate your experience with our service?</Text>
        <Flex py="40px" justifyContent="center" gap="10px">
          <Flex direction="column" alignItems="flex-end">
            <RatingIcon onClick={() => setRating(1)} $isSelected={rating === 1}/>
            <Text size="sm" color="secondary.900">
              Unsatisfied
            </Text>
          </Flex>
          <RatingIcon onClick={() => setRating(2)} $isSelected={rating === 2}/>
          <RatingIcon onClick={() => setRating(3)} $isSelected={rating === 3}/>
          <RatingIcon onClick={() => setRating(4)} $isSelected={rating === 4}/>
          <Flex direction="column">
            <RatingIcon onClick={() => setRating(5)} $isSelected={rating === 5}/>
            <Text size="sm" color="secondary.900">
              Pleased
            </Text>
          </Flex>
        </Flex>
        <Text fontWeight="bold" mb="4px">
          Let us know more about your experience (Optional)
        </Text>
        <Textarea
          resize="none"
          borderColor="secondary.1000"
          mb="24px"
        ></Textarea>
        <Flex gap="12px" justifyContent="flex-end">
          <Button colorScheme="citizen" variant="outline">
            Skip
          </Button>
          <Button
            colorScheme="citizen"
            onClick={() => setOffboardingModalOpened(true)}
          >
            Submit Feedback
          </Button>
        </Flex>
      </Tooltip>
      <OffboardingModal
        opened={offboardingModalOpened}
        onClose={() => setOffboardingModalOpened(false)}
      />
    </Box>
  );
}
