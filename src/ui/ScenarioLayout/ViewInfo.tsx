import { Box, Flex, Text } from '@chakra-ui/react';
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

  if (variant === 'foreground') {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        height="48px"
        width="48px"
        borderRadius="50%"
        color="theme.light"
        bg={bg[type]}
        position="absolute"
        bottom="0px"
        right="0px"
      >
        {icon[type]({ height: '30px', width: '30px' })}
      </Flex>
    );
  } else {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        height="40px"
        width="40px"
        borderRadius="50%"
        color="theme.dark"
        bg="secondary.500"
      >
        {icon[type]({ height: '22px', width: '22px' })}
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
      padding="16px 32px"
      borderRadius="0px 0px 8px 8px"
      bg="secondary.50"
    >
      <Box paddingBottom="14px" paddingRight="38px" position="relative">
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
        <Text fontWeight="700" fontSize="12px">
          {userType === EUserType.CITIZEN ? 'APPLICANT' : 'CIVIL SERVANT'}
        </Text>
        <Text fontSize="12px">CURRENT VIEW</Text>
      </Box>
    </Flex>
  );
}
