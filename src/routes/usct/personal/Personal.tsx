import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from "../USCT";
import { BUILDING_BLOCK } from "../utils";
import BankInformation from "./BankInformation";
import PersonalInformation from "./PersonalInformation";
import PersonalInformationTable from "./PersonalInformationTable";
import { ReactComponent as YisIcon } from "@assets/icons/yis-circle.svg"
import { ReactComponent as FileWarningIcon } from "@assets/icons/file-warning.svg"

const householdData = [
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: null,
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: <Tag variant="outline">Hearing support</Tag>,
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: <Tag variant="outline">Special care</Tag>,
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: null,
  },
];

const DocumentStatus = <Flex alignItems="center" gap="10px"><YisIcon />Approved</Flex>

const documentsData = [
  {
    name: "Medical Certificate",
    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: DocumentStatus,
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: DocumentStatus,
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: DocumentStatus,
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: DocumentStatus,
  },
];

export default function Personal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useContext(SimulationContext);
  const [citizen, setCitizen] = useState<any | null>(null);

  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN,
      description: {
        title: "PHASE 1 - ELIGIBILITY",
        subtitle: searchParams.get("done")
          ? "CITIZEN SUBMITS THEIR CASE FOR ELIGIBILITY REVIEW"
          : "CITIZEN VALIDATES THEIR INFORMATION",
      },
      progress: searchParams.get("done") ? 35 : 30,
      userAuthorized: true,
    });
  }, []);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: true,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: false,
      [BUILDING_BLOCK.PAYMENT]: true,
      [BUILDING_BLOCK.REGISTRATION]: true,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: true,
      [BUILDING_BLOCK.SECURITY]: true,
    });
  }, []);
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
            <>
              <Button as={Link} to="../personal" variant="outline">
                Cancel
              </Button>
              <Button as={Link} to="../case-management?done=true">
                Submit for eligibility review
              </Button>
            </>
          ) : (
            <Button as={Link} to="../review" leftIcon={<FileWarningIcon height="20" width="20"/>}>
              Validate the information
            </Button>
          )}
        </ButtonGroup>
      </Flex>
      <PersonalInformation person={citizen} simulation reviewed={!!searchParams.get("done")} />
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
      <BankInformation />
      <Flex justifyContent="flex-end">
        <ButtonGroup colorScheme="citizen">
          {searchParams.get("done") ? (
            <>
              <Button as={Link} to="../personal" variant="outline">
                Cancel
              </Button>
              <Button as={Link} to="../case-management?done=true">
                Submit for eligibility review
              </Button>
            </>
          ) : (
            <Button as={Link} to="../review" leftIcon={<FileWarningIcon height="20" width="20"/>}>
              Validate the information
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}
