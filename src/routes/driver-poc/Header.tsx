import { ReactComponent as UserIcon } from '@assets/icons/user.svg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../chakra-overrides/colors';
import { Authentication, getRole } from './utils/token';
import { useAuthentication } from './utils/useAuthentication';

const userData = {
  ROLE_PAYMENT_OFFICER: {
    name: 'Susie May',
    role: 'Payment Officer',
  },
  ROLE_ENROLLMENT_OFFICER: {
    name: 'Max Bob',
    role: 'Enrollment Officer',
  },
};

export default function Header() {
  const { logout, isAuthenticated } = useAuthentication();
  const handleLogOut = () => {
    logout();
  };

  return (
    <Flex
      padding="21px 120px"
      borderBottom={`1px solid ${colors.secondary[1000]}`}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex gap="12px" alignItems="center">
        <Image src="/digital-island-logo.png" />
        <Box>
          <Text size="sm" variant="bold">
            Digital Island
          </Text>
          <Text size="xs">SRIS</Text>
        </Box>
      </Flex>
      {isAuthenticated() && (
        <Flex gap="12px" alignItems="center" justifyContent="space-between">
          <Menu>
            <MenuButton
              as={Button}
              height="auto"
              padding="8px 16px"
              rightIcon={<ChevronDownIcon />}
            >
              <Flex gap="12px" alignItems="center">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  color={colors.secondary[0]}
                  w="32px"
                  h="32px"
                  borderRadius="100%"
                  padding="4px"
                  flexShrink={0}
                  backgroundColor={colors.secondary[1000]}
                >
                  <UserIcon />
                </Flex>
                <Box textAlign="left">
                  <Text size="sm" variant="bold">
                    {userData[getRole() as Authentication.Scope].name}
                  </Text>
                  <Text size="xs">
                    {userData[getRole() as Authentication.Scope].role}
                  </Text>
                </Box>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}
    </Flex>
  );
}
