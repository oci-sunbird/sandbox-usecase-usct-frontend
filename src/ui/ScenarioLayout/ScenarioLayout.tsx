import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import BuildingBlockActivity from '@ui/Activity/BuildingBlockActivity';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh.svg';
import { colors } from '../../chakra-overrides/colors';
import { ContextualHelpContext } from '../../routes/usct/ContextualHelpContext';
import { SimulationContext } from '../../routes/usct/USCT';
import ContextualHelp from './ContextualHelp';
import ScenarioHeader from './ScenarioHeader';
import ScenarioView from './ScenarioView';
import { ReactComponent as UploadIcon } from '@assets/icons/upload.svg';
import { ReactComponent as LightbulbIcon } from '@assets/icons/lightbulb.svg';
import { ShepherdTourContext } from 'react-shepherd'

export default function ScenarioLayout({
  view,
  children,
}: {
  view: 'mobile' | 'desktop';
  children: React.ReactElement[] | React.ReactElement;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { activeLetter, activeContent } = useContext(ContextualHelpContext);
  const { state, dispatch } = useContext(SimulationContext);
  const tour = useContext(ShepherdTourContext);

  return (
    <Flex h="100vh" position="relative" w="100vw" overflowX="hidden">
      <Flex
        w={{ base: '100%', lg: 'calc(100% - 320px)' }}
        direction="column"
        position="relative"
      >
        <ScenarioHeader>
          <Text size={{ base: 'sm', md: 'md' }}>
            <strong>Use Case Simulation</strong> Unconditional Social Cash
            Transfer
          </Text>
        </ScenarioHeader>
        <ScenarioView>{children}</ScenarioView>
        <Box
          w="100%"
          h="40vh"
          position="absolute"
          bottom="0"
          zIndex="-1"
          backgroundColor={colors.primary[900]}
          clipPath={{ md: 'polygon(0 34%, 100% 0, 100% 100%, 0% 100%)' }}
          transform={{ md: 'skew(25)' }}
        />
        <SimpleGrid
          gridTemplateColumns="150px 1fr"
          justifyContent="space-between"
          justifyItems="center"
          alignItems="center"
          gap={{ base: '8px', md: '64px' }}
          maxW="1024px"
          w="100%"
          margin="0 auto"
          padding={{ base: '0 8px', md: '0 64px' }}
        >
          <Flex w="100%" gap="0.5rem">
            <IconButton
              as={Link}
              to={state.previousStep}
              aria-label="Previous step"
              icon={<ArrowBackIcon />}
            />
            <IconButton
              as={Link}
              to="./case-management"
              aria-label="Start over"
              icon={<RefreshIcon />}
            />
            <IconButton
              as={Link}
              to={state.nextStep}
              aria-label="Next step"
              icon={<ArrowForwardIcon />}
            />
          </Flex>
          <Box w="100%">
            <Text color={colors.theme.light} fontWeight={700} fontSize={12}>
              {state.description.title}
            </Text>
            <Text color={colors.theme.light} fontSize={12}>
              {state.description.subtitle}
            </Text>
          </Box>
        </SimpleGrid>
        <Flex
          mt="22px"
          justifyContent="center"
          display={{ base: 'none', md: 'flex' }}
          gap="16px"
          p="8px"
          color={colors.secondary[500]}
        >
          <Text size="sm">
            GovStack 2023 - this is a frontend only simulation
          </Text>
          <Text size="sm">FAQ</Text>
          <Text size="sm">Terms of usage</Text>
          <Text size="sm">Get in touch</Text>
        </Flex>
        {/* <DIAL /> */}
      </Flex>
      <Flex
        h="100%"
        color={colors.secondary[0]}
        w="320px"
        backgroundColor="primary.900"
        position={{ base: 'absolute', lg: 'relative' }}
        right={{ base: isExpanded ? '0' : '-320px', lg: '0' }}
        top={0}
        flexShrink="0"
        transition="width 0.3s ease-in-out"
        direction="column"
        zIndex={1}
      >
        <IconButton
          display={{ base: 'block', lg: 'none' }}
          position="absolute"
          left="-32px"
          top="0"
          w="32px"
          icon={isExpanded ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          borderRadius="0"
          colorScheme="admin"
          aria-label="Expand sidepanel"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          transition="right 0.3s ease-in-out"
        ></IconButton>
        <Flex
          boxSizing="border-box"
          p="24px"
          h="100%"
          direction="column"
          overflowY="scroll"
        > 
          <Heading mb="0.75rem" size="sm" textAlign="center" variant="caps">
            BUILDING BLOCK ACTIVITY
          </Heading>
          <Text size="sm" mb="1rem">
            Building Blocks are enterprise-ready, reusable software components
            providing functionalities across sectors and use cases.
          </Text>
          <BuildingBlockActivity
            activeContent={activeContent}
            activeLetter={activeLetter}
          />
          <Flex justifyContent="space-around" mb="1rem">
            <Flex alignItems="center">
              <Box
                h="8px"
                w="8px"
                mr="0.75rem"
                borderRadius="100%"
                backgroundColor={colors.secondary[0]}
              />
              <Text size="sm">Active</Text>
            </Flex>
            <Flex alignItems="center">
              <Box mr="0.75rem">
                <MinusIcon />
              </Box>
              <Text size="sm">Inactive</Text>
            </Flex>
          </Flex>
          <Divider
            borderColor={colors.darkblue[300]}
            mr="-24px"
            ml="-24px"
            w="calc(100% + 48px)"
            mb="1rem"
          />
          <ContextualHelp />
          <Divider
            borderColor={colors.darkblue[300]}
            mt="auto"
            mr="-24px"
            ml="-24px"
            w="calc(100% + 48px)"
            mb="24px"
          />
          <Flex px="8px" justifyContent="space-between">
            <Button leftIcon={<UploadIcon />} variant="ghost" color="white">SHARE</Button>
            <Button leftIcon={<LightbulbIcon />} variant="ghost" color="white" onClick={tour?.start}>HELP</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
