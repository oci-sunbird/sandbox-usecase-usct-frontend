import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ConsentIcon } from "../../assets/icons/consent.svg";
import { ReactComponent as DigitalRegistriesIcon } from "../../assets/icons/digital-registries.svg";
import { ReactComponent as InformationMediatorIcon } from "../../assets/icons/information-mediator.svg";
import { ReactComponent as MessagingIcon } from "../../assets/icons/messaging.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as PassportIcon } from "../../assets/icons/passport.svg";
import { ReactComponent as PaymentIcon } from "../../assets/icons/payments.svg";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh.svg";
import { ReactComponent as RegistrationIcon } from "../../assets/icons/registration.svg";
import { ReactComponent as SchedulingIcon } from "../../assets/icons/scheduling.svg";
import { ReactComponent as WorkflowIcon } from "../../assets/icons/workflow.svg";
import { colors } from "../../chakra-overrides/colors";
import {
  ActiveBuildingBlockContext,
  SimulationContext,
} from "../../routes/usct/USCT";
import { BUILDING_BLOCK } from "../../routes/usct/utils";
import BuildingBlock from "../Activity/BuildingBlock";
import DIAL from "../DIAL/DIAL";
import ScenarioHeader from "./ScenarioHeader";
import ScenarioView from "./ScenarioView";

const buildingBlockActivity = [
  { label: "Consent", icon: <ConsentIcon />, id: BUILDING_BLOCK.CONSENT },
  {
    label: "ID & Authentication",
    icon: <PassportIcon />,
    id: BUILDING_BLOCK.AUTHENTICATION,
  },
  {
    label: "Information Mediator",
    icon: <InformationMediatorIcon />,
    id: BUILDING_BLOCK.INFORMATION_MEDIATOR,
  },
  {
    label: "Digital Registries",
    icon: <DigitalRegistriesIcon />,
    id: BUILDING_BLOCK.DIGITAL_REGISTRIES,
  },
  { label: "Messaging", icon: <MessagingIcon />, id: BUILDING_BLOCK.MESSAGING },
  { label: "Payment", icon: <PaymentIcon />, id: BUILDING_BLOCK.PAYMENT },
  {
    label: "Registration",
    icon: <RegistrationIcon />,
    id: BUILDING_BLOCK.REGISTRATION,
  },
  {
    label: "Scheduling",
    icon: <SchedulingIcon />,
    id: BUILDING_BLOCK.SCHEDULING,
  },
  { label: "Workflow", icon: <WorkflowIcon />, id: BUILDING_BLOCK.WORKFLOW },
];

export default function ScenarioLayout({
  view,
  children,
}: {
  view: "mobile" | "desktop";
  children: React.ReactElement[] | React.ReactElement;
}) {
  const { activeBuildingBlocks } = useContext(ActiveBuildingBlockContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const { state, dispatch } = useContext(SimulationContext);

  return (
    <Flex h="100vh" position="relative">
      <Flex
        w={{ base: "100%", md: "calc(100% - 320px)" }}
        direction="column"
        position="relative"
      >
        <ScenarioHeader>
          <Text>
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
          clipPath="polygon(0 34%, 100% 0, 100% 100%, 0% 100%)"
          transform="skew(25)"
        />
        <SimpleGrid
          gridTemplateColumns="150px 1fr 150px"
          justifyContent="space-between"
          justifyItems="center"
          alignItems="center"
          gap="64px"
          maxW="1024px"
          w="100%"
          margin="0 auto"
          padding="0 64px"
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
        <DIAL />
      </Flex>
      <Flex
        h="100%"
        color={colors.secondary[0]}
        w="320px"
        backgroundColor="primary.900"
        position="absolute"
        right={0}
        top={0}
        flexShrink="0"
        transition="width 0.3s ease-in-out"
        direction="column"
        zIndex={1}
      >
        <IconButton
          position="absolute"
          left="-32px"
          top="0"
          w="32px"
          icon={<ConsentIcon />}
          aria-label="Expand sidepanel"
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
          <VStack mb="1rem">
            {buildingBlockActivity.map((buildingBlock) => (
              <BuildingBlock
                active={activeBuildingBlocks[buildingBlock.id]}
                label={buildingBlock.label}
                icon={buildingBlock.icon}
                key={buildingBlock.id}
              />
            ))}
          </VStack>
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
          <Divider color={colors.darkblue[300]} mb="1.5rem" />
          <Text size="sm">
            Generic Processes and interactions of Building Blocks. These are
            generic processes that are used in here can be used on various use
            cases.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
