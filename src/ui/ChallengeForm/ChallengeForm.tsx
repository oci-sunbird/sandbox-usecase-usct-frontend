import {
  Alert,
  AlertIcon,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  HStack,
  Link,
  PinInput,
  PinInputField,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { authentication, IAWSError } from "../../utils/authentication";
import { AutoSubmitPin } from "./AutoSubmitPin";

export enum CHALLENGE_FLOW {
  SIGN_UP = "SIGN_UP",
  SIGN_IN = "SIGN_IN",
}

interface IChallengeFormProps {
  flow: CHALLENGE_FLOW;
  email: string;
}

export default function ChallengeForm({ flow, email }: IChallengeFormProps) {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (
    { challenge }: { challenge: string[] },
    actions: FormikHelpers<any>
  ) => {
    try {
      if (flow === CHALLENGE_FLOW.SIGN_UP) {
        await authentication.confirmSignUp({
          username: email,
          code: challenge.join(""),
        });
        await authentication.signIn({ username: email });
      }
    } catch (error) {
      actions.resetForm();
      setErrorMessage((error as IAWSError).code);
    }
  };

  return (
    <VStack gap="24px">
      <Heading>Verify it's you</Heading>
      <Text>
        An email with a verification code has been sent to{" "}
        <strong>{email}</strong>
      </Text>
      <Text>Enter the code here or click the link in the email to login:</Text>
      <Formik
        initialValues={{
          challenge: [],
        }}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            {!isSubmitting ? (
              <>
                <VStack>
                  <FormControl isInvalid={!!errors.challenge}>
                    <Center>
                      <HStack>
                        <PinInput otp>
                          <Field as={PinInputField} name="challenge[0]" />
                          <Field as={PinInputField} name="challenge[1]" />
                          <Field as={PinInputField} name="challenge[2]" />
                          <Field as={PinInputField} name="challenge[3]" />
                          <Field as={PinInputField} name="challenge[4]" />
                          <Field as={PinInputField} name="challenge[5]" />
                        </PinInput>
                      </HStack>
                    </Center>
                    <FormErrorMessage>{errors.challenge}</FormErrorMessage>
                  </FormControl>
                  {errorMessage && (
                    <Alert status="error">
                      <AlertIcon />
                      {errorMessage}
                    </Alert>
                  )}
                </VStack>
              </>
            ) : (
              <Spinner />
            )}
            <AutoSubmitPin />
          </Form>
        )}
      </Formik>
      <Link color="blue.500">Didn't get a verification code?</Link>
    </VStack>
  );
}
