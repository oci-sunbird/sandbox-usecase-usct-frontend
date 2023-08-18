import { ReactComponent as BankNoteIcon } from '@assets/icons/banknote.svg';
import { ReactComponent as HeartShakeIcon } from '@assets/icons/heartshake.svg';
import { ReactComponent as MailOpenIcon } from '@assets/icons/mail-open.svg';
import { ReactComponent as PieChartIcon } from '@assets/icons/pie-chart.svg';
import { ReactComponent as UserCOG } from '@assets/icons/user-cog.svg';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Authentication } from '../utils/token';
import { Action } from './Action';
export function Dashboard() {
  return (
    <>
      <Box mb="60px">
        <Heading size="sm">Social Welfare Program</Heading>
        <Heading>Unconditional Social Cash Transfer Program</Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, lg: 2 }} rowGap="20px" columnGap="40px">
        <Action
          title="Candidate Management"
          buttonText="Lorem ipsum"
          icon={<UserCOG />}
          description="Access the candidate list to modify candidate details or create new candidates."
        />
        <Action
          title="Respond to Queries"
          buttonText="Lorem ipsum"
          description="Respond to beneficiary or stakeholder queries related to the program."
          icon={<MailOpenIcon />}
        />
         <Action
          title="Enrollment / Candidate List"
          buttonText="Candidate Database"
          description="Access the candidate list for enrollment into the program."
          icon={<HeartShakeIcon />}
          to="./candidates"
          allowedRoles={[Authentication.Scope.ROLE_ENROLLMENT_OFFICER, Authentication.Scope.ROLE_REGISTRY_ADMINISTRATION]}
        />
        <Action
          title="Monitor Program Performance"
          buttonText="Lorem ipsum"
          description="Track and report program performance metrics. Identify trends or issues."
          icon={<PieChartIcon />}
        />
        <Action
          title="Beneficiary List / Payment Order"
          icon={<BankNoteIcon />}
          buttonText="Beneficiary Database"
          description="Access the active beneficiary list of the program for payment."
          to="./beneficiaries"
          allowedRoles={[Authentication.Scope.ROLE_PAYMENT_OFFICER]}
        />
      </SimpleGrid>
    </>
  );
}
