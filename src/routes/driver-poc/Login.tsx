import {ChevronDownIcon} from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import {useState} from "react";
import {colors} from "../../chakra-overrides/colors";
import {useAuthentication} from "./utils/useAuthentication";

interface IUser {
  username: string;
  role: string;
  value: string;
}

const users = [
  {
    username: "max.bob@gov.stack",
    role: "Enrollment Officer",
    value: "enrollment-officer",
  },
  {
    username: "susie.may@gov.stack",
    role: "Payment Officer",
    value: "payment-officer",
  },
  {
    username: "jason.hans@gov.stack",
    role: "Registry Officer",
    value: "registry-administration",
  },
];

export default function Login() {
  const {login} = useAuthentication();
  const [user, setUser] = useState<IUser>();
  const handleLogin = () => {
    login("user", "password");

  };
  return (
      <Center minH="100vh" flexGrow={1}>
        <VStack gap="20px" w="100%" maxW="400px">
          <Heading>Log In</Heading>
          <Button
              colorScheme={!user ? "disabled" : "admin"}
              w="100%"
              disabled={!user}
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
