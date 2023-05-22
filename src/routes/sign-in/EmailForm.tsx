import {
  Alert,
  AlertIcon,
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { colors } from "../../chakra-overrides/colors";
import { authentication, IAWSError } from "../../utils/authentication";

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("This field is required"),
});

export default function EmailForm({ setEmail }: { setEmail: Function }) {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Box
      borderRadius="16px"
      zIndex="1"
      shadow="xl"
      w="400px"
      p={7}
      borderColor="black.900"
      borderWidth="2px"
      borderStyle="solid"
      backgroundColor={colors.secondary[0]}
    >
      <Formik
        initialValues={{
          username: "",
        }}
        onSubmit={async ({ username }) => {
          try {
            await authentication.signIn({ username });
            setEmail(username);
          } catch (error) {
            setErrorMessage((error as IAWSError).code);
          }
        }}
        validationSchema={SignInSchema}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <Stack>
              <Heading>Login</Heading>
              <StackDivider />
              <FormControl isInvalid={!!errors.username}>
                <FormLabel>Email address</FormLabel>
                <Field as={Input} name="username" type="username" />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>
              <StackDivider />
              {errorMessage && (
                <Alert status="error">
                  <AlertIcon />
                  {errorMessage}
                </Alert>
              )}
              <ButtonGroup justifyContent="space-between">
                <Button
                  to="/"
                  type="button"
                  as={Link}
                  variant="ghost"
                  color="gray.600"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  backgroundColor="black.900"
                  color={colors.secondary[0]}
                  isLoading={isSubmitting}
                >
                  Next
                </Button>
              </ButtonGroup>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
