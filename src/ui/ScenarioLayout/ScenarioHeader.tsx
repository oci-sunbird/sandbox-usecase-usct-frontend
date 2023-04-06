import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh.svg";

export default function ScenarioHeader({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  const navigate = useNavigate();
  return (
    <SimpleGrid
      templateColumns="1fr 3fr 1fr"
      alignItems="center"
      padding="24px 12px"
    >
      <Button
        backgroundColor="transparent"
        border="2px solid black.900"
        borderRadius="8px"
        justifySelf="flex-start"
        display="flex"
        alignItems="center"
        leftIcon={<ChevronLeftIcon fontSize="24px" />}
        as={Link}
        to="/dashboard"
      >
        Exit Scenario
      </Button>
      <Flex gap="16px" justifySelf="center" alignItems="center">
        <Image
          height="40px"
          width="auto"
          src="/govstack-sandbox-logo.svg"
          alt="govstack sandbox logo"
        />
        {children}
      </Flex>
      <Button
        as={Link}
        to="/experience-govstack/USCT"
        variant="ghost"
        leftIcon={<RefreshIcon />}
      >
        RESTART SIMULATION
      </Button>
    </SimpleGrid>
  );
}
