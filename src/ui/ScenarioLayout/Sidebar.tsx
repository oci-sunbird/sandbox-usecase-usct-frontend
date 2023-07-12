import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import BuildingBlockActivity from '@ui/Activity/BuildingBlockActivity';
import HelpHighlightWrapper from '@ui/HelpOverlay/HelpHighlightWrapper';
import React from 'react';
import ContextualHelp from './ContextualHelp';
import HelpButton from '@ui/HelpOverlay/HelpButton';
import { ReactComponent as UploadIcon } from '@assets/icons/upload.svg';
import { ReactComponent as ArrowIcon } from '@assets/icons/arrow.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';

export default function Sidebar() {
  return (
    <Flex
      boxSizing="border-box"
      pt="24px"
      h="100%"
      direction="column"
      overflowY="scroll"
    >
      <HelpHighlightWrapper
        info={
          <>
            Overview of the <b>software component activity</b> (building blocks)
            and their status on the page
          </>
        }
        infoPosition="inside"
        px="24px"
      >
        <Heading mb="0.75rem" size="sm" textAlign="center" variant="caps">
          BUILDING BLOCK ACTIVITY
        </Heading>
        <Text size="sm" mb="1rem">
          Building Blocks are enterprise-ready, reusable software components
          providing functionalities across sectors and use cases.
        </Text>
        <BuildingBlockActivity />
      </HelpHighlightWrapper>

      <Flex
        direction="column"
        position="relative"
        height="100%"
      >
        <Flex justifyContent="space-around" mb="1rem" px="24px">
          <Flex alignItems="center">
            <Box
              h="8px"
              w="8px"
              mr="0.75rem"
              borderRadius="100%"
              backgroundColor="secondary.0"
            />
            <Text size="sm">Active</Text>
          </Flex>
          <Flex alignItems="center">
            <Box mr="0.75rem">
              <MinusIcon />
            </Box>
            <Text size="sm">Inactive</Text>
          </Flex>
        </Flex>
        <Divider
          borderColor="darkblue.300"
          mb="1rem"
        />
        <HelpHighlightWrapper
          info={
            <>
              <b>
                <i>Learn more</i>
              </b>{' '}
              about interactions of the Building Blocks
              <Grid
                position="absolute"
                bottom="calc(100% + 40px)"
                right="calc(100% + 24px)"
              >
                <GridItem>
                  <Flex
                    borderRadius="50%"
                    border="2px solid white"
                    height="64px"
                    w="64px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    A
                  </Flex>
                </GridItem>
                <GridItem colStart={2} rowStart={2}>
                  <ArrowIcon />
                </GridItem>
              </Grid>
              <Text position="absolute" left="0" top="-24px">
                A
              </Text>
            </>
          }
          infoPosition="inside"
          px="24px"
        >
          <ContextualHelp />
        </HelpHighlightWrapper>

        <Divider
          borderColor="darkblue.300"
          mt="auto"
        />
        <Flex px="8px" py="24px" justifyContent="space-between">
          <Button leftIcon={<UploadIcon />} colorScheme="admin">
            SHARE
          </Button>
          <HelpButton />
        </Flex>
      </Flex>
    </Flex>
  );
}
