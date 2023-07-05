import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import TextEditor from "../../../ui/TextEditor/TextEditor";
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from "../USCT";
import { BUILDING_BLOCK } from "../utils";
import ConversationTopic from "./ConversationTopic";

export default function StartNewConversation() {
  const { state, dispatch } = useContext(SimulationContext);
  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);
  const navigation = useNavigation();

  const [topicSelected, setTopicSelected] = useState(false);

  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: "PHASE 3 - PAYMENT",
        subtitle:
          "CITIZEN CHOOSES A TOPIC AND CHATS ABOUT THE BENEFITS OF THE PROGRAM",
      },
      nextStep: "../case-management?state=done",
      previousStep: "../active-program",
      userAuthorized: true,
    });
  }, []);
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
  return (
    <Flex direction="column" w="100%" gap="20px">
      <Heading>Start New Conversation</Heading>
      <Text>
        <strong>Topic</strong>
      </Text>
      <Text>
        Please select the topic you would like to discuss. Lorem ipsum.
      </Text>
      <Flex gap="20px">
        <ConversationTopic
          topic="Package Information"
          available
          onSelect={() => setTopicSelected(true)}
        />
        <ConversationTopic topic="Change Payment Method" />
        <ConversationTopic topic="Payment Not Received" />
        <ConversationTopic topic="Other" />
      </Flex>
      <Text>
        <strong>Message</strong>
      </Text>
      <Text>Please type additional message if it is needed.</Text>
      <TextEditor
        value={
          topicSelected
            ? "(Autofilled) Would you please provide me more detail about my package information?"
            : undefined
        }
      />
      <Flex justifyContent="flex-end">
        <Button
          colorScheme="citizen"
          as={Link}
          to="../case-management?done=true"
          isDisabled={!topicSelected}
          _disabled={{ bg: "secondary.400" }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
