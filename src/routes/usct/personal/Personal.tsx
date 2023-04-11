import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Tag,
  Text
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TCitizen } from "../../../mirage/types";
import { EUserType, SimulationContext } from "../USCT";
import BankInformation from "./BankInformation";
import PersonalInformation from "./PersonalInformation";
import PersonalInformationTable from "./PersonalInformationTable";

const householdData = [
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
  },
];

const documentsData = [
  {
    name: "Medical Certificate",
    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
];

export default function Personal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useContext(SimulationContext);
  const [citizen, setCitizen] = useState<TCitizen | null>(null);

  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: "PHASE 1 - ELIGIBILITY",
        subtitle: searchParams.get("done") ? "CITIZEN SUBMITS THEIR CASE FOR ELIGIBILITY REVIEW" : "CITIZEN VALIDATES THEIR INFORMATION",
      },
      progress: searchParams.get("done") ? 35 : 30,
      userAuthorized: true,
    });
  }, []);

  useEffect(() => {
    const f = async () => {
      const req = await fetch('/api/users');
      const res = await req.json();
      console.log(res.users[0]);
      setCitizen(res.users[0]);
    }
    f();
  }, [])

  return (
    <Flex w="100%" gap="48px" direction="column">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginBottom="48px"
      >
        <Heading fontSize="36px">My Information</Heading>
        <ButtonGroup colorScheme="citizen">
          {searchParams.get("done") ? (
            <Button as={Link} to="../review-candidate/123123123?state=done">
              Submit for eligibility review
            </Button>
          ) : (
            <Button as={Link} to="../review">
              Update Information
            </Button>
          )}
        </ButtonGroup>
      </Flex>
      <PersonalInformation person={citizen} />
      <PersonalInformationTable
        title="Household Information"
        columns={["Name", "National ID", "Relation", "Date of Birth", "Needs"]}
        data={householdData}
      />
      <PersonalInformationTable
        title="Documents"
        columns={[
          "Document Name",
          "Organization",
          "Issued On",
          "Valid Until",
          "Status",
        ]}
        data={documentsData}
      />
      <Box>
        <Heading variant="h3" fontSize="18px">
          Active Programs
        </Heading>
        <Text>None</Text>
      </Box>
      <BankInformation />
      <Flex justifyContent="flex-end">
        <ButtonGroup colorScheme="citizen" gap="12px">
          <Button as={Link} to="../" variant="outline">
            Back
          </Button>
          <Button as={Link} to="../review-candidate/123123123?state=done">
            Submit for eligibility review
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
