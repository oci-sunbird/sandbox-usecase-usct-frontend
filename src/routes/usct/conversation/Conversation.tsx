import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import ChatMessage from '@ui/ChatMessage/ChatMessage';
import { useContext, useEffect } from 'react';
import { ContextualHelpContext } from '../ContextualHelpContext';
import { ContextualTitle } from '../ContextualHelpUtils';
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from '../USCT';
import { BUILDING_BLOCK } from '../utils';

const conversation = [
  {
    id: 'hdfhdrf5',
    timestamp: 1678891185842,
    content:
      'Would you please provide me more detail about my package information?',
    user: 'Applicant',
  },
  {
    id: 'hdf2hdrf5',
    timestamp: 1678891185842,
    content: `Dear beneficiary,
    As a recipient of our unconditional social cash transfer benefit package, you will receive a monthly bank payment of 1 234 Euro for six months, which will be paid at the start of each month. In addition, you can take advantage of a free online consultation for career assessment. The consultation date and location can be arranged over the phone.
    We hope that this benefit package will assist you and your family in meeting your basic needs and achieving your goals. If you have any further questions or concerns, please don't hesitate to contact us.
    Thank you for your time.`,
    user: 'Civil Servant',
  },
];

export default function Conversation() {
  const { state, dispatch } = useContext(SimulationContext);

  useEffect(() => {
    dispatch({
      type: 'SET_ALL',
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: 'CITIZEN FINALIZES THE CONVERSATION',
        subtitle: 'PRIMARY TASK',
      },
      nextStep: '../feedback',
      previousStep: '../active-program?state=done',
      userAuthorized: true,
    });
  }, []);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

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
      A: ContextualTitle.MESSAGING,
      B: ContextualTitle.PROGRAM_RELATED_INFORMATION,
    });
  }, []);

  return (
    <Flex direction="column" w="100%" gap="20px">
      <Flex justifyContent="space-between">
        <Heading>Lorem Ipsum #3779394</Heading>
        <Button colorScheme="citizen">Resolved</Button>
      </Flex>
      <Text>
        <strong>Conversation</strong>
      </Text>
      <Box>
        <Flex direction="column" gap="20px" mb="20px">
          {conversation.map((message) => {
            return <ChatMessage message={message} key={message.id} />;
          })}
        </Flex>
        <Box
          border="2px solid black"
          borderRadius="8px"
          w="100%"
          h="150px"
          backgroundColor="white"
        ></Box>
      </Box>
      <Flex direction="column" gap="20px">
        <Heading>Conversation Info</Heading>
        <Grid
          gridTemplateRows="repeat(4, min-content)"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="20px"
        >
          <Box>
            <Text fontWeight="600">Case Code</Text>
            <Text>#3779394</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Reason</Text>
            <Text>Payment Not Received</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Date Issued</Text>
            <Text>12.12.2022</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Last Update</Text>
            <Text>12.12.2022</Text>
          </Box>
        </Grid>
        <Flex justifyContent="flex-end">
          <Button colorScheme="citizen">Resolved</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
