import { Flex } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import RPC, { RPCContext } from './rpc';
import { useAuthentication } from './useAuthentication';
export default function DriverPoc() {
  const { isAuthenticated } = useAuthentication();
  if (!isAuthenticated()) {
    return <Navigate to="/driver-poc/login" />;
  }
  return (
    <RPCContext.Provider value={new RPC()}>
      <Flex p="120px" minH="100vh" flexGrow={1} direction="column">
        <Outlet />
      </Flex>
    </RPCContext.Provider>
  );
}
