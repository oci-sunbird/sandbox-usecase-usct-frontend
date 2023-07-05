import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Center,
  Fade,
  Flex,
  Heading,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate, useLoaderData, useNavigation } from "react-router-dom";
import ChallengeForm, {
  CHALLENGE_FLOW,
} from "../../ui/ChallengeForm/ChallengeForm";
import UserForm from "./UserForm";

enum STATES {
  IN_PROGRESS = "IN_PROGRESS",
  CREATE_ACCOUNT = "CREATE_ACCOUNT",
  VALIDATE = "VALIDATE",
}

export default function SignUp() {
  const { location } = useNavigation();
  const [step, setStep] = useState(STATES.CREATE_ACCOUNT);
  const [email, setEmail] = useState("");
  const loaderData = useLoaderData() as {
    user?: null | boolean;
    error?: null | string;
  };
  if (loaderData) {
    if (loaderData.user) {
      return <Navigate to="/" />;
    }
  }

  useEffect(() => {
    if (step === STATES.IN_PROGRESS) {
      setTimeout(() => {
        setStep(STATES.VALIDATE);
      }, 5000);
    }
  }, [step]);

  const RenderSignup = () => {
    switch (step) {
      case STATES.IN_PROGRESS:
        return (
          <Fade in={step === STATES.IN_PROGRESS}>
            <Center marginTop="96px">
              <Flex direction="column" gap="32px" alignItems="center">
                <Image src="/in-progress.png" height="auto" width="200px" />
                <Flex direction="column" gap="16px" width="100%">
                  <Progress h={2} colorScheme="gray" isIndeterminate />
                  <Text textAlign="center">
                    Doing secret things! (not really)
                  </Text>
                </Flex>
                <Alert status="info">
                  <AlertIcon />
                  <Box>
                    <AlertDescription>
                      We are setting up your team in Open Island Sandbox.
                      <br />
                      Usually this takes less than a minute.
                    </AlertDescription>
                  </Box>
                </Alert>
              </Flex>
            </Center>
          </Fade>
        );
      case STATES.VALIDATE:
        return (
          <Fade in={step === STATES.VALIDATE}>
            <Center marginTop="96px">
              <Flex direction="column" gap="16px" alignItems="center">
                <Image src="/Confetti.png" width="200px" height="auto" />
                <Progress colorScheme="green" value={100} w="50%" />
                <Heading size="md" color="green">
                  Success!
                </Heading>
                <ChallengeForm email={email} flow={CHALLENGE_FLOW.SIGN_UP} />
              </Flex>
            </Center>
          </Fade>
        );
      default:
        return (
          <Fade in={step === STATES.CREATE_ACCOUNT}>
            <Center marginTop="96px">
              <UserForm
                setEmail={setEmail}
                onCreated={() => setStep(STATES.IN_PROGRESS)}
              />
            </Center>
          </Fade>
        );
    }
  };

  return <RenderSignup />;
}
