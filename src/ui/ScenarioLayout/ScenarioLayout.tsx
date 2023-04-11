import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Progress,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useContext, useState } from "react";
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
        <SimpleGrid
          gridTemplateColumns="150px 1fr 150px"
          justifyContent="space-between"
          justifyItems="center"
          gap="64px"
          maxW="1024px"
          w="100%"
          margin="0 auto"
          padding="0 64px"
        >
          <Box w="100%">
            {/* <Flex
              w="48px"
              h="48px"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
              flexShrink="0"
              backgroundColor={colors.secondary[900]}
            >
              {state.userType === EUserType.CITIZEN_SERVANT ? (
                <LandmarkIcon />
              ) : (
                <HomeIcon />
              )}
            </Flex> */}
          </Box>
          <Box w="100%">
            <Progress
              colorScheme="admin"
              isAnimated
              value={!state.progress ? 1 : state.progress}
            ></Progress>
            <Flex justifyContent="space-between">
              <Text fontWeight={700} fontSize={12}>
                {state.description.title}
              </Text>
              <Text fontWeight={700} fontSize={12}>
                {state.progress} %
              </Text>
            </Flex>
            <Text fontSize={12}>{state.description.subtitle}</Text>
          </Box>
          <Box justifySelf="flex-end" w="100%" flexShrink="0">
            <Checkbox
            colorScheme="citizen"
              onChange={(e) =>
                dispatch({
                  type: "SET_OVERLAYS",
                  ...state,
                  overlays: e.target.checked,
                })
              }
            >
              hide all overlays
            </Checkbox>
          </Box>
        </SimpleGrid>
        <Flex mt="22px" justifyContent="center" gap="16px" p="8px">
          <Text>GovStack 2023</Text>
          <Text>FAQ</Text>
          <Text>Terms of usage</Text>
          <Text>Get in touch</Text>
        </Flex>
        <Box position="absolute" left="0" bottom="0">
          <DIAL />
        </Box>
      </Flex>
      <Flex
        h="100%"
        color="black.0"
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
        {/* <Box h="62px" padding="16px 24px">
          <IconButton
            backgroundColor="transparent"
            color="black.0"
            aria-label="expand contextual menu"
            fontSize="32px"
            w="32px"
            h="32px"
            minW="32px"
            padding="0"
            margin="0"
            icon={isExpanded ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </Box> */}
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
