import { Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useNavigation } from "react-router-dom";

export default function ScenarioHeader({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  const { location } = useNavigation();
  return (
    <SimpleGrid templateColumns="1fr" alignItems="center" padding="24px 12px">
      {/* <Button
        justifySelf="flex-start"
        display="flex"
        leftIcon={<ChevronLeftIcon />}
        as={Link}
        colorScheme="light"
        to="/dashboard"
        variant="outline"
      >
        Exit
      </Button> */}
      <Flex gap="16px" justifySelf="center" alignItems="center">
        <Image
          height="40px"
          width="auto"
          src="/govstack-sandbox-logo.svg"
          alt="govstack sandbox logo"
        />
        {children}
      </Flex>
    </SimpleGrid>
  );
}
