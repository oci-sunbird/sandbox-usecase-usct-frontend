import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Grid templateColumns="3fr 1fr" h="100%">
      <Flex paddingTop="128px" gap="64px" direction="column" paddingLeft="110px" paddingRight="80px" alignItems="center">
        <Text fontSize="4xl" textAlign="center">
          <strong>Open Sandbox</strong> is a{" "}
          <strong>free and public demo</strong> to{" "}
          <strong>try, test (and break)</strong> Govstack. It's simulating parts
          of a synthetic governmental eService system - the government of Open
          Island.
        </Text>
        <Flex direction="column" gap="16px" alignItems="center">
          <Button backgroundColor="main.900" color="main.0" as={Link} to="/sign-up">
            Enter Open Island now
          </Button>
          <Text>
            It's <strong>free</strong> and only takes one minute to get started!
          </Text>
        </Flex>
      </Flex>
      <Box height="100%" backgroundColor="main.100">
        //stuff here
      </Box>
    </Grid>
  );
}
