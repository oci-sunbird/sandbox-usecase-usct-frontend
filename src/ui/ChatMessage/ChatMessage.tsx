import { Avatar, Flex, Text } from "@chakra-ui/react";

interface IChatMessageProps {
  user: string;
  timestamp: number;
  content: string;
}

export default function ChatMessage({
  message,
}: {
  message: IChatMessageProps;
}) {
  return (
    <Flex
      gap="16px"
      flexDirection={message.user === "GovStack Person" ? "row-reverse" : "row"}
    >
      <Avatar h="48px" w="48px" />
      <Flex
        border="2px solid black"
        borderRadius="8px"
        minH="112px"
        w="40%"
        direction="column"
      >
        <Flex p="24px" h="100%">
          {message.content}
        </Flex>
        <Flex p="8px 14px" justifyContent="flex-end">
          {message.user}
        </Flex>
      </Flex>
      <Flex alignSelf="center" direction="column">
        <Text>{Intl.DateTimeFormat("default").format(message.timestamp)}</Text>
        <Text textAlign="center">
          {Intl.DateTimeFormat("default", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }).format(message.timestamp)}
        </Text>
      </Flex>
    </Flex>
  );
}
