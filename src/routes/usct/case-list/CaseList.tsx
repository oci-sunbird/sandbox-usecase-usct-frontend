import { ReactComponent as MoreIcon } from "@assets/icons/more-horizontal.svg";
import {
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Pagination from "@ui/Pagination/Pagination";
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
      userAuthorized: true,
      previousStep: "../case-management?state=done",
      nextStep: "../review-case/2895379235",
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
              backgroundColor="secondary.1000"
              flexShrink="0"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
              w="24px"
              h="24px"
              fontSize="12px"
              fontWeight="700"
            >
              1
            </Flex>
            <Text color="secondary.500" fontSize="12px">
              ACTIVE CASES
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="20px">
          <TableContainer>
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
                    <MoreIcon />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

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
          <Flex gap="8px" flexShrink="0" alignItems="center">
            <Text fontSize="12" fontWeight="bold">
              211
            </Text>
            <Text color="secondary.700" fontSize="12">
              CLOSED CASES
            </Text>
          </Flex>
        </Flex>
        <TableContainer>
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
                  <MoreIcon />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Flex justifyContent="flex-end">
          <Pagination />
        </Flex>
      </Flex>
    </Flex>
  );
}
