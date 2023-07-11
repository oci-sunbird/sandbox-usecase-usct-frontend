import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactElement, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { colors } from '../../chakra-overrides/colors';

export default function ScenarioView({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [location]);
  return (
    <Flex
      w="100%"
      height="100%"
      direction="column"
      p={{ base: '4px 16px 0 16px', lg: '16px 64px 0 64px' }}
      flexGrow="1"
      alignItems="center"
      minHeight="0"
    >
      <Flex w="100%" h="100%" direction="column" maxW="1024px">
        <Flex
          alignItems="center"
          height="56px"
          gap="16px"
          borderTopRadius="8px"
          w="100%"
          backgroundColor="#f2f2f2"
          boxShadow="0px 0px 16px rgba(0, 0, 0, 0.25);"
          p="12px 16px"
          zIndex="1"
          boxSizing="border-box"
        >
          <Flex gap="6px">
            <Box
              borderRadius="100%"
              height="16px"
              width="16px"
              backgroundColor={colors.secondary[900]}
            ></Box>
            <Box
              borderRadius="100%"
              height="16px"
              width="16px"
              backgroundColor={colors.secondary[500]}
            ></Box>
            <Box
              borderRadius="100%"
              height="16px"
              width="16px"
              backgroundColor={colors.secondary[300]}
            ></Box>
          </Flex>
          <Flex
            h="32px"
            borderRadius="4px"
            w="100%"
            backgroundColor={colors.secondary[0]}
            alignItems="center"
            textAlign="center"
            justifyContent="center"
          >
            <Text fontSize="12px" color="#9B9B9B;">
              openisland-self-service-welfare.govstack
            </Text>
          </Flex>
        </Flex>
        <Box
          boxShadow="0px 0px 16px rgba(0, 0, 0, 0.25);"
          h="100%"
          borderBottomRadius="16px"
          overflow="auto"
          backgroundColor="#fff"
          position="relative"
          ref={ref}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
