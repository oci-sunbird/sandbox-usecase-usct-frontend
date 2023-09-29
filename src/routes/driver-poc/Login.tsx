import {
  Button,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useAuthentication} from "./utils/useAuthentication";
import { useSearchParams } from "react-router-dom";

export default function Login() {
  const {login} = useAuthentication();
  const [urlParams] = useSearchParams();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = () => {
    login();
  };

useEffect(() => {
  if (urlParams.has("error")) setLoginFailed(true);
})

  return (
      <Center minH="100vh" flexGrow={1}>
        <VStack gap="20px" w="100%" maxW="400px">
          <Heading>Log In</Heading>
          <Button
              colorScheme="admin"
              w="100%"
              onClick={() => {
                handleLogin();
              }}
          >
            Log in with e-Signet
          </Button>
          { loginFailed ? ( <Text color="red">Login failed! Please try again!</Text> ) : ("") }
        </VStack>
      </Center>
  );
}
