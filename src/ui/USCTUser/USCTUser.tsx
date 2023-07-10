import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { colors } from '../../chakra-overrides/colors';
import { EUserType } from '../../routes/usct/USCT';

export function USCTUser({ userType }: { userType: EUserType | null }) {
  if (userType === EUserType.CITIZEN) {
    return (
      <Flex
        backgroundColor={colors.secondary[600]}
        borderRadius="36px"
        justifyContent="center"
        alignItems="center"
        padding={{ base: '12px', lg: '11px 48px' }}
        marginRight="36px"
      >
        <Flex gap="8px" alignItems="center">
          <Avatar h="32px" w="32px" />
          <Box display={{ base: 'none', lg: 'block' }}>
            <Text size="sm" color={colors.secondary[0]}>
              Applicant
            </Text>
            <Text size="sm" color={colors.secondary[0]}>
              ID: 1234567810
            </Text>
          </Box>
        </Flex>
      </Flex>
    );
  }
  if (userType === EUserType.CITIZEN_SERVANT) {
    return (
      <Flex
        paddingRight={{ base: '8px', lg: '64px' }}
        alignItems="center"
        gap="24px"
      >
        <IconButton
          aria-label="notifications"
          backgroundColor="transparent"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.387 11.9999C19.198 15.7989 21 16.9999 21 16.9999H3C3 16.9999 6 14.9999 6 7.99992C6.00001 7.12737 6.19033 6.26532 6.5577 5.47387C6.92506 4.68242 7.46062 3.98062 8.12705 3.4174C8.79347 2.85417 9.57472 2.44308 10.4163 2.21277C11.2579 1.98247 12.1397 1.9385 13 2.08392"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 2V8"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 5H15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="18" cy="5" r="4" fill="#FF0000" />
            </svg>
          }
        />
        <Flex gap="8px" alignItems="center" height="100%">
          <Avatar h="32px" w="32px" />
          <Box>
            <Text fontSize="14px" fontWeight="600" lineHeight="20px">
              Lorem Ipsum
            </Text>
            <Text fontSize="10px" fontWeight="400" lineHeight="20px">
              Work ID: 1234567810
            </Text>
          </Box>
        </Flex>
      </Flex>
    );
  }
  return null;
}
