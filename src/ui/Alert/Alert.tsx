import { Box, Flex } from "@chakra-ui/react";

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
      direction={{ sm: "column", xl: "row" }}
    >
      <Flex
        gap={{ sm: "22px", lg: "44px" }}
        alignItems="center"
        w={{ sm: "100%", xl: "auto" }}
        justifyContent={{ sm: "space-between", xl: "flex-start" }}
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
