import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TextEditor from "../../../ui/TextEditor/TextEditor";

export default function StartNewConversation() {
  return (
    <Flex direction="column" w="100%" gap="20px">
      <Heading>Start a New Conversation</Heading>
      <Text>
        <strong>Topic</strong>
      </Text>
      <Text>
        Please select the topic you would like to discuss. Lorem ipsum.
      </Text>
      <Flex gap="20px">
        <Box
          h="157px"
          borderRadius="8px"
          p="20px"
          w="100%"
          border="2px solid black"
        >
          <Heading fontSize="14px">Payment Not Received</Heading>
          <Text fontSize="10px">Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box
          h="157px"
          borderRadius="8px"
          p="20px"
          w="100%"
          color="gray"
          border="1px solid gray"
        >
          <Heading fontSize="14px">Change Payment Method</Heading>
          <Text fontSize="10px">Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box
          h="157px"
          borderRadius="8px"
          p="20px"
          w="100%"
          color="gray "
          border="1px solid gray"
        >
          <Heading fontSize="14px">Benefits Questions</Heading>
          <Text fontSize="10px">Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box
          h="157px"
          borderRadius="8px"
          p="20px"
          w="100%"
          border="1px solid black"
        >
          <Heading fontSize="14px">Other</Heading>
          <Text fontSize="10px">Lorem ipsum dolor sit amet.</Text>
        </Box>
      </Flex>
      <Text>
        <strong>Message</strong>
      </Text>
      <Text>Please explain the lorem ipsum</Text>
      <TextEditor />
      <Flex justifyContent="flex-end">
        <Button colorScheme="citizen" as={Link} to="../case-management">
          Send message
        </Button>
      </Flex>
    </Flex>
  );
}
