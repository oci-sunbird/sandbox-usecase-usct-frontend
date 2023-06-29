import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ReactComponent as TimerIcon } from '@assets/icons/timer.svg';
import { ReactComponent as FileWarningIcon } from '@assets/icons/file-warning.svg';
import Alert from '@ui/Alert/Alert';

const getActionAlertProps = (state: string | null) => {
  switch (state) {
    case 'done':
      return {
        icon: <TimerIcon color="white" />,
        content: (
          <Text>
            Candidate is eligible for unconditional cash transfer program.
          </Text>
        ),
        actions: (
          <Button
            colorScheme="admin"
            marginLeft="auto"
            as={Link}
            to="../info?done=true"
          >
            Request to Assign the Candidate
          </Button>
        ),
      };

    case 'scheduling':
      return {
        icon: <TimerIcon color="white" />,
        content: (
          <Text>
            Scheduling the payment required for candidate to enroll in the
            program.
          </Text>
        ),
        actions: (
          <Flex direction="column" marginLeft="auto" gap="10px">
            <Flex gap="10px">
              <Input placeholder="00/00/23" />
              <Button>O</Button>
            </Flex>
            <Button colorScheme="admin" as={Link} to="../active-program">
              Enroll Into the Program
            </Button>
          </Flex>
        ),
      };

    default:
      return {
        icon: <FileWarningIcon color="white" height="32px" width="32px" />,
        content: (
          <Text>
            Additional validation is required from <br /> applicant to decide
            edibility.
          </Text>
        ),
        actions: (
          <Button
            leftIcon={<FileWarningIcon color="white" height="20px" width="20px" />}
            marginLeft="auto"
            colorScheme="admin"
            as={Link}
            to="../authorise-citizen"
          >
            Ask For Validation
          </Button>
        ),
      };
  }
};

export const ActionAlert = ({ state }: { state: string | null }) => {
  return (
    <Alert {...getActionAlertProps(state)} />
  );
};
