import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import RPC, { RPCContext } from './rpc';
export default function DriverPoc() {
  return (
    <RPCContext.Provider value={new RPC()}>
      <Flex p="120px" minH="100vh" flexGrow={1} direction="column">
        <Outlet />
      </Flex>
    </RPCContext.Provider>
  );
}
