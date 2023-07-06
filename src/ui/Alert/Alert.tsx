import { Box, Flex } from '@chakra-ui/react';

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
      gap="14px"
      direction={{ base: 'column', xl: 'row' }}
      justifyContent={{ base: 'space-between' }}
    >
      <Flex
        gap={{ base: '22px', lg: '44px' }}
        alignItems="center"
        w={{ base: '100%', xl: 'auto' }}
        justifyContent={{ base: 'space-between', xl: 'flex-start' }}
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
      </Flex>
      {actions}
    </Flex>
  );
}
