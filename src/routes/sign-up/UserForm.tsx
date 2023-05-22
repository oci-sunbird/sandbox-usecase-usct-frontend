import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { colors } from "../../chakra-overrides/colors";
import { authentication } from "../../utils/authentication";

const signUpSchema = Yup.object().shape({
  title: Yup.string(),
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string().required("This field is required"),
  role: Yup.string(),
});

export default function UserForm({
  onCreated,
  setEmail,
}: {
  onCreated: Function;
  setEmail: Function;
}) {
  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await authentication.signUp({ username: email, password });
      setEmail(email);
      onCreated();
    } catch (error) {}
  };

  return (
    <Box
      borderRadius="16px"
      zIndex="1"
      shadow="xl"
      w="400px"
      p={7}
      borderStyle="solid"
      borderWidth="2px"
      borderColor="black.900"
      backgroundColor={colors.secondary[0]}
    >
      <Formik
        initialValues={{
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: "",
        }}
        onSubmit={onSubmit}
        validationSchema={signUpSchema}
      >
        {({ handleSubmit, errors, touched, isSubmitting }) => (
          <Form>
            <Stack>
              <Heading>Sign up</Heading>
              <StackDivider />
              <Flex gap="16px">
                <FormControl w="50%">
                  <FormLabel>Title</FormLabel>
                  <Field as={Select} name="title">
                    <option value="None">None</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </Field>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.firstName && touched.firstName}
                >
                  <FormLabel>First Name</FormLabel>
                  <Field as={Input} name="firstName" type="text" />
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>
              </Flex>
              <FormControl isInvalid={!!errors.lastName && touched.lastName}>
                <FormLabel>Last Name</FormLabel>
                <Field as={Input} name="lastName" type="text" />
                <FormErrorMessage>{errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel>Email</FormLabel>
                <Field as={Input} name="email" type="email" />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>What is your job or role? (optional)</FormLabel>
                <Field as={Select} name="role">
                  <option>Please choose</option>
                  <option>Role 1</option>
                  <option>Role 2</option>
                  <option>Role 3</option>
                  <option>Role 4</option>
                  <option>Role 5</option>
                </Field>
                <FormErrorMessage>{errors.role}</FormErrorMessage>
              </FormControl>
              <StackDivider />
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
                  Create Account
                </Button>
              </ButtonGroup>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
