import { ReactComponent as StarIcon } from '@assets/icons/star.svg';
import { Box, Button, Flex, Heading, Text, Textarea } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ActiveBuildingBlockContext } from '../USCT';
import { BUILDING_BLOCK } from '../utils';
import Tooltip from '@ui/Tooltip/Tooltip';

export default function Feedback() {
  const { setActiveBuildingBlocks } = useContext(ActiveBuildingBlockContext);

  useEffect(() => {
    setActiveBuildingBlocks({
      [BUILDING_BLOCK.CONSENT]: false,
      [BUILDING_BLOCK.AUTHENTICATION]: false,
      [BUILDING_BLOCK.INFORMATION_MEDIATOR]: true,
      [BUILDING_BLOCK.DIGITAL_REGISTRIES]: true,
      [BUILDING_BLOCK.MESSAGING]: true,
      [BUILDING_BLOCK.PAYMENT]: false,
      [BUILDING_BLOCK.REGISTRATION]: false,
      [BUILDING_BLOCK.SCHEDULING]: false,
      [BUILDING_BLOCK.WORKFLOW]: true,
    });
  }, []);
  return (
    <Box w="100%" pt="80px">
      <Tooltip letter="A">
        <Heading mb="20px">Thank you for your time!</Heading>
        <Text>How would you rate your experience with our service?</Text>
        <Flex py="40px" justifyContent="center" gap="10px">
          <Flex direction="column" alignItems="flex-end">
            <StarIcon />
            <Text size="sm" color="secondary.900">
              Unsatisfied
            </Text>
          </Flex>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <Flex direction="column">
            <StarIcon />
            <Text size="sm" color="secondary.900">
              Pleased
            </Text>
          </Flex>
        </Flex>
        <Text fontWeight="bold" mb="4px">
          Let us know more about your experience (Optional)
        </Text>
        <Textarea
          resize="none"
          borderColor="secondary.1000"
          mb="24px"
        ></Textarea>
        <Flex gap="12px" justifyContent="flex-end">
          <Button colorScheme="citizen" variant="outline">
            Skip
          </Button>
          <Button colorScheme="citizen">Submit Feedback</Button>
        </Flex>
      </Tooltip>
    </Box>
  );
}
