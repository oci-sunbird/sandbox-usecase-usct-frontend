import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { colors } from '../../../chakra-overrides/colors';

interface IActionProps {
  disabled?: boolean;
  to?: string;
  icon?: React.ReactElement;
  title: string;
  description: string;
  buttonText: string;
}

export function Action(props: IActionProps) {
  const { disabled, to, icon, title, description, buttonText } = props;
  return (
    <Flex
      direction="column"
      gap="20px"
      border={`2px solid ${colors.secondary[1000]}`}
      padding="24px"
      borderRadius="8px"
    >
      <Flex alignItems="center">
        <Box
          w="68px"
          h="68px"
          borderRadius="8px"
          backgroundColor={colors.primary[900]}
          mr="34px"
          flexShrink="0"
        >
          {icon}
        </Box>
        <Box>
          <Text mb="12px">{title}</Text>
          <Text>{description}</Text>
        </Box>
      </Flex>
      <Button as={Link} to={to} colorScheme="admin">
        {buttonText}
      </Button>
    </Flex>
  );
}
