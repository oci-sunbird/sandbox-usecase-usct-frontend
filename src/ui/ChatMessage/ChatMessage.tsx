import { Avatar, Flex, Text } from '@chakra-ui/react';
import { colors } from '../../chakra-overrides/colors';

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
      flexDirection={message.user === 'Applicant' ? 'row-reverse' : 'row'}
    >
      <Avatar
        h={{ base: '24px', md: '48px' }}
        w={{ base: '24px', md: '48px' }}
      />
      <Flex
        border="2px solid black"
        borderRadius="8px"
        minH="112px"
        w={{ base: '75%', md: '40%' }}
        direction="column"
        backgroundColor={
          message.user === 'Civil Servant'
            ? colors.secondary[100]
            : colors.secondary[0]
        }
      >
        <Flex p="24px" h="100%">
          {message.content}
        </Flex>
        <Flex p="8px 14px" justifyContent="flex-end">
          {message.user}
        </Flex>
      </Flex>
      <Flex alignSelf="center" direction="column">
        <Text size="sm" variant="caps">
          {Intl.DateTimeFormat('default').format(message.timestamp)}
        </Text>
        <Text size="sm" variant="caps" textAlign="center">
          {Intl.DateTimeFormat('default', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }).format(message.timestamp)}
        </Text>
      </Flex>
    </Flex>
  );
}
