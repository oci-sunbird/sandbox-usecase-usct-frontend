import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colors } from "../../../chakra-overrides/colors";

export const ActionAlert = ({ state }: { state: string | null }) => {
  if (state === "done") {
    return (
      <Flex
        alignItems="center"
        border="2px solid black"
        borderRadius="8px"
        padding="18px 36px"
      >
        <Flex
          flexShrink="0"
          borderRadius="100%"
          alignItems="center"
          justifyContent="center"
          w="64px"
          h="64px"
          backgroundColor="secondary.1000"
          color="white"
          mr="54px"
        >
          K
        </Flex>
        <Text>
          Candidate is eligible for unconditional cash transfer program.
        </Text>

        <Button
          colorScheme="admin"
          marginLeft="auto"
          as={Link}
          to="../info?done=true"
        >
          Request to Assign the Candidate
        </Button>
      </Flex>
    );
  }
  if (state === "scheduling") {
    return (
      <Flex
        alignItems="center"
        border="2px solid black"
        borderRadius="8px"
        padding="18px 36px"
      >
        <Flex
          flexShrink="0"
          borderRadius="100%"
          alignItems="center"
          justifyContent="center"
          w="64px"
          h="64px"
          backgroundColor="secondary.1000"
          color="white"
          mr="54px"
        >
          K
        </Flex>
        <Text>
          Scheduling the payment required for candidate to enroll in the
          program.
        </Text>
        <Flex direction="column" marginLeft="auto" gap="10px">
          <Flex gap="10px">
            <Input placeholder="00/00/23" />
            <Button>O</Button>
          </Flex>
          <Button colorScheme="admin" as={Link} to="../active-program">
            Enroll Into the Program
          </Button>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex
      alignItems="center"
      border="2px solid black"
      borderRadius="8px"
      padding="18px 36px"
    >
      <Flex
        flexShrink="0"
        borderRadius="100%"
        alignItems="center"
        justifyContent="center"
        w="64px"
        h="64px"
        backgroundColor={colors.secondary[1000]}
        color="white"
        mr="54px"
      >
        K
      </Flex>
      <Text>
        Additional information required to <br /> continue the eligibility
        process.
      </Text>
      <Button
        marginLeft="auto"
        colorScheme="admin"
        as={Link}
        to="../authorise-citizen"
      >
        Ask For Validation
      </Button>
    </Flex>
  );
};
