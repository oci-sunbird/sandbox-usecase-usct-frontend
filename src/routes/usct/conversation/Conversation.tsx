import {
  Alert,
  AlertIcon,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Conversation() {
  return (
    <Flex direction="column" w="100%" gap="20px">
      <Alert>
        <AlertIcon />
        <AlertTitle>New payment has been sent to your bank account!</AlertTitle>
      </Alert>
      <Flex justifyContent="space-between">
        <Heading>Lorem Ipsum #3779394</Heading>
        <Button color="white" backgroundColor="black">
          Resolved
        </Button>
      </Flex>
      <Text>
        <strong>Conversation</strong>
      </Text>
      <Box>
        <Flex direction="column" gap="20px" mb="20px">
          <Flex gap="16px">
            <Avatar h="48px" w="48px" />
            <Flex
              border="2px solid black"
              borderRadius="8px"
              minH="112px"
              w="40%"
              direction="column"
            >
              <Flex p="24px" h="100%">
                Lorem Ipsum Lorem Ipsum
              </Flex>
              <Flex p="8px 14px" justifyContent="flex-end">
                Thomas Anderson
              </Flex>
            </Flex>
            <Flex alignSelf="center" direction="column">
              <Text>12.12.2022</Text>
              <Text>10:20 PM</Text>
            </Flex>
          </Flex>
          <Flex gap="16px">
            <Avatar h="48px" w="48px" />
            <Flex
              border="2px solid black"
              borderRadius="8px"
              minH="112px"
              w="40%"
              direction="column"
            >
              <Flex p="24px" h="100%">
                Lorem Ipsum Lorem Ipsum
              </Flex>
              <Flex p="8px 14px" justifyContent="flex-end">
                Thomas Anderson
              </Flex>
            </Flex>
            <Flex alignSelf="center" direction="column">
              <Text>12.12.2022</Text>
              <Text>10:20 PM</Text>
            </Flex>
          </Flex>
          <Flex gap="16px" flexDirection="row-reverse">
            <Avatar h="48px" w="48px" />
            <Flex
              border="2px solid black"
              borderRadius="8px"
              minH="112px"
              w="40%"
              direction="column"
            >
              <Flex p="24px" h="100%">
                Lorem Ipsum Lorem Ipsum
              </Flex>
              <Flex p="8px 14px" justifyContent="flex-end">
                Thomas Anderson
              </Flex>
            </Flex>
            <Flex alignSelf="center" direction="column">
              <Text>12.12.2022</Text>
              <Text>10:20 PM</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          border="2px solid black"
          borderRadius="8px"
          w="100%"
          h="150px"
          backgroundColor="white"
        ></Box>
      </Box>
      <Flex direction="column" gap="20px">
        <Heading>Conversation Info</Heading>
        <Grid
          gridTemplateRows="repeat(4, min-content)"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="20px"
        >
          <Box>
            <Text fontWeight="600">Case Code</Text>
            <Text>#3779394</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Reason</Text>
            <Text>Payment Not Received</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Date Issued</Text>
            <Text>12.12.2022</Text>
          </Box>
          <Box>
            <Text fontWeight="600">Last Update</Text>
            <Text>12.12.2022</Text>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
}
