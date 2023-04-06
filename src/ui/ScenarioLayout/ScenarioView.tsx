import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function ScenarioView({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <Flex
      w="100%"
      height="100%"
      direction="column"
      p="16px 64px 32px 64px"
      flexGrow="1"
      alignItems="center"
      overflow="auto"
    >
      <Flex w="100%" h="100%" direction="column" maxW="1024px">
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
              backgroundColor="black.900"
            ></Box>
            <Box
              borderRadius="100%"
              height="16px"
              width="16px"
              backgroundColor="black.500"
            ></Box>
            <Box
              borderRadius="100%"
              height="16px"
              width="16px"
              backgroundColor="black.300"
            ></Box>
          </Flex>
          <Flex
            h="32px"
            borderRadius="4px"
            w="100%"
            backgroundColor="black.0"
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
