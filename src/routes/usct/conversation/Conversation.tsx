import { Box, Button, Flex, Grid, Heading, Input, InputGroup, InputRightElement, Tag, TagLabel, Text, Textarea, color } from '@chakra-ui/react';
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
import { colors } from '../../../chakra-overrides/colors';
import { ReactComponent as SendMessageIcon } from '@assets/icons/send-message.svg';
import { Link } from 'react-router-dom';

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
        <Flex direction="column">
          <Heading>Conversation</Heading>
          <Text color={colors.secondary[700]}><strong>#3779394</strong></Text>
        </Flex>
        <Button
          as={Link}
          to="../feedback"
          colorScheme="citizen"
          w="10rem"
          h="2.5rem"
          backgroundColor={colors.citizen[600]}
          color={colors.secondary[0]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Resolved
        </Button>
      </Flex>
      <Box>
        <Flex direction="column" gap="20px" mb="20px">
          {conversation.map((message) => {
            return <ChatMessage message={message} key={message.id} />;
          })}
        </Flex>
        <InputGroup >
          <Textarea
            border="2px solid black"
            borderRadius="8px"
            w="100%"
            h="7.25rem"
            backgroundColor="white"
            isDisabled
            placeholder='-Disabled-'
            _placeholder={{ color: colors.secondary[900] }}
            fontSize="1.125rem"
          ></Textarea>
          <InputRightElement
            w="10rem"
            top="unset"
            bottom="16px"
            right="16px"
          >
            <Button
              color={colors.secondary[0]}
              backgroundColor={colors.secondary[400]}
              leftIcon={<SendMessageIcon color={colors.secondary[0]}/>}
            >
              Send Message
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Flex direction="column" gap="20px">
        <Heading as="h3" fontSize="1.125rem">Conversation Info</Heading>
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
            <Text fontWeight="600">Topic</Text>
            <Text>Package Information</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Date Issued</Text>
            <Text>01.01.2023</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Latest Update</Text>
            <Text>01.01.2023</Text>
          </Box>
        </Grid>
        <Flex justifyContent="flex-end">
          <Button
            as={Link}
            to="../feedback"
            colorScheme="citizen"
            w="10rem"
            h="2.5rem"
            backgroundColor={colors.citizen[600]}
            color={colors.secondary[0]}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Resolved
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
