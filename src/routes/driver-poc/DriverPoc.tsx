import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import RPC from "./rpc";
export default function DriverPoc() {
  const rpc = new RPC({});
  useEffect(() => {
    rpc.getPackages();
  }, []);
  return (
    <Flex p="120px" minH="100vh" direction="column">
      <Outlet />
    </Flex>
  );
}
