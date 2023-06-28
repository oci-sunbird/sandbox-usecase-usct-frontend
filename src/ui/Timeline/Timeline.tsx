import { Box, Flex, Grid, GridItem, Text, space } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { ReactComponent as CheckIcon } from '@assets/icons/check.svg';

interface ITimelineEvent {
  name: string;
  date: string;
  info?: string;
  completed?: boolean;
}

interface ITimelineProps {
  icon: JSX.Element;
  title: string;
  events?: ITimelineEvent[];
}

const lineStyles = {
  content: "''",
  position: 'absolute',
  left: '50%',
  width: '4px',
  bg: 'secondary.400',
  transform: 'translateX(-50%)',
};

export default function Timeline({ icon, title, events }: ITimelineProps) {
  const disabled = !events?.length;
  const allCompleted = !disabled && events.every((e) => e.completed);

  const iconBackGround = () => {
    if (allCompleted) {
      return 'secondary.1000';
    }
    if (disabled) {
      return 'theme.light';
    }
    return 'secondary.0';
  };

  return (
    <Grid templateColumns="36px auto" templateRows="36px" gap="24px">
      <GridItem
        position="relative"
        zIndex="1"
        _before={
          !disabled
            ? {
                ...lineStyles,
                top: '50%',
                bottom: '-12px',
                zIndex: -1,
              }
            : undefined
        }
      >
        <Flex
          borderRadius="50%"
          h="100%"
          borderWidth="2px"
          borderStyle="solid"
          borderColor={disabled ? 'secondary.800' : 'secondary.1000'}
          background={iconBackGround()}
          alignItems="center"
          justifyContent="center"
        >
          {allCompleted ? (
            <CheckIcon color="var(--chakra-colors-secondary-0)" />
          ) : (
            React.cloneElement(icon, {
              color: disabled
                ? 'var(--chakra-colors-secondary-800)'
                : 'var(--chakra-colors-secondary-1000)',
            })
          )}
        </Flex>
      </GridItem>
      <GridItem alignSelf="center">
        <Text size="lg" fontWeight="bold">
          {title}
        </Text>
      </GridItem>
      {events?.map((event, index) => (
        <Fragment key={event.name}>
          <GridItem
            position="relative"
            _before={{
              ...lineStyles,
              top: '-12px',
              bottom: index < events.length - 1 ? '-12px' : '50%',
            }}
            _after={{
              content: "''",
              boxSizing: 'border-box',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              height: '12px',
              width: '12px',
              border: '2px solid var(--chakra-colors-secondary-1000)',
              bg: event.completed ? 'secondary.1000' : 'secondary.0',
            }}
          ></GridItem>
          <GridItem>
            <Flex
              justifyContent="space-between"
              flexDirection={{ sm: 'column', xl: 'row' }}
            >
              <Box>
                <Text>{event.name}</Text>
                <Text fontSize="12" fontWeight="600">
                  {event.info}
                </Text>
              </Box>
              <Text size="sm">{event.date}</Text>
            </Flex>
          </GridItem>
        </Fragment>
      ))}
    </Grid>
  );
}
