import { ReactComponent as BankNoteIcon } from '@assets/icons/banknote.svg';
import { ReactComponent as HeartShakeIcon } from '@assets/icons/heartshake.svg';
import { ReactComponent as MailOpenIcon } from '@assets/icons/mail-open.svg';
import { ReactComponent as PieChartIcon } from '@assets/icons/pie-chart.svg';
import { ReactComponent as UserPlusIcon } from '@assets/icons/user-plus.svg';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Authentication } from '../utils/token';
import { Action } from './Action';
export function Dashboard() {
  return (
    <>
      <Box mb="60px">
        <Heading size="sm">Social Welfare Program</Heading>
        <Heading>Unconditional Social Cash Transfer</Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, lg: 2 }} rowGap="20px" columnGap="40px">
        <Action
          title="Enrollment / Candidate List"
          buttonText="Candidate Database"
          description="Access the candidate list for enrollment into the program."
          icon={<HeartShakeIcon />}
          to="./candidates"
          allowedRoles={[Authentication.Scope.ROLE_ENROLLMENT_OFFICER]}
        />
        <Action
          title="Register"
          buttonText="Lorem ipsum"
          icon={<UserPlusIcon />}
          description="Access the registration process for new possible beneficiaries into the program."
        />
        <Action
          title="Beneficiary List"
          icon={<BankNoteIcon />}
          buttonText="Beneficiary Database"
          description="Access the active beneficiary list of the program for payment"
          to="./beneficiaries"
          allowedRoles={[Authentication.Scope.ROLE_PAYMENT_OFFICER]}
        />
        <Action
          title="Respons to queries"
          buttonText="Lorem ipsum"
          description="Respond to beneficiary or stakeholder queries related to the program"
          icon={<MailOpenIcon />}
        />
        <Action
          title="Monitor Program Performance"
          buttonText="Lorem ipsum"
          description="Track and report program performance metrics. Identify trends or issues."
          icon={<PieChartIcon />}
        />
      </SimpleGrid>
    </>
  );
}
