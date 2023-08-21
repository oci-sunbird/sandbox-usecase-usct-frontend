import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { colors } from '../../../chakra-overrides/colors';
import { Authentication, getRole } from '../utils/token';

interface IActionProps {
  disabled?: boolean;
  to?: string;
  icon?: React.ReactElement;
  title: string;
  description: string;
  buttonText: string;
  allowedRoles?: Authentication.Scope[];
}

export function Action(props: IActionProps) {
  const { to, icon, title, description, buttonText, allowedRoles = [] } = props;
  const disabled = !allowedRoles.some((role) => role === getRole());
  return (
    <Flex
      direction="column"
      gap="20px"
      border={`2px solid ${colors.secondary[1000]}`}
      padding="24px"
      borderRadius="8px"
      paddingBottom={disabled ? '4px' : 'auto'}
    >
      <Flex>
        <Flex
          w="68px"
          h="68px"
          mt="8px"
          borderRadius="8px"
          backgroundColor={
            disabled ? colors.secondary[400] : colors.primary[900]
          }
          mr="34px"
          flexShrink="0"
          color="white"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Flex>
        <Box>
          <Text fontWeight="bold" mb="12px">{title}</Text>
          <Text>{description}</Text>
        </Box>
      </Flex>
      <Box mt="auto" w="100%">
        <Button
          w="100%"
          as={Link}
          to={disabled ? '' : to}
          disabled={disabled}
          colorScheme={disabled ? 'disabled' : 'admin'}
        >
          {disabled ? 'Disabled' : buttonText}
        </Button>
        {disabled && (
          <Text size="sm" textAlign="center" color={colors.secondary[900]}>
            You do not have access
          </Text>
        )}
      </Box>
    </Flex>
  );
}
