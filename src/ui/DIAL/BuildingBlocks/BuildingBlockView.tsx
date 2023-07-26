import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Link, Slide, Text } from '@chakra-ui/react';
import { buildingBlocksList } from '@ui/Activity/BuildingBlockActivity';
import React, { useContext, useMemo } from 'react';
import { colors } from '../../../chakra-overrides/colors';
import { DIALBuildingBlockContext } from './DIALBuildingBlockContext';
import { bbDescriptionMock } from './buildingBlocksMock';

export default function BuildingBlockView() {
  const { openedBuildingBlock, setOpenedBuildingBlock } = useContext(
    DIALBuildingBlockContext
  );

  const openedBlockData = useMemo(() => {
    return buildingBlocksList.find((bb) => bb.id === openedBuildingBlock);
  }, [openedBuildingBlock]);

  return (
    <>
      {!openedBuildingBlock && (
        <>
          <Box px="16px" py="8px" mt="24px">
            <Text size="sm" fontWeight={600}>
              BUILDING BLOCKS
            </Text>
          </Box>
          <Flex direction="column" gap="4px" px="16px">
            {buildingBlocksList.map((bb) => {
              return (
                <Button
                  p="2px"
                  cursor="pointer"
                  variant="unstyled"
                  textAlign="left"
                  onClick={() => setOpenedBuildingBlock(bb.id)}
                  _hover={{
                    textDecoration: 'underline',
                  }}
                  key={bb.id}
                >
                  <Flex alignItems="center" gap="12px">
                    {React.cloneElement(bb.icon, {
                      height: '24px',
                      width: '24px',
                    })}
                    <Text
                      size="xs"
                      fontWeight={600}
                      flexGrow={1}
                      textTransform="uppercase"
                    >
                      {bb.label}
                    </Text>
                    <ArrowForwardIcon />
                  </Flex>
                </Button>
              );
            })}
          </Flex>
        </>
      )}
      {openedBlockData && (
        <Box position="relative">
          <Slide in={true} direction="right" style={{ position: 'relative' }}>
            <Flex
              p="4px"
              mt="24px"
              mb="20px"
              borderBottom="1px solid white"
              alignItems="center"
              gap="12px"
            >
              {React.cloneElement(openedBlockData.icon, {
                height: '24px',
                width: '24px',
              })}
              <Text size="sm" fontWeight={600} textTransform="uppercase">
                {openedBlockData.label}
              </Text>
            </Flex>
            <Text mb="20px" size="sm" fontWeight={600}>
              Description:
            </Text>
            <Text mb="20px" size="sm">
              {bbDescriptionMock[openedBlockData.id]}
            </Text>
          </Slide>
        </Box>
      )}
      <Box p={!openedBlockData ? '16px' : 0}>
        <Text as="i" size="sm" fontWeight="300">
          For more information about Building Blocks, please visit{' '}
          <Link>Digital Impact Exchange</Link>.
        </Text>
      </Box>
    </>
  );
}
