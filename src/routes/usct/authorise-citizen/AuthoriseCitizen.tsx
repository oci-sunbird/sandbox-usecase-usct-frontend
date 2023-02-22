import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AuthoriseCitizen() {
  return (
    <Center w="100%">
      <VStack maxW="312px" textAlign="center" gap="20px">
        <Heading>Log In</Heading>
        <Text>
          Our self-service environment is your opportunity to communicate with
          us conveniently and paper-free.
        </Text>
        <Button
          as={Link}
          to="../info"
          backgroundColor="main.900"
          color="main.0"
          w="100%"
        >
          ID Card
        </Button>
        <Button
          as={Link}
          to="../info"
          backgroundColor="main.900"
          color="main.0"
          w="100%"
        >
          Mobile ID
        </Button>
        <Button
          as={Link}
          to="../info"
          backgroundColor="main.900"
          color="main.0"
          w="100%"
        >
          e-ID Account
        </Button>
        <Button
          as={Link}
          to="../info"
          backgroundColor="main.900"
          color="main.0"
          w="100%"
        >
          Online Bank
        </Button>
      </VStack>
    </Center>
  );
}
