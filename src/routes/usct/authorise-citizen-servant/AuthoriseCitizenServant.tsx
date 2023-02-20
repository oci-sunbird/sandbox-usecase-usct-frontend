import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AuthoriseCitizenServant() {
  return (
    <Center w="100%">
      <VStack maxW="312px" textAlign="center" gap="20px">
        <Heading>Ministry of Social Welfare Log In</Heading>
        <Text>
          Please use your National ID Card or Work ID Card to enter the system.
        </Text>
        <Button
          as={Link}
          to="./case-management"
          backgroundColor="main.900"
          color="main.0"
          w="100%"
        >
          ID Card
        </Button>
        <Button
          as={Link}
          to="./case-management"
          backgroundColor="main.900"
          color="main.0"
          w="100%"
        >
          Work ID Card
        </Button>
      </VStack>
    </Center>
  );
}
