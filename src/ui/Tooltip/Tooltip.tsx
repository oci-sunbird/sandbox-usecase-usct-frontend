import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../chakra-overrides/colors";

function Tooltip({
  children,
  content,
  letter,
}: {
  children: React.ReactElement[] | React.ReactElement;
  content: string;
  letter: string;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <Box display="contents">
      {children}
      <Flex
        position="absolute"
        width="48px"
        height="48px"
        borderRadius="100%"
        backgroundColor={colors.green[400]}
        left="calc(100% + 16px)"
        top="50%"
        color={colors.secondary[1000]}
        alignItems="center"
        justifyContent="center"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        cursor="pointer"
      >
        {letter}
        {visible && (
          <Box
            backgroundColor={colors.green[400]}
            w="250px"
            position="absolute"
            left="calc(100% + 16px)"
            padding="16px"
            borderRadius="8px"
          >
            {content}
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default Tooltip;
