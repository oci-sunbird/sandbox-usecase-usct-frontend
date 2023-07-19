import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { RPCContext } from './rpc';

export default function Login() {
  const rpc = useContext(RPCContext);
  const handleLogin = () => {
    rpc.login('enrollment-officer', 'password');
  };
  return (
    <Center flexGrow={1}>
      <VStack gap="20px" w="100%" maxW="400px">
        <Heading>Log In</Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input placeholder="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
        </FormControl>
        <Button
          colorScheme="admin"
          w="100%"
          onClick={() => {
            handleLogin();
          }}
        >
          Log In
        </Button>
      </VStack>
    </Center>
  );
}
