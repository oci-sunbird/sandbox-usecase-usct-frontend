import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function BankInformation() {
  return (
    <Box>
      <Heading variant="h3" fontSize="18px'">
        Bank Account Information (Optional)
      </Heading>
      <Flex justifyContent="space-between">
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
