import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Review() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  return (
    <Box w="100%">
      <Button
        as={Link}
        to="../"
        mb="116px"
        variant="ghost"
        leftIcon={<ArrowBackIcon />}
      >
        Cancel
      </Button>
      <Flex direction="column" w="100%" mb="76px">
        <Heading mb="24px">Missing Information</Heading>
        {currentStep === 0 && (
          <Box>
            <Text mb="16px">Please provide the following information.</Text>
            <Flex direction="column" gap="16px" w="50%">
              <FormControl
                flexDirection="row"
                alignItems="center"
                display="flex"
                gap="16px"
              >
                <FormLabel fontWeight="600" width="30%">
                  Email Address
                </FormLabel>
                <Input w="70%" placeholder="youremail@here.plz" />
              </FormControl>
              <FormControl
                flexDirection="row"
                alignItems="center"
                display="flex"
                gap="16px"
              >
                <FormLabel fontWeight="600" width="30%">
                  Phone Number
                </FormLabel>
                <Input placeholder="(000)-0000-000" w="70%" />
              </FormControl>
            </Flex>
          </Box>
        )}
        {currentStep === 1 && (
          <Box>
            <Text mb="16px">Please upload your marriage certificate.</Text>
            <Flex
              direction="column"
              gap="16px"
              p="38px"
              border="3px dashed rgba(0,0,0,.28)"
              alignItems="center"
              justifyContent="center"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30"
                  stroke="black"
                  strokeOpacity="0.28"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34 16L24 6L14 16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34 16L24 6L14 16"
                  stroke="black"
                  strokeOpacity="0.28"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 6V30"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 6V30"
                  stroke="black"
                  strokeOpacity="0.28"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text>Click to browse or drop here</Text>
            </Flex>
          </Box>
        )}
      </Flex>
      <Flex gap="8px" alignItems="center" justifyContent="flex-end">
        <Text>{currentStep + 1} / 2</Text>
        {currentStep !== 0 && (
          <Button
            onClick={() => setCurrentStep(currentStep - 1)}
            variant="outline"
          >
            Back
          </Button>
        )}
        <Button
          rightIcon={<ArrowForwardIcon />}
          onClick={() => {
            if (currentStep !== 1) {
              setCurrentStep(currentStep + 1);
              return;
            }
            navigate("../personal")
          }}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}
