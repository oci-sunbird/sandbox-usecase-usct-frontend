import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../chakra-overrides/colors";

function Tooltip({
  children,
  letter,
  inset,
}: {
  children: React.ReactElement[] | React.ReactElement;
  letter: string;
  inset?: string;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <Box
      display="contents"
      _after={{
        content: `""`,
        border: `5px dashed ${colors.green[400]}`,
        position: "absolute",
        inset: "-8px",
        borderRadius: "8px",
        pointerEvents: "none",
      }}
    >
      {children}
      <Flex
        position="absolute"
        width="34px"
        height="34px"
        borderRadius="100%"
        backgroundColor={colors.green[400]}
        inset="-45px -8px auto auto"
        color={colors.secondary[1000]}
        alignItems="center"
        justifyContent="center"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        cursor="pointer"
        zIndex="1"
      >
        <Text>{letter}</Text>
        {/* {visible && (
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
        )} */}
      </Flex>
    </Box>
  );
}

export default Tooltip;
