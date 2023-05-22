import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh.svg";
import { colors } from "../../chakra-overrides/colors";
import { SimulationContext } from "../../routes/usct/USCT";
import DIAL from "../DIAL/DIAL";
import ScenarioHeader from "./ScenarioHeader";
import ScenarioView from "./ScenarioView";

export default function ScenarioLayout({
  view,
  children,
}: {
  view: "mobile" | "desktop";
  children: React.ReactElement[] | React.ReactElement;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { state, dispatch } = useContext(SimulationContext);

  return (
    <Flex h="100vh" position="relative">
      <Flex w="calc(100% - 320px)" direction="column" position="relative">
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
              to="./"
              aria-label="Previous step"
              icon={<ArrowBackIcon />}
            />
            <IconButton
              as={Link}
              to="./"
              aria-label="Start over"
              icon={<RefreshIcon />}
            />
            <IconButton
              as={Link}
              to="./"
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
        <Flex mt="22px" justifyContent="center" gap="16px" p="8px">
          <Text>GovStack 2023</Text>
          <Text>FAQ</Text>
          <Text>Terms of usage</Text>
          <Text>Get in touch</Text>
        </Flex>
        <DIAL />
      </Flex>
      <Flex
        h="100%"
        color={colors.secondary[0]}
        w={isExpanded ? "960px" : "320px"}
        backgroundColor="primary.900"
        position="absolute"
        right={0}
        top={0}
        flexShrink="0"
        transition="width 0.3s ease-in-out"
        direction="column"
        zIndex={1}
      >
        <Flex
          boxSizing="border-box"
          p="8px 24px"
          gap="8px"
          h="100%"
          direction="column"
          overflowY="scroll"
        >
          <Heading size="md">Lorem ipsum dolor sit amet consectetur.</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            itaque atque dolor fugiat at molestias ullam corporis vel fuga ipsam
            laboriosam eius! In unde eum consectetur numquam! Hic, aliquam
            adipisci.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            reiciendis unde aperiam inventore consequatur blanditiis!
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe?
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
