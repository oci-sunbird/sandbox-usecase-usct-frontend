import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import { ContextualHelpContext } from '../../routes/usct/ContextualHelpContext';
import { getContextContent } from '../../routes/usct/ContextualHelpUtils';
import { SimulationContext } from '../../routes/usct/USCT';

export default function ContextualHelp() {
  const { activeLetter, setActiveLetter, letterContextualTitleMap } =
    useContext(ContextualHelpContext);
  const { state: simulationState } = useContext(SimulationContext);

  const activeContent = useMemo(() => {
    if (activeLetter && letterContextualTitleMap) {
      return getContextContent(
        letterContextualTitleMap[activeLetter],
        simulationState.userType
      );
    }
  }, [activeLetter]);

  console.log(letterContextualTitleMap);

  return (
    <Box>
      {activeContent ? (
        <Flex direction="column">
          <Flex></Flex>
          {activeContent.diagram}
          <UnorderedList>
            {activeContent.bulletpoints.map((bulletpoint) => {
              return (
                <ListItem>
                  <Text>{bulletpoint}</Text>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Flex>
      ) : (
        <>
          <Text size="sm" mb="12px">
            Generic Processes and interactions of Building Blocks. These are
            generic processes that are used in here can be used on various use
            cases.
          </Text>
          {letterContextualTitleMap && (
            <>
              {Object.entries(letterContextualTitleMap).map(
                ([letter, title]) => {
                  return (
                    <Button
                      w="100%"
                      variant="unstyled"
                      display="flex"
                      alignItems="center"
                      gap="8px"
                      py="12px"
                      onClick={() => setActiveLetter(letter)}
                    >
                      <Flex
                        height="24px"
                        width="24px"
                        bg="green.200"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="50%"
                        color="secondary.1000"
                        fontSize="14px"
                      >
                        {letter}
                      </Flex>
                      <Text
                        textAlign="left"
                        flexGrow={1}
                        size="sm"
                        fontWeight="600"
                      >
                        {title}
                      </Text>
                      <Text size="sm" color="secondary.500" fontWeight="600">
                        LEARN MORE
                      </Text>
                    </Button>
                  );
                }
              )}
            </>
          )}
        </>
      )}
    </Box>
  );
}
