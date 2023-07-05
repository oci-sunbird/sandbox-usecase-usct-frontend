import { ReactComponent as FileWarningIcon } from "@assets/icons/file-warning.svg";
import { ReactComponent as YisIcon } from "@assets/icons/yis-circle.svg";
import { Avatar, Box, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";

export default function PersonalInformation({
  person,
  simulation,
  reviewed,
}: {
  person: any | null;
  simulation?: boolean;
  reviewed?: boolean;
}) {
  const SimulationIcon = reviewed ? YisIcon : FileWarningIcon;

  return (
    <Flex gap="24px" direction="column">
      <Heading fontSize="18px">Personal Information</Heading>
      <Flex gap="40px" direction={{ sm: "column", xl: "row" }}>
        <Avatar
          borderRadius="8px"
          maxH="254px"
          maxW="192px"
          width="100%"
          height="auto"
        />
        <Grid
          w="100%"
          gridTemplateRows="repeat(4, min-content)"
          gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
          gap="20px"
        >
          <Box>
            <Text fontWeight="600">Name</Text>
            <Text>{`${person?.firstName} ${person?.lastName}`}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Date of Birth</Text>
            <Text>
              {person?.dateOfBirth
                ? new Date(person.dateOfBirth).toLocaleDateString("et", {
                    day: "2-digit",
                    year: "numeric",
                    month: "2-digit",
                  })
                : ""}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="600">Personal ID Code</Text>
            <Text>{person?.idCode}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Social ID Code</Text>
            <Text>{person?.socialCode}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Home Address</Text>
            <Text>{person?.fullAddress}</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Occupation</Text>
            <Text>{person?.occupation}</Text>
          </Box>
          <Box>
            <Flex alignItems="center" gap="10px">
              <Text fontWeight="600">E-mail</Text>
              {simulation && <SimulationIcon height="20px" width="20px" />}
            </Flex>
            <Text color="gray">{person?.email}</Text>
          </Box>
          <Box>
            <Flex alignItems="center" gap="10px">
              <Text fontWeight="600">Phone Number</Text>
              {simulation && <SimulationIcon height="20px" width="20px" />}
            </Flex>
            <Text color="gray">{person?.phoneNumber}</Text>
          </Box>
        </Grid>
      </Flex>
      <Text>
        If the shown information is not up to date, please update the
        information via the{" "}
        <Link textDecoration="underline" href="#">
          citizen portal
        </Link>
        .
      </Text>
    </Flex>
  );
}
