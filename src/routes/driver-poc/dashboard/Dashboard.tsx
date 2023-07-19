import { Heading, SimpleGrid } from '@chakra-ui/react';
import { Action } from './Action';

export function Dashboard() {
  return (
    <>
      <Heading>Social Welfare Program</Heading>
      <Heading>Unconditional Social Cash Transfer</Heading>
      <SimpleGrid columns={2} rowGap="20px" columnGap="40px">
        <Action
          title="Enrollment / Candidate List"
          buttonText="Candidate Database"
          description="Access the candidate list for enrollment into the program."
          to="../candidates"
        />
        <Action
          title="Register"
          buttonText="Disabled"
          description="Access the registration process for new possible beneficiaries into the program."
        />
        <Action
          title="Beneficiary List"
          buttonText="Beneficiary Database"
          description="Access the active beneficiary list of the program for payment"
          to="../beneficiaries"
        />
        <Action
          title="Respons to queries"
          buttonText="Disabled"
          description="Respond to beneficiary or stakeholder queries related to the program"
        />
        <Action
          title="Monitor Program Performance"
          buttonText="Disabled"
          description="Track and report program performance metrics. Identify trends or issues."
        />
      </SimpleGrid>
    </>
  );
}
