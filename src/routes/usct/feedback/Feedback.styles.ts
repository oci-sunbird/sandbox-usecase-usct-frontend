import { ReactComponent as StarIcon } from "@assets/icons/star.svg";
import styled from "@emotion/styled";
import { colors } from "../../../chakra-overrides/colors";

export const RatingIcon = styled(StarIcon)<{$isSelected?: boolean}>`
  height: 31.7px;
  width: 33.3px;
  transition: all 0.2s;
  
  ${({ $isSelected }) => {
    if ($isSelected) {
      return `color: ${colors.citizen[500]}`;
    }
    return `
      &:hover {
        color: ${colors.secondary[800]};
      }
    `;
  }}
`;
