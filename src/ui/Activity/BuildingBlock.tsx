import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { colors } from "../../chakra-overrides/colors";

export default function BuildingBlock({
  label,
  icon,
  active,
}: {
  label: string;
  icon: React.ReactElement;
  active: boolean;
}) {
  return (
    <Flex alignItems="center" w="100%" h="40px">
      {active ? (
        <Box
          h="12px"
          w="12px"
          borderRadius="100%"
          backgroundColor={colors.secondary[0]}
          mr="1.5rem"
        />
      ) : (
        <Box opacity={active ? "1" : "0.5"} color="inherit" mr="1.5rem">
          <MinusIcon />
        </Box>
      )}

      <Box opacity={active ? "1" : "0.5"} mr="1rem">
        {icon}
      </Box>
      <Text opacity={active ? "1" : "0.5"}>{label}</Text>
      <Flex
        w="20px"
        alignItems="center"
        justifyContent="center"
        h="20px"
        backgroundColor={colors.darkblue[300]}
        borderRadius="100%"
        color={colors.secondary[1000]}
        marginLeft="auto"
      >
        i
      </Flex>
    </Flex>
  );
}
