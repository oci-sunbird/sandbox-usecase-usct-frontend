import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import FakeLoader from '@ui/FakeLoader/FakeLoader';
import { useContext, useEffect } from 'react';
import { Link, useNavigation, useSearchParams } from 'react-router-dom';
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from '../USCT';
import { BUILDING_BLOCK } from '../utils';
import { ReactComponent as FileWarningIcon } from '@assets/icons/file-warning.svg';
import Tooltip from '@ui/Tooltip/Tooltip';

const getConfig = (done: boolean) => {
  if (done) {
    return {
      description: {
        title: 'PHASE 2 - ENROLMENT',
        subtitle: 'CITIZEN REVIEWS ELIGIBILITY STATUS',
      },
      previousStep: '../review-candidate/2895379235?state=done',
      nextStep: '../enrolment',
    };
  } else {
    return {
      description: {
        title: 'PHASE 1 - ELIGIBILITY',
        subtitle: 'CITIZEN CHECKS THE BENEFICIARY PROGRAM',
      },
      previousStep: '../authorise-citizen',
      nextStep: '../personal',
    };
  }
};

export default function Info() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useContext(SimulationContext);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch({
      type: 'SET_ALL',
      ...state,
      userType: EUserType.CITIZEN,
      ...getConfig(!!searchParams.get('done')),
      userAuthorized: true,
    });
  }, [location]);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: false,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: false,
      [BUILDING_BLOCK.PAYMENT]: false,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: true,
    });
  }, []);

  return (
    <FakeLoader
      label="CHANGING PERSPECTIVE TO APPLICANT"
      override={!!searchParams.get('done')}
    >
      <Flex
        mt="128px"
        gap={{ sm: '20px', lg: '125px' }}
        direction={{ sm: 'column', lg: 'row' }}
      >
        <Box>
          <Box marginBottom="40px">
            <Heading>Social Welfare Progam:</Heading>
            <Heading marginBottom="20px">
              Unconditional Social Cash Transfer
            </Heading>
            <Text>
              Unconditional Social Cash Transfer helps families meet their basic
              needs for well-being and safety and serves as their path to
              self-sufficiency. Unconditional Social Cash Transfer program
              provides temporary cash benefits and supportive services to the
              neediest families.
            </Text>
          </Box>
          <Accordion>
            <AccordionItem>
              <Heading variant="h2" size="md">
                <AccordionButton style={{ font: 'inherit' }} px="0">
                  <Box as="span" flex="1" textAlign="left">
                    How does it work?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4} px="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Heading variant="h2" size="md">
                <AccordionButton style={{ font: 'inherit' }} px="0">
                  <Box as="span" flex="1" textAlign="left">
                    Eligibility and Requirements
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4} px="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Heading variant="h2" size="md">
                <AccordionButton style={{ font: 'inherit' }} px="0">
                  <Box as="span" flex="1" textAlign="left">
                    Similar Programs
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4} px="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Flex
          direction="column"
          gap="20px"
          width={{ lg: '25%' }}
          flexShrink="0"
        >
          <Tooltip
            letter="A"
            letterPosition="right-center"
            display="flex"
            flexDirection="column"
            gap="16px"
          >
            <Flex gap="8px">
              <FileWarningIcon />
              Your Eligibility
            </Flex>
            {searchParams.get('done') ? (
              <>
                <Text>
                  <strong>You are eligible</strong> for Unconditional Social
                  Cash Transfer Program!
                </Text>
                <Text>
                  Please check your enrolment status from enrolment page.
                </Text>
                <Button as={Link} to="../enrolment" colorScheme="citizen">
                  Enrolment
                </Button>
              </>
            ) : (
              <>
                <Text>
                  There is <strong>not enough information</strong> to decide
                  your eligibility for this program
                </Text>
                <Text>
                  Please review your information and provide missing information
                  if needed.
                </Text>
                <Button colorScheme="citizen" to="../personal" as={Link}>
                  Review
                </Button>
              </>
            )}
          </Tooltip>
          {!!searchParams.get('done') && (
            <Tooltip letter="B">
              <Button
                w="100%"
                colorScheme="citizen"
                variant="outline"
                as={Link}
                to="../personal?done=true"
              >
                My Information
              </Button>
            </Tooltip>
          )}
        </Flex>
      </Flex>
    </FakeLoader>
  );
}
