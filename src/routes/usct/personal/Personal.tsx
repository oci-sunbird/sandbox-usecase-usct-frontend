import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Tag,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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

const personData = {
  fullName: "Thomas Anderson",
  dateOfBirth: "03.10.1994",
  phoneNumber: "(+372) 53937064",
  occupation: "Very Cool Guy",
  idCode: "39410036813",
  email: "veryCoolGuy@gmail.com",
  socialCode: "0235920935kdtt",
  fullAddress:
    "Very long name place, Saskatchewan, Alaskan Minnesota, Finnish Sauna 14, Earth, Milky Way, Known Universe",
};

export default function Personal() {
  return (
    <Flex w="100%" gap="48px" direction="column">
      <Flex justifyContent="space-between" marginBottom="48px">
        <Heading fontSize="36px">My Information</Heading>
        <ButtonGroup>
          <Button as={Link} to="../" variant="outline">
            Back
          </Button>
          <Button>Submit for eligibility review</Button>
        </ButtonGroup>
      </Flex>
      <PersonalInformation person={personData} />
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
        <ButtonGroup gap="12px">
          <Button as={Link} to="../" variant="outline">
            Back
          </Button>
          <Button>Submit for eligibility review</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
