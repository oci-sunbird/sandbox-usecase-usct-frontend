import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SimulationContext } from '../../routes/usct/USCT';
import { EUserType } from '../../routes/usct/ContextualHelpUtils';
import { ReactComponent as ApplicantIcon } from '@assets/icons/people_person.svg';
import { ReactComponent as CivilServantIcon } from '@assets/icons/user.svg';

const UserIcon = ({
  type,
  variant,
}: {
  type: EUserType;
  variant: 'foreground' | 'background';
}) => {
  const icon = {
    [EUserType.CITIZEN]: ApplicantIcon,
    [EUserType.CITIZEN_SERVANT]: CivilServantIcon,
  };

  const bg = {
    [EUserType.CITIZEN]: 'green.600',
    [EUserType.CITIZEN_SERVANT]: 'primary.700',
  };

  const foregroundIconSize = useBreakpointValue({
    base: { height: '22px', width: '22px' },
    '2xl': { height: '30px', width: '30px' },
  });

  const backgroundIconSize = useBreakpointValue({
    base: { height: '16px', width: '16px' },
    '2xl': { height: '22px', width: '22px' },
  });

  if (variant === 'foreground') {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        height={{ base: "40px", '2xl': "48px"}}
        width={{ base: "40px", '2xl': "48px"}}
        borderRadius="50%"
        color="theme.light"
        bg={bg[type]}
        position="absolute"
        bottom="0px"
        right="0px"
      >
        {icon[type](foregroundIconSize!)}
      </Flex>
    );
  } else {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        height={{ base: "32px", '2xl': "40px"}}
        width={{ base: "32px", '2xl': "40px"}}
        borderRadius="50%"
        color="theme.dark"
        bg="secondary.500"
      >
        {icon[type](backgroundIconSize!)}
      </Flex>
    );
  }
};

export default function ViewInfo() {
  const { state } = useContext(SimulationContext);

  const userType = state.userType;

  return (
    <Flex
      alignItems="center"
      gap="16px"
      padding={{ base: '12px 24px', '2xl': "16px 32px"}}
      borderRadius="0px 0px 8px 8px"
      bg="secondary.50"
    >
      <Box paddingBottom={{ base: '10px', '2xl':"14px"}} paddingRight={{ base: '34px', '2xl': "38px"}} position="relative">
        <UserIcon
          type={
            userType === EUserType.CITIZEN_SERVANT
              ? EUserType.CITIZEN
              : EUserType.CITIZEN_SERVANT
          }
          variant="background"
        />
        <UserIcon type={userType ?? EUserType.CITIZEN} variant="foreground" />
      </Box>

      <Box>
        <Text fontWeight="700" size="xs">
          {userType === EUserType.CITIZEN ? 'APPLICANT' : 'CIVIL SERVANT'}
        </Text>
        <Text size="xs">CURRENT VIEW</Text>
      </Box>
    </Flex>
  );
}
