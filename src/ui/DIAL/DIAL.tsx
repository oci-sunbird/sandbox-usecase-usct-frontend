import { ArrowForwardIcon, ChevronLeftIcon, CloseIcon } from '@chakra-ui/icons';
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
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { colors } from '../../chakra-overrides/colors';
import AccordionElement from './AccordionElement';
import { DIALBuildingBlockContext } from './BuildingBlocks/DIALBuildingBlockContext';
import BuildingBlockView from './BuildingBlocks/BuildingBlockView';
import { SimulationContext } from '../../routes/usct/USCT';
import { Popup, PopupContainer } from './Dial.styles';

export default function DIAL() {
  const { data: buildingBlocks } = useQuery(
    'building-blocks',
    async () => {
      const req = await fetch(
        'https://exchange.dial.global/api/v1/building_blocks'
      );
      const res = await req.json();
      return res;
    },
    { refetchOnWindowFocus: false }
  );
  const { data: sdgs } = useQuery(
    'sdgs',
    async () => {
      const req = await fetch('https://exchange.dial.global/api/v1/sdgs');
      const res = await req.json();
      return res;
    },
    { refetchOnWindowFocus: false }
  );
  const { data: useCases } = useQuery(
    'use-cases',
    async () => {
      const req = await fetch('https://exchange.dial.global/api/v1/use_cases');
      const res = await req.json();
      const filteredRes = {
        ...res,
        results: res.results.filter(
          (result: any) => result.maturity === 'PUBLISHED'
        ),
      };
      return filteredRes;
    },
    { refetchOnWindowFocus: false }
  );

  const { data: workflows } = useQuery(
    'workflows',
    async () => {
      const req = await fetch('https://exchange.dial.global/api/v1/workflows');
      const res = await req.json();
      return res;
    },
    { refetchOnWindowFocus: false }
  );

  const { openedBuildingBlock, setOpenedBuildingBlock } = useContext(
    DIALBuildingBlockContext
  );

  useEffect(() => {
    if (openedBuildingBlock) {
      onOpen();
      setActive({ type: 'BUILDING_BLOCKS' });
    }
  }, [openedBuildingBlock]);

  const { isOpen, onToggle, onOpen } = useDisclosure();
  const { state, dispatch } = useContext(SimulationContext);
  const [active, setActive] = useState<null | any>();

  return (
    <Box position="absolute" bottom="1rem" left="1rem">
      <Button
        onClick={() => { onToggle(); setOpenedBuildingBlock(null) }}
        h="72px"
        w="72px"
        backgroundColor="secondary.1000"
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
        <CloseIcon color="#FFC107" display={!isOpen ? 'none' : undefined} />
        <Image
          src="/images/digital-impact-alliance-logo.png"
          alt="Digital Impact Alliance Logo"
          display={isOpen ? 'none' : undefined}
        />
      </Button>
      <PopupContainer>
        <Slide
          direction='bottom'
          in={isOpen}
          style={{position: 'relative', transition: 'all 0.2s ease-out'}}
          unmountOnExit
        >
          {isOpen && (
            <Popup>
              <Flex justifyContent="space-between" pb="0">
                <Text maxW="60%" color="theme.light" variant="caps">
                  Catalog of digital solutions
                </Text>
                <Image
                  w="84px"
                  h="24px"
                  src="/images/digital-impact-alliance-logo.png"
                  alt="Digital Impact Alliance Logo"
                />
              </Flex>
              <Box position="relative">
                <Slide
                  direction="left"
                  style={{ position: 'absolute' }}
                  in={!active}
                  unmountOnExit
                >
                  <Box>
                    <Text mb="1rem" size="sm" color={colors.secondary[500]}>
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
                      <AccordionItem>
                        <AccordionButton justifyContent="space-between">
                          <Text size="sm">USE CASES</Text>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <Text size="sm" mb="1rem">
                            A Use Case defines the steps that an individual or
                            system will undertake in order to achieve a business
                            objective.
                          </Text>
                          <Text size="sm">
                            For more information please check{' '}
                            <Link
                              isExternal
                              href="https://exchange-dev.dial.global/use_cases"
                            >
                              DIAL Catalogue
                            </Link>
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionButton justifyContent="space-between">
                          <Text size="sm">BUILDING BLOCKS</Text>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <Text size="sm" mb="1rem">
                            Building blocks are enterprise-ready, reusable
                            software components providing key functionality
                            facilitating generic WorkFlows across multiple
                            sectors.
                          </Text>
                          <Text size="sm">
                            <Button
                              variant="unstyled"
                              onClick={() =>
                                setActive({ type: 'BUILDING_BLOCKS' })
                              }
                            >
                              List of Building Blocks <ArrowForwardIcon />
                            </Button>
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
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
                            For more information please check{' '}
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
                  style={{ position: 'absolute' }}
                  in={active}
                  unmountOnExit
                >
                  <Box pt="16px">
                    <Button
                      variant="link"
                      colorScheme="light"
                      onClick={() => {
                        setActive(null);
                        setOpenedBuildingBlock(null);
                      }}
                      leftIcon={<ChevronLeftIcon />}
                    >
                      Back to overview
                    </Button>
                    {active?.type === 'BUILDING_BLOCKS' && <BuildingBlockView />}
                    {active?.type !== 'BUILDING_BLOCKS' && (
                      <Flex direction="column" gap="1rem" mt="1rem">
                        <Heading size="sm">{active?.name}</Heading>
                        {active?.long_title && (
                          <Text>{active?.long_title}</Text>
                        )}
                        {active?.sdg_targets?.map((target: any) => (
                          <Text size="sm">{target.name}</Text>
                        ))}
                        {active?.use_case_descriptions?.map((el: any) => (
                          <Text
                            key={el.description}
                            dangerouslySetInnerHTML={{ __html: el.description }}
                          />
                        ))}
                        {active?.description &&
                          JSON.parse(active.description).ops.map(
                            (op: any, index: number) => (
                              <Text
                                key={index}
                                variant={op?.attributes?.bold && 'bold'}
                              >
                                {op.insert}
                              </Text>
                            )
                          )}
                      </Flex>
                    )}
                  </Box>
                </Slide>
              </Box>
            </Popup>
          )}
        </Slide>
      </PopupContainer>
    </Box>
  );
}
