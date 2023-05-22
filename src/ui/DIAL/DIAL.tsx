import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Slide,
  SlideFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { colors } from "../../chakra-overrides/colors";
import AccordionElement from "./AccordionElement";

export default function DIAL() {
  const { data: buildingBlocks } = useQuery(
    "building-blocks",
    async () => {
      const req = await fetch(
        "https://exchange.dial.global/api/v1/building_blocks"
      );
      const res = await req.json();
      return res;
    },
    { refetchOnWindowFocus: false }
  );
  const { data: sdgs } = useQuery(
    "sdgs",
    async () => {
      const req = await fetch("https://exchange.dial.global/api/v1/sdgs");
      const res = await req.json();
      return res;
    },
    { refetchOnWindowFocus: false }
  );
  const { data: useCases } = useQuery(
    "use-cases",
    async () => {
      const req = await fetch("https://exchange.dial.global/api/v1/use_cases");
      const res = await req.json();
      return res;
    },
    { refetchOnWindowFocus: false }
  );

  const { data: products } = useQuery(
    "products",
    async () => {
      const req = await fetch("https://exchange.dial.global/api/v1/products");
      const res = await req.json();
      return res;
    },
    { refetchOnWindowFocus: false }
  );

  const { data: workflows } = useQuery(
    "workflows",
    async () => {
      const req = await fetch("https://exchange.dial.global/api/v1/workflows");
      const res = await req.json();
      return res;
    },
    { refetchOnWindowFocus: false }
  );

  const { isOpen, onToggle } = useDisclosure();
  const [active, setActive] = useState<null | any>();
  console.log(active);
  return (
    <Box position="absolute" bottom="1rem" left="1rem">
      <Button
        onClick={onToggle}
        h="72px"
        w="72px"
        backgroundColor="black.900542"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="#ffC107"
        colorScheme="admin"
        boxShadow="0px 4px 32px rgba(0, 0, 0, 0.25)"
        borderRadius="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CloseIcon color="#FFC107" display={!isOpen ? "none" : undefined} />
        <Image
          src="/images/digital-impact-alliance-logo.png"
          alt="Digital Impact Alliance Logo"
          display={isOpen ? "none" : undefined}
        />
      </Button>
      <Box
        position="absolute"
        left="calc(100% + 1rem)"
        bottom="72px"
        zIndex={10}
      >
        <SlideFade in={isOpen} offsetY="20px">
          {isOpen && (
            <Flex
              direction="column"
              backgroundColor={colors.primary[900]}
              border="2px solid #ffC107"
              w="400px"
              h="528px"
              color={colors.secondary[0]}
              overflow="auto"
              borderRadius="12px"
              gap="16px"
              position="relative"
            >
              <Flex justifyContent="space-between" padding="16px" pb="0">
                <Text color="theme.light" variant="caps">
                  Catalog of digital solutions
                </Text>
                <Image
                  src="/images/digital-impact-alliance-logo.png"
                  alt="Digital Impact Alliance Logo"
                />
              </Flex>
              <Box position="relative">
                <Slide
                  direction="left"
                  style={{ position: "absolute" }}
                  in={!active}
                  unmountOnExit
                >
                  <Box padding="1rem" pt="0">
                    <Text mb="1rem">
                      The DIAL Exchange promotes a Whole-of-Government approach
                      to investing in digital technologies to achieve the
                      sustainable development goals.
                    </Text>
                    <Accordion allowToggle>
                      <AccordionElement
                        setActive={setActive}
                        title="SUSTAINABLE DEVELOPMENT GOALS"
                        data={sdgs}
                      />
                      <AccordionElement
                        setActive={setActive}
                        title="USE CASES"
                        data={useCases}
                      />
                      <AccordionElement
                        setActive={setActive}
                        title="BUILDING BLOCKS"
                        data={buildingBlocks}
                      />
                      <AccordionElement
                        setActive={setActive}
                        title="WORKFLOWS"
                        data={workflows}
                      />
                      <AccordionItem>
                        <AccordionButton justifyContent="space-between">
                          <Text size="sm">PRODUCTS</Text>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <Text size="sm" mb="1rem">
                            A Product is a specific technology offering that is
                            designed to implement one or more Building Blocks
                          </Text>
                          <Text size="sm">
                            For more information please check{" "}
                            <Link
                              isExternal
                              href="https://exchange-dev.dial.global/products"
                            >
                              DIAL Catalogue
                            </Link>
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </Slide>
                <Slide
                  direction="right"
                  style={{ position: "absolute" }}
                  in={active}
                  unmountOnExit
                >
                  <Box p="1rem">
                    <Button
                      variant="link"
                      colorScheme="light"
                      onClick={() => setActive(null)}
                      leftIcon={<ChevronLeftIcon />}
                    >
                      Back to overview
                    </Button>
                    <Flex direction="column" gap="1rem" mt="1rem">
                      <Heading size="sm">{active?.name}</Heading>
                      {active?.long_title && <Text>{active?.long_title}</Text>}
                      {active?.sdg_targets?.map((target: any) => (
                        <Text size="sm">{target.name}</Text>
                      ))}
                      {active?.building_block_descriptions?.map((el: any) => (
                        <Text
                          key={el.description}
                          dangerouslySetInnerHTML={{ __html: el.description }}
                        />
                      ))}
                      {active?.use_case_descriptions?.map((el: any) => (
                        <Text
                          key={el.description}
                          dangerouslySetInnerHTML={{ __html: el.description }}
                        />
                      ))}
                    </Flex>
                  </Box>
                </Slide>
              </Box>
            </Flex>
          )}
        </SlideFade>
      </Box>
    </Box>
  );
}
