import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { colors } from "../../chakra-overrides/colors";

export const PopupContainer = styled(Box)`
  position: absolute;
  z-index: 10;
  left: calc(100% + 1rem);
  bottom: 72px;

  @media (max-width:520px) {
    left: -0.5rem;
    bottom: 88px;
  }
`;

export const Popup = styled(Flex)`
  flex-direction: column;
  background-color: ${colors.primary[900]};
  border: 2px solid #ffC107;
  width: 400px;
  max-width: 400px;
  height: 528px;
  color: ${colors.secondary[0]};
  overflow: auto;
  border-radius: 12px;
  gap: 16px;
  position: relative;
  padding: 32px 24px 32px 24px;

  @media (max-width:400px) {
    width: calc(100vw - 1rem);
  }
`;
