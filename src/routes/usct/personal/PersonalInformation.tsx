import { Avatar, Box, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";

export default function PersonalInformation({
  person,
}: {
  person: Record<string, any>;
}) {
  return (
    <Flex gap="24px" direction="column">
      <Heading fontSize="18px">Personal Information</Heading>
      <Flex gap="40px">
        <Avatar borderRadius="0" width="25%" height="auto" />
        <Grid
          w="100%"
          gridTemplateRows="repeat(4, min-content)"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="20px"
        >
          <Box>
            <Text fontWeight="600">Name</Text>
            <Text>{person.fullName}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Date of Birth</Text>
            <Text>{person.dateOfBirth}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Personal ID Code</Text>
            <Text>{person.idCode}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Social ID Code</Text>
            <Text>{person.socialCode}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Home Address</Text>
            <Text>{person.fullAddress}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Occupation</Text>
            <Text>{person.occupation}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">E-mail</Text>
            <Text color="gray">{person.email}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Phone Number</Text>
            <Text color="gray">{person.phoneNumber}</Text>
          </Box>
        </Grid>
      </Flex>
      <Text>
        If the shown information is not up to date, please update the
        information via the <Link href="#">citizen portal</Link>
      </Text>
    </Flex>
  );
}
