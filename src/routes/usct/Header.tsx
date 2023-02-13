import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding="32px 60px"
    >
      <Box textAlign="center">
        <Heading fontSize="10px">Open Island</Heading>
        <Text fontSize="10px">Ministry of Social Welfare</Text>
        <Text fontSize="10px">- - - -</Text>
      </Box>
      <Flex gap="8px" alignItems="center">
        <Avatar h="32px" w="32px" />
        <Box>
          <Text fontSize="14px" fontWeight="600">
            Thomas Anderson
          </Text>
          <Text fontSize="10px" fontWeight="400">
            ID: 1234567810
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
