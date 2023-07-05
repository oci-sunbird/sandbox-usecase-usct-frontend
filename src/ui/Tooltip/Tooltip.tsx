import { Box, Flex, Text, BoxProps } from '@chakra-ui/react';
import React, { useState } from 'react';
import { colors } from '../../chakra-overrides/colors';

function Tooltip({
  children,
  letter,
  letterPosition = 'right-corner',
  ...boxProps
}: {
  letter: string;
  letterPosition?: 'top' | 'right-corner' | 'right-center';
} & BoxProps) {
  const [visible, setVisible] = useState(false);

  const letterPositionProps = {
    top: {
      top: "-45px",
      right: "-8px",  
    },
    'right-corner': {
      top: "-8px",
      right: "-45px", 
    },
    'right-center': {
      right: "-45px",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }

  return (
    <Box
      position="relative"
      _after={{
        content: `""`,
        border: `5px dashed ${colors.green[400]}`,
        position: 'absolute',
        inset: '-8px',
        borderRadius: '8px',
        pointerEvents: 'none',
      }}
      {...boxProps}
    >
      {children}
      <Flex
        position="absolute"
        width="34px"
        height="34px"
        borderRadius="100%"
        backgroundColor={colors.green[400]}
        color={colors.secondary[1000]}
        alignItems="center"
        justifyContent="center"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        cursor="pointer"
        zIndex="1"
        {...letterPositionProps[letterPosition]}
      >
        <Text>{letter}</Text>
      </Flex>
    </Box>
  );
}

export default Tooltip;
