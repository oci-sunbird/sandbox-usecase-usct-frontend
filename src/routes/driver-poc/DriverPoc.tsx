import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export default function DriverPoc() {
  return (
    <Flex p="120px" minH="100vh" direction="column">
      <Outlet />
    </Flex>
  );
}
