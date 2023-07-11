import { Box, Flex, Heading, Text } from '@chakra-ui/react';

interface BankInformationProps {
  ownerName: string;
  bankName: string;
  iban: string;
}

export default function BankInformation({
  ownerName,
  bankName,
  iban,
}: BankInformationProps) {
  return (
    <Box>
      <Heading variant="h3" size="sm" mb="24px">
        Bank Account Information
      </Heading>
      <Flex
        gap="20px"
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        flexWrap="wrap"
      >
        <Box>
          <Text fontWeight="600">Bank Account Owner Name</Text>
          <Text>{ownerName}</Text>
        </Box>
        <Box>
          <Text fontWeight="600">Bank Name</Text>
          <Text>{bankName}</Text>
        </Box>
        <Box>
          <Text fontWeight="600">International Bank Account Number (IBAN)</Text>
          <Text>{iban}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
