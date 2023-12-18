import { ReactComponent as CheckIcon } from "@assets/icons/check.svg";
import { ReactComponent as X } from "@assets/icons/x.svg";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { colors } from "../../../chakra-overrides/colors";
import { ConsentStatus } from "../../driver-poc/types";

interface ConsentStatusProps {
  status: ConsentStatus;
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
  return (
    <Tag textColor="#FFFFFF" variant='subtle' backgroundColor={statusConfig[status].color}>
      <TagLeftIcon boxSize='12px' as={statusConfig[status].icon} />
      <TagLabel>{statusConfig[status].title}</TagLabel>
    </Tag>
  );
}