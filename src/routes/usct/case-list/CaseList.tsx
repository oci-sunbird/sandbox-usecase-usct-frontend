import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../../chakra-overrides/colors";
import {
  ActiveBuildingBlockContext,
  EUserType,
  SimulationContext,
} from "../USCT";
import { BUILDING_BLOCK } from "../utils";

export default function CaseList() {
  const { state, dispatch } = useContext(SimulationContext);

  useEffect(() => {
    dispatch({
      type: "SET_ALL",
      ...state,
      userType: EUserType.CITIZEN_SERVANT,
      description: {
        title: "PHASE 3 - PAYMENT",
        subtitle: "CIVIL SERVANT REVIEWS THE ACTIVE CASE",
      },
      progress: 80,
      userAuthorized: true,
    });
  }, []);

  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);
  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: true,
      [BUILDING_BLOCK.AUTHENTICATION]: true,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: false,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: false,
      [BUILDING_BLOCK.PAYMENT]: false,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: true,
      [BUILDING_BLOCK.SECURITY]: false,
    });
  }, []);

  return (
    <Flex w="100%" direction="column" gap="60px">
      <Flex gap="20px" direction="column">
        <Heading>Active Cases</Heading>
        <Flex justifyContent="space-between">
          <Flex gap="10px" flexShrink="0" alignItems="center">
            <Flex
              color="white"
              backgroundColor="black.900"
              flexShrink="0"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
              w="24px"
              h="24px"
            >
              1
            </Flex>
            <Text>ACTIVE CASES</Text>
          </Flex>
          <ButtonGroup variant="ghost" colorScheme="black">
            <Button>Export</Button>
            <Button>Filter</Button>
          </ButtonGroup>
        </Flex>
        <Flex direction="column" gap="20px">
          <Table variant="simple">
            <Thead
              backgroundColor={colors.secondary[800]}
              color={colors.secondary[0]}
            >
              <Tr>
                <Th color={colors.secondary[0]}>#</Th>
                <Th color={colors.secondary[0]}>Topic</Th>
                <Th color={colors.secondary[0]}>Case Created</Th>
                <Th color={colors.secondary[0]}>Case Closed</Th>
                <Th color={colors.secondary[0]}>Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>37793946215</Td>
                <Td>5</Td>
                <Td>High Priority</Td>
                <Td>Yesterday</Td>
                <Td>Action Required</Td>
                <Td>
                  <Button variant="ghost" colorScheme="black">
                    ...
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Flex justifyContent="flex-end">
            <Button
              as={Link}
              to="../review-case/2895379235"
              colorScheme="admin"
            >
              Review Next Case
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="20px" direction="column">
        <Heading>Closed Cases</Heading>
        <Flex justifyContent="space-between">
          <Flex gap="10px" flexShrink="0" alignItems="center">
            <Text>
              <strong>211</strong> CLOSED CASES
            </Text>
          </Flex>
          <ButtonGroup variant="ghost" colorScheme="black">
            <Button>Export</Button>
            <Button>Filter</Button>
          </ButtonGroup>
        </Flex>
        <Table variant="simple">
          <Thead
            backgroundColor={colors.secondary[800]}
            color={colors.secondary[0]}
          >
            <Tr>
              <Th color={colors.secondary[0]}>#</Th>
              <Th color={colors.secondary[0]}>Topic</Th>
              <Th color={colors.secondary[0]}>Case Created</Th>
              <Th color={colors.secondary[0]}>Case Closed</Th>
              <Th color={colors.secondary[0]}>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>37793946215</Td>
              <Td>(unassigned)</Td>
              <Td>High Priority</Td>
              <Td>Yesterday</Td>
              <Td>
                <Tag width="140px" justifyContent="center">
                  Pending
                </Tag>
              </Td>
              <Td>
                <Button variant="ghost" colorScheme="black">
                  ...
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Flex justifyContent="flex-end">
          <ButtonGroup variant="ghost" colorScheme="black">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button rightIcon={<ArrowForwardIcon />}>Next</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Flex>
  );
}
