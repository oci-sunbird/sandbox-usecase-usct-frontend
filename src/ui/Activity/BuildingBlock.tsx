import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';
import { colors } from '../../chakra-overrides/colors';
import { useContext } from 'react';
import { DIALBuildingBlockContext } from '@ui/DIAL/BuildingBlocks/DIALBuildingBlockContext';
import { BUILDING_BLOCK } from '../../routes/usct/utils';

const Icon = ({
  active,
  highlighted,
  tail,
  ...boxProps
}: { active: boolean; highlighted: boolean; tail: boolean } & BoxProps) => {
  if (active) {
    return (
      <Box
        h="12px"
        w="12px"
        borderRadius="100%"
        backgroundColor={colors.secondary[0]}
        mr="1.5rem"
        {...boxProps}
      />
    );
  }
  if (highlighted) {
    return (
      <Box
        h="12px"
        w="12px"
        borderRadius="100%"
        backgroundColor={colors.green[500]}
        mr="1.5rem"
        {...boxProps}
      />
    );
  }
  return (
    <Box color="inherit" mr="1.5rem" {...boxProps}>
      <MinusIcon
        opacity={active ? '1' : '0.5'}
        visibility={tail ? 'hidden' : 'visible'}
      />
    </Box>
  );
};

export default function BuildingBlock({
  label,
  icon,
  active,
  highlighted,
  tail,
  id,
}: {
  label: string;
  icon: React.ReactElement;
  active: boolean;
  highlighted: boolean;
  tail: boolean;
  id: BUILDING_BLOCK;
}) {
  const { openedBuildingBlock, setOpenedBuildingBlock } = useContext(
    DIALBuildingBlockContext
  );

  return (
    <Flex
      alignItems="center"
      w="100%"
      h="40px"
      position="relative"
      onClick={() => setOpenedBuildingBlock(id)}
    >
      <Icon
        active={active}
        highlighted={highlighted}
        tail={tail}
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          height: '50px',
          width: '3px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: tail ? colors.green[500] : 'transparent',
          display: 'block',
          top: '0',
        }}
        _before={{
          position: 'absolute',
          left: '8px',
          width: '0',
          top: '0px',
          content: '""',
          borderWidth: '0 6px 12px 6px',
          borderStyle: 'solid',
          borderColor: highlighted
            ? `transparent transparent ${colors.green[500]}  transparent`
            : 'transparent',
          transform: 'rotate(90deg)',
        }}
      />
      <Box
        transition="opacity 0.3s ease-in-out"
        opacity={active || highlighted ? '1' : '0.5'}
        mr="1rem"
      >
        {icon}
      </Box>
      <Text
        transition="opacity 0.3s ease-in-out"
        opacity={active || highlighted ? '1' : '0.5'}
      >
        {label}
      </Text>
      <Flex
        w="20px"
        alignItems="center"
        justifyContent="center"
        h="20px"
        backgroundColor={
          openedBuildingBlock === id ? 'theme.success' : colors.darkblue[300]
        }
        borderRadius="100%"
        color={colors.secondary[1000]}
        marginLeft="auto"
      >
        i
      </Flex>
    </Flex>
  );
}
