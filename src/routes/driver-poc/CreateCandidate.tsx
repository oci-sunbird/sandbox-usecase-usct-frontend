import { ReactComponent as SaveIcon } from "@assets/icons/save.svg";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  CircularProgress,
  Flex,
  Heading,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BankInformation from "../usct/personal/BankInformation";
import BankInformationEdit from "../usct/personal/BankInformationEdit";
import PersonalInformation from "../usct/personal/PersonalInformation";
import PersonalInformationEdit from "../usct/personal/PersonalInformationEdit";
import { RPCContext } from "./rpc";
import { Candidate } from "./types";

export default function CreateCandidate() {
  const rpc = useContext(RPCContext);
  const [isBeingCreated, setIsBeingCreated] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [createdCandidateId, setCreatedCandidateId] = useState(Number);
  const [candidate] = useState<Candidate>({
    id: 0,
    person: {
      id: 0,
      personalIdCode: "",
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      region: "",
      homeAddress: "",
      phoneNumber: "",
      occupation: "",
      municipality: "",
      zipCode: "",
      bankAccountOwnerName: "",
      financialAddress: "",
      iban: "",
      bankName: "",
      financialModality: "",
    },
    packages: [],
  });

  const handleBack = () => {
    if (activeStep == 0) {
      navigate("/driver-poc/candidates");
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const handleContinue = () => {
    return setActiveStep(activeStep + 1);
  };

  const createCandidate = async () => {
    setIsBeingCreated(true);
    const res = await rpc.createCandidate(candidate);
    setCreatedCandidateId(res.id);
    if (res) {
      setIsCreated(true);
    }
  };

  const updateData = (e: { target: Record<string, string> }) => {
    candidate.person = Object.assign({}, candidate.person, {
      [e.target.name]: e.target.value,
    });
  };

  const steps = [
    {
      title: "Personal Information",
      description: "Personal Information",
      component: (
        <PersonalInformationEdit
          candidatei={candidate}
          newCandidate
          setCandidateData={updateData}
          handleContinue={handleContinue}
          handleBack={handleBack}
        />
      ),
    },
    {
      title: "Bank Information",
      description: "Bank Information",
      component: (
        <BankInformationEdit
          candidatei={candidate}
          setCandidateData={updateData}
          handleContinue={handleContinue}
          handleBack={handleBack}
        />
      ),
    },
    {
      title: "Candidate Preview",
      description: "Preview",
      component: (
        <CandidatePreview
          candidate={candidate}
          handleContinue={createCandidate}
          handleBack={handleBack}
        />
      ),
    },
  ];

  const navigate = useNavigate();

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  if (isCreated) {
    return (
      <Center display="flex" margin="auto">
        <VStack maxW="40rem" gap="2.5rem">
          <Heading size="md" mb="1.25rem">
            New candidate successfully created
          </Heading>
          <Box>
            <Button mb=".625rem" maxW="23.75rem" w="100%" colorScheme="admin">
              Home
            </Button>
            <ButtonGroup
              maxW="23.75rem"
              w="100%"
              colorScheme="admin"
              variant="outline"
              gap="1.25rem"
            >
              <Button as={Link} to="/driver-poc" w="100%">
                Candidate list
              </Button>
              <Button
                as={Link}
                to={"/driver-poc/candidate/" + createdCandidateId}
                w="100%"
              >
                Go to candidate
              </Button>
            </ButtonGroup>
          </Box>
        </VStack>
      </Center>
    );
  }
  if (isBeingCreated) {
    return (
      <Center display="flex" margin="auto">
        <VStack gap="2.5rem">
          <CircularProgress isIndeterminate size={100} mb="2.5rem" />
          <Heading mb="1.25rem">Creating new candidate ...</Heading>
          {/* <Text>Please wait! This process might take some time.</Text> */}
        </VStack>
      </Center>
    );
  }

  return (
    <Flex direction="column" gap="3.125rem">
      <Flex justifyContent="center">
        <Stepper width="50%" size="md" index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Flex>
      <Flex width="100%" justifyContent="center">
        {steps[activeStep].component}
      </Flex>
    </Flex>
  );
}

const CandidatePreview = ({
  candidate,
  handleContinue,
  handleBack,
}: {
  candidate: Candidate;
  handleContinue: () => void;
  handleBack: () => void;
}) => {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      direction="column"
      gap="3.125rem"
    >
      <PersonalInformation person={candidate.person} newCandidate />,
      <BankInformation candidate={candidate} newCandidate />
      <Flex justifyContent="flex-end">
        <ButtonGroup colorScheme="admin">
          <Button onClick={() => handleBack()} w="11.25rem" variant="outline">
            Back
          </Button>
          <Button
            type="submit"
            colorScheme={"admin"}
            onClick={() => handleContinue()}
            w="11.25rem"
            leftIcon={<SaveIcon />}
          >
            Create
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
