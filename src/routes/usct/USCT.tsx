import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import ScenarioLayout from "../../ui/ScenarioLayout/ScenarioLayout";
import Header from "./Header";

export default function USCT() {
  return (
    <ScenarioLayout view="mobile">
      <Flex direction="column" height="100%">
        <Header />
        <Flex
          paddingRight="80px"
          paddingLeft="80px"
          paddingBottom="80px"
          flexGrow="1"
          gap="125px"
        >
          <Outlet />
        </Flex>
      </Flex>
    </ScenarioLayout>
  );
}
