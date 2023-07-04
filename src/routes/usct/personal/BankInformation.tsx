import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function BankInformation() {
  return (
    <Box>
      <Heading variant="h3" size="sm" mb="24px">
        Bank Account Information
      </Heading>
      <Flex gap="20px" justifyContent="space-between" flexWrap="wrap">
        <Box>
          <Text fontWeight="600">Bank Account Owner Name</Text>
          <Text>Thomas Anderson</Text>
        </Box>
        <Box>
          <Text fontWeight="600">Bank Name</Text>
          <Text>Sunshine Bank</Text>
        </Box>
        <Box>
          <Text fontWeight="600">Inetrnational Bank Account Number (IBAN)</Text>
          <Text>AA02300209000106531065</Text>
        </Box>
      </Flex>
    </Box>
  );
}
