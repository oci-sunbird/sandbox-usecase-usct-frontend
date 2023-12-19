import { ReactComponent as CheckIcon } from "@assets/icons/check.svg";
import { ReactComponent as X } from "@assets/icons/x.svg";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { colors } from "../../../chakra-overrides/colors";
import { ConsentStatus } from "../../driver-poc/types";

interface ConsentStatusProps {
  status: ConsentStatus | null;
}

const statusConfig = {
  [ConsentStatus.GRANTED]: {
    icon: CheckIcon,
    title: "Granted",
    color: colors.theme.success,
  },
  [ConsentStatus.NOT_GRANTED]: {
    icon: X,
    title: "Not Granted",
    color: colors.info[600],
  }
}

export function ConsentTag({ status }: ConsentStatusProps) {
  switch (status) {
    default:
      return (
        <Tag textColor="#FFFFFF" variant='subtle' backgroundColor={statusConfig[ConsentStatus.NOT_GRANTED].color}>
          <TagLeftIcon boxSize='12px' as={statusConfig[ConsentStatus.NOT_GRANTED].icon} />
          <TagLabel>{statusConfig[ConsentStatus.NOT_GRANTED].title}</TagLabel>
        </Tag>
      );
    case ConsentStatus.GRANTED:
      return (
        <Tag textColor="#FFFFFF" variant='subtle' backgroundColor={statusConfig[status].color}>
          <TagLeftIcon boxSize='12px' as={statusConfig[status].icon} />
          <TagLabel>{statusConfig[status].title}</TagLabel>
        </Tag>
      );
  }
}