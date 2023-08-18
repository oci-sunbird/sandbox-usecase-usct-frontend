import { Box, Flex, Heading, Text, Button, Spacer } from '@chakra-ui/react';
import { ReactComponent as EditIcon } from '@assets/icons/edit.svg'
import { useNavigate, useParams } from 'react-router-dom';
import { getRole } from '../../driver-poc/utils/token';
import { DriverPOC } from '../../driver-poc/types';

interface BankInformationProps {
  candidate: DriverPOC.Candidate;
  newCandidate?: boolean;
}

export default function BankInformation({
  candidate,
  newCandidate
}: BankInformationProps) {
  const id = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isRegistryAdministration = (getRole() == "ROLE_REGISTRY_ADMINISTRATION");
  return (
    <Box>
      <Flex display="flex">
        <Heading variant="h3" size="sm" mb="24px">
        Bank Information
      </Heading><Spacer />
      {(isRegistryAdministration && !newCandidate)?(
      <Button onClick={() => navigate(`/driver-poc/candidate/edit/bankInformation/${id.id}`, {state: {candidate}})} w="180px" variant="outline" colorScheme="admin" leftIcon={<EditIcon/>}>Edit
      </Button>
      ):""}
      </Flex>
      <Flex
        gap="20px"
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        flexWrap="wrap"
      >
        <Box>
          <Text fontWeight="600">Bank Account Owner Name</Text>
          <Text>{candidate.person.bankAccountOwnerName}</Text>
        </Box>
        <Box>
          <Text fontWeight="600">International Bank Account Number (IBAN)</Text>
          <Text>{candidate.person.iban}</Text>
        </Box>
        <Box>
          <Text fontWeight="600">Bank Name</Text>
          <Text>{candidate.person.bankName}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
