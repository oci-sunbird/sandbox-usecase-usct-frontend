import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

function ScenarioHeader({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  return (
    <SimpleGrid
      templateColumns="1fr 3fr 1fr"
      alignItems="center"
      padding="24px 12px"
    >
      <Button
        backgroundColor="transparent"
        border="2px solid #000"
        borderRadius="8px"
        justifySelf="flex-start"
        display="flex"
        alignItems="center"
        leftIcon={<ChevronLeftIcon fontSize="24px" />}
        as={Link}
        to="/dashboard"
      >
        Exit Scenario
      </Button>
      <Flex gap="16px" justifySelf="center" alignItems="center">
        <Image
          height="40px"
          width="auto"
          src="/govstack-sandbox-logo.svg"
          alt="govstack sandbox logo"
        />
        {children}
      </Flex>
    </SimpleGrid>
  );
}

function ScenarioView({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <Flex
      w="100%"
      height="100%"
      direction="column"
      p="48px"
      alignItems="center"
    >
      <Flex w="100%" h="100%" maxW="1024px" direction="column">
        <Flex
          alignItems="center"
          height="56px"
          gap="16px"
          borderTopRadius="8px"
          w="100%"
          backgroundColor="#f2f2f2"
          boxShadow="0px 0px 16px rgba(0, 0, 0, 0.25);"
          p="12px 16px"
          zIndex="1"
          boxSizing="border-box"
        >
          <Flex gap="6px">
            <Box
              borderRadius="100%"
              height="16px"
              width="16px"
              backgroundColor="#000"
            ></Box>
            <Box
              borderRadius="100%"
              height="16px"
              width="16px"
              backgroundColor="main.500"
            ></Box>
            <Box
              borderRadius="100%"
              height="16px"
              width="16px"
              backgroundColor="main.300"
            ></Box>
          </Flex>
          <Flex
            h="32px"
            borderRadius="4px"
            w="100%"
            backgroundColor="#fff"
            alignItems="center"
            textAlign="center"
            justifyContent="center"
          >
            <Text fontSize="12px" color="#9B9B9B;">
              openisland-ministry.govstack
            </Text>
          </Flex>
        </Flex>
        <Box
          boxShadow="0px 0px 16px rgba(0, 0, 0, 0.25);"
          h="100%"
          borderBottomRadius="16px"
          overflow="auto"
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}

export default function ScenarioLayout({
  view,
  children,
}: {
  view: "mobile" | "desktop";
  children: React.ReactElement[] | React.ReactElement;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Flex h="100vh" position="relative">
      <Flex w="calc(100% - 320px)" direction="column">
        <ScenarioHeader>
          <Text>
            <strong>Use Case Simulation</strong> Unconditional Social Cash
            Transfer
          </Text>
        </ScenarioHeader>
        <ScenarioView>{children}</ScenarioView>
      </Flex>
      <Flex
        h="100%"
        color="#fff"
        w={isExpanded ? "960px" : "320px"}
        backgroundColor="#000"
        position="absolute"
        right={0}
        top={0}
        flexShrink="0"
        transition="width 0.3s ease-in-out"
        direction="column"
        zIndex={1}
      >
        <Box h="62px" padding="16px 24px">
          <IconButton
            backgroundColor="transparent"
            color="#fff"
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
        </Box>
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
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            perferendis voluptates et nobis dolorum. Labore voluptate fugiat
            maxime ea doloremque repellendus incidunt quibusdam. At reiciendis
            aperiam doloremque repellendus amet enim natus ipsa!
          </Text>
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
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            perferendis voluptates et nobis dolorum. Labore voluptate fugiat
            maxime ea doloremque repellendus incidunt quibusdam. At reiciendis
            aperiam doloremque repellendus amet enim natus ipsa!
          </Text>
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
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            perferendis voluptates et nobis dolorum. Labore voluptate fugiat
            maxime ea doloremque repellendus incidunt quibusdam. At reiciendis
            aperiam doloremque repellendus amet enim natus ipsa!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
