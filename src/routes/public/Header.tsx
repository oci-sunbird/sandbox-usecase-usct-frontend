import { Button, ButtonGroup, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      borderWidth="2px"
      borderStyle="solid"
      borderColor="black.900"
      padding="16px 24px"
      alignItems="center"
      justifyContent="space-between"
      as="header"
    >
      <Flex as="a" href="/" alignItems="center">
        <Image src="/govstack-logo.png" marginRight="24px" />
        <Text fontSize="3xl">
          Open <strong>Sandbox</strong>
        </Text>
      </Flex>
      <ButtonGroup alignItems="center">
        <Button
          as={Link}
          to="/sign-in"
          variant="outline"
          borderColor="black.900"
          borderWidth="2px"
        >
          Login
        </Button>
        <Button as={Link} to="/sign-up" background="black.900" color="black.0">
          Sign Up
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
