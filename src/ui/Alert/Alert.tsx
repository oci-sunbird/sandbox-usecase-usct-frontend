import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface IAlertProps {
  icon: JSX.Element;
  content: JSX.Element;
  actions: JSX.Element;
}

export default function Alert({ icon, content, actions }: IAlertProps) {
  return (
    <Flex
      alignItems="center"
      border="1px solid var(--chakra-colors-primary-900)"
      borderRadius="8px"
      padding="18px 36px"
      gap="44px"
    >
      <Flex
        flexShrink="0"
        borderRadius="100%"
        alignItems="center"
        justifyContent="center"
        w="64px"
        h="64px"
        backgroundColor="primary.900"
        color="white"
      >
        {icon}
      </Flex>
      <Box flexGrow={1}>{content}</Box>
      {actions}
    </Flex>
  );
}
