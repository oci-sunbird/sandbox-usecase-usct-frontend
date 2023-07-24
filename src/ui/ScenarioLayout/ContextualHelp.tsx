import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { colors } from '../../chakra-overrides/colors';
import { ContextualHelpContext } from '../../routes/usct/ContextualHelpContext';
import { getContextContent } from '../../routes/usct/ContextualHelpUtils';
import { SimulationContext } from '../../routes/usct/USCT';

export default function ContextualHelp() {
  const {
    activeLetter,
    setActiveLetter,
    letterContextualTitleMap,
    setActiveContent,
  } = useContext(ContextualHelpContext);
  const location = useLocation();
  const { state: simulationState } = useContext(SimulationContext);

  const activeContent = useMemo(() => {
    if (activeLetter && letterContextualTitleMap) {
      return getContextContent(
        letterContextualTitleMap[activeLetter],
        simulationState.userType
      );
    }
    return null;
  }, [activeLetter]);

  useEffect(() => {
    setActiveLetter(null);
    setActiveContent(null);
  }, [location]);

  useEffect(() => {
    setActiveContent(activeContent);
  }, [activeContent]);
  return (
    <Box h="100%">
      <Text size="sm" mb="12px">
        Generic Processes and interactions of Building Blocks.
        These are generic processes that are used in here and can be used on various use cases.
      </Text>
      {letterContextualTitleMap && (
        <>
          {Object.entries(letterContextualTitleMap).map(([letter, title]) => {
            return (
              <Button
                key={letter}
                w="calc(100% + 24px)"
                variant="unstyled"
                display="flex"
                alignItems="center"
                gap="8px"
                p="12px"
                onClick={() => setActiveLetter(letter)}
                height="auto"
                _hover={{
                  backgroundColor: colors.darkblue[400],
                }}
                data-group
                mr="-12px"
                ml="-12px"
              >
                <Flex
                  height="24px"
                  width="24px"
                  bg="green.200"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="100%"
                  color="secondary.1000"
                  fontSize="14px"
                  flexShrink={0}
                >
                  {letter}
                </Flex>
                <Text
                  textAlign="left"
                  flexGrow={1}
                  size="sm"
                  fontWeight="600"
                  whiteSpace="normal"
                >
                  {title}
                </Text>
                <Text
                  size="xs"
                  variant="caps"
                  color="secondary.500"
                  fontWeight="600"
                  _groupHover={{
                    color: colors.secondary[0],
                  }}
                >
                  LEARN MORE
                </Text>
              </Button>
            );
          })}
        </>
      )}
      <Box
        overflow="hidden"
        position="absolute"
        top={activeContent ? '0' : '90%'}
        visibility={activeContent ? 'visible' : 'hidden'}
        zIndex={5}
        transition="top 0.3s ease-in-out"
        bottom={activeContent ? '0' : 'auto'}
        right="0"
        left="0"
        backgroundColor={colors.primary[900]}
        padding="24px"
        borderColor={colors.green[500]}
        borderTopWidth="2px"
        _after={{
          position: 'absolute',
          left: '22px',
          width: '0',
          top: '0px',
          content: '""',
          borderWidth: '0 8px 16px 8px',
          borderStyle: 'solid',
          borderColor: `transparent transparent ${colors.green[500]}  transparent`,
          transform: 'rotate(180deg)',
        }}
        overflowY="scroll"
        sx={{
          '&::-webkit-scrollbar': {
            w: '7px',
          },
          '&::-webkit-scrollbar-track': {
            w: '2px',
          },
          '&::-webkit-scrollbar-thumb': {
            width: '20px',
            borderRadius: '10',
            backgroundColor: `#2bc582`,
          },
          
          scrollbarWidth: "thin",
          scrollbarColor: "#2bc582 transparent",
        }}
      >
        {activeContent && (
          <>
            <Flex
              mb="12px"
              gap="8px"
              alignItems="center"
            >
              <Flex
                height="24px"
                width="24px"
                bg="green.400"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
                color="secondary.1000"
                fontSize="14px"
              >
                {activeLetter}
              </Flex>
              <Text size="sm" fontWeight="600">
                {activeContent.title}
              </Text>
              <IconButton
                ml="auto"
                aria-label="Close active building block insight"
                backgroundColor="transparent"
                borderRadius="100%"
                colorScheme="admin"
                icon={<CloseIcon />}
                onClick={() => {
                  setActiveLetter(null);
                }}
              />
            </Flex>
            <Box mx="-24px">
              <activeContent.diagram height="auto" width="100%" />
            </Box>
            <UnorderedList pt="12px" pb="24px">
              {activeContent.bulletpoints.map((bulletpoint, index) => {
                return (
                  <ListItem key={index}>
                    <Text size="sm">{bulletpoint}</Text>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </>
        )}
      </Box>
    </Box>
  );
}
