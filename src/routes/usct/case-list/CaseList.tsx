import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CaseList() {
  return (
    <Flex w="100%" direction="column" gap="60px">
      <Flex gap="20px" direction="column">
        <Heading>Active Cases</Heading>
        <Flex justifyContent="space-between">
          <Flex gap="10px" flexShrink="0" alignItems="center">
            <Flex
              color="white"
              backgroundColor="main.900"
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
          <ButtonGroup>
            <Button>Export</Button>
            <Button>Filter</Button>
          </ButtonGroup>
        </Flex>
        <Flex direction="column" gap="20px">
          <Table variant="simple">
            <Thead backgroundColor="main.700" color="main.0">
              <Tr>
                <Th color="main.0">#</Th>
                <Th color="main.0">Topic</Th>
                <Th color="main.0">Case Created</Th>
                <Th color="main.0">Case Closed</Th>
                <Th color="main.0">Status</Th>
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
                  <Button>...</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Flex justifyContent="flex-end">
            <Button
              as={Link}
              to="../review-case/2895379235"
              backgroundColor="main.900"
              color="main.0"
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
          <ButtonGroup>
            <Button>Export</Button>
            <Button>Filter</Button>
          </ButtonGroup>
        </Flex>
        <Table variant="simple">
          <Thead backgroundColor="main.700" color="main.0">
            <Tr>
              <Th color="main.0">#</Th>
              <Th color="main.0">Topic</Th>
              <Th color="main.0">Case Created</Th>
              <Th color="main.0">Case Closed</Th>
              <Th color="main.0">Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>37793946215</Td>
              <Td>(unassigned)</Td>
              <Td>High Priority</Td>
              <Td>Yesterday</Td>
              <Td>Pending</Td>
              <Td>
                <Button>...</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Flex justifyContent="flex-end">
          <ButtonGroup>
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
