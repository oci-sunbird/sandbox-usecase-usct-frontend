import { ReactComponent as BanknoteIcon } from '@assets/icons/banknote.svg';
import { ReactComponent as ChatIcon } from '@assets/icons/chat.svg';
import { ReactComponent as ArrowIcon } from '@assets/icons/chevron-right.svg';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Alert from '@ui/Alert/Alert';
import Timeline from '@ui/Timeline/Timeline';
import Tooltip from '@ui/Tooltip/Tooltip';
import { useContext, useEffect, useState } from 'react';
import ChatMessage from '../../../ui/ChatMessage/ChatMessage';
import TextEditor from '../../../ui/TextEditor/TextEditor';
import { ContextualHelpContext } from '../ContextualHelpContext';
import { ContextualTitle } from '../ContextualHelpUtils';
import BankInformation from '../personal/BankInformation';
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from '../USCT';
import { BUILDING_BLOCK } from '../utils';
import { bankData } from '../review-candidate/data';

const householdData = [
  {
    name: 'Ms Lorem Ipsum',
    personalCode: '12345678910',
    relation: 'Wife',
    dateOfBirth: '12.12.1975',
    reason: 'Data',
    needs: [],
  },
  {
    name: 'Ms Lorem Ipsum',
    personalCode: '12345678910',
    relation: 'Wife',
    dateOfBirth: '12.12.1975',
    reason: 'Data',
    needs: ['Hearing Support', 'Special Support'],
  },
  {
    name: 'Ms Lorem Ipsum',
    personalCode: '12345678910',
    relation: 'Wife',
    dateOfBirth: '12.12.1975',
    reason: 'Data',
    needs: ['Child Care', 'Financial Security'],
  },
  {
    name: 'Ms Lorem Ipsum',
    personalCode: '12345678910',
    relation: 'Wife',
    dateOfBirth: '12.12.1975',
    reason: 'Data',
    needs: ['Food', 'Health Care', 'Education'],
  },
];

const conversation = [
  {
    id: 'hdfhdrf5',
    timestamp: 1678891185842,
    content:
      'Would you please provide me more detail about my package information?',
    user: 'Applicant',
  },
];

const caseHistoryEvents = [
  {
    name: 'Case opened',
    date: '23.04.2017',
    info: '#97654321',
    completed: true,
  },
  {
    name: 'Informing the Beneficary',
    date: '23.04.2017',
    info: '#97654321',
    completed: true,
  },
];

export default function ReviewCase() {
  const [isInformed, setIsInformed] = useState(false);
  const { state, dispatch } = useContext(SimulationContext);
  const [citizen, setCitizen] = useState<any | null>(null);

  useEffect(() => {
    dispatch({
      type: 'SET_ALL',
      ...state,
      userType: EUserType.CITIZEN_SERVANT,
      description: {
        title: 'CIVIL SERVANT SENDS MESSAGE TO THE BENEFICIARY',
        subtitle: 'PRIMARY TASK',
      },
      nextStep: '../active-program?state=done',
      previousStep: '../case-list',
      userAuthorized: true,
    });
  }, []);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);
  const { setLetterContextualTitleMap } = useContext(ContextualHelpContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: false,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: true,
      [BUILDING_BLOCK.PAYMENT]: true,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: true,
      [BUILDING_BLOCK.SECURITY]: false,
    });
  }, []);

  useEffect(() => {
    setLetterContextualTitleMap({
      A: ContextualTitle.CASE_INFORMATION,
      B: ContextualTitle.MESSAGING,
      C: ContextualTitle.PERSONAL_INFO,
      D: ContextualTitle.PROGRAM_RELATED_INFORMATION,
      E: ContextualTitle.BANK_INFO,
    });
  }, []);

  return (
    <Flex direction="column">
      <Heading fontSize="24px" mb="20px">
        Case #3779394
      </Heading>

      <Tooltip letter="A" marginBottom="60px">
        <SimpleGrid columns={2} spacing="20px">
          <Flex direction="column">
            <Heading fontSize="16px">Status</Heading>
            <Text>Action Required</Text>
          </Flex>
          <Flex direction="column">
            <Heading fontSize="16px">Reason</Heading>
            <Text>Payment Not Received</Text>
          </Flex>
          <Flex direction="column">
            <Heading fontSize="16px">Social ID Code</Heading>
            <Text>123456789</Text>
          </Flex>
          <Flex direction="column">
            <Heading fontSize="16px">Date Issued</Heading>
            <Text>12.12.2022</Text>
          </Flex>
        </SimpleGrid>
      </Tooltip>

      <Heading fontSize="18px" mb="20px">
        Quick Actions
      </Heading>
      <Tooltip letter="B">
        <Text mb="20px">
          Quick actions steps are automatically created based on the "reason"
          the beneficiary selected. Please control beneficiaries message before
          using these actions.
        </Text>
        <Alert
          icon={<ChatIcon />}
          content={
            <Text>
              Automatic information to the payment provider <br /> regarding
              payment not received.
            </Text>
          }
          actions={
            <Flex direction="column" gap="12px" alignSelf="flex-end">
              <InputGroup color="secondary.600">
                <InputLeftElement>
                  <ArrowIcon />
                </InputLeftElement>
                <Input placeholder="#37 - Package Information" />
              </InputGroup>
              <Button colorScheme="admin">Send Message</Button>
            </Flex>
          }
        ></Alert>
      </Tooltip>

      <Flex backgroundColor="#fafafa" p="30px 60px" m="30px -60px">
        <Tabs w="100%" isFitted variant="enclosed">
          <TabList>
            <Tab>Conversation</Tab>
            <Tab>Beneficiary Info</Tab>
          </TabList>
          <TabPanels>
            <TabPanel pl="0" pr="0" pt="20px">
              <Tooltip letter="B">
                <Flex direction="column" gap="20px" mb="20px">
                  {conversation.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                </Flex>
                <TextEditor />
              </Tooltip>
            </TabPanel>
            <TabPanel padding="0" pt="20px">
              <Flex direction="column" gap="20px">
                <Tooltip letter="C">
                  <Grid
                    w="100%"
                    gridTemplateRows="repeat(4, min-content)"
                    gridTemplateColumns="repeat(2, 1fr)"
                    gap="20px"
                  >
                    <Box>
                      <Text fontWeight="600">Name</Text>
                      <Text>{citizen?.fullName}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="600">Occupation</Text>
                      <Text>{citizen?.occupation}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="600">Personal ID Code</Text>
                      <Text>{citizen?.idCode}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="600">Home Address</Text>
                      <Text>{citizen?.fullAddress}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="600">Phone Number</Text>
                      <Text>{citizen?.phoneNumber}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="600">E-mail</Text>
                      <Text>{citizen?.email}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="600">Date of Birth</Text>
                      <Text>
                        {citizen?.dateOfBirth
                          ? new Date(citizen?.dateOfBirth).toLocaleDateString(
                              'et',
                              {
                                day: '2-digit',
                                year: 'numeric',
                                month: '2-digit',
                              }
                            )
                          : ''}
                      </Text>
                    </Box>
                  </Grid>
                </Tooltip>

                <Tooltip letter="D">
                  <Flex gap="20px">
                    <Flex w="100%" direction="column" gap="12px">
                      <Heading variant="h3" fontSize="18px">
                        Household needs
                      </Heading>
                      <Flex flexWrap="wrap" gap="4px">
                        {householdData
                          .flatMap((person) => person.needs)
                          .map((need) => {
                            return (
                              <Tag
                                key={need}
                                p="6px 12px"
                                mb="12px"
                                variant="outline"
                              >
                                <TagLabel color="secondary.1000">
                                  {need}
                                </TagLabel>
                              </Tag>
                            );
                          })}
                      </Flex>
                    </Flex>
                    <Flex w="100%" direction="column" gap="12px">
                      <Heading variant="h3" fontSize="18px">
                        Assigned Benefit Package
                      </Heading>
                      <Flex gap="20px">
                        <Flex
                          h="56px"
                          w="56px"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="8px"
                          border="2px solid var(--chakra-colors-secondary-1000)"
                        >
                          <BanknoteIcon color="var(--chakra-colors-secondary-1000)" />
                        </Flex>
                        <Text>
                          Monthly Package <br /> Monthly Cash help for families
                          in need.
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Tooltip>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Tooltip letter="D" mb="20px">
        <Heading fontSize="16px" mb="12px">
          Case Attachments
        </Heading>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>File name</Th>
                <Th>File type</Th>
                <Th>Description</Th>
                <Th>Uploaded</Th>
                <Th>Source</Th>
                <Th>icon</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>None</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Tooltip>
      <Tooltip letter="E" mb="60px">
        <BankInformation {...bankData}/>
      </Tooltip>
      <Heading size="sm" mb="20px">
        Case History
      </Heading>
      <Timeline
        icon={<></>}
        title="Case opened"
        events={caseHistoryEvents}
      ></Timeline>
    </Flex>
  );
}
