import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: "Inter",
    color: "inherit",
    fontWeight: 700,
  },
  sizes: {
    lg: {
      fontSize: "36px",
      lineHeight: "48px",
    },
    md: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    sm: {
      fontSize: "18px",
      lineHeight: "24px",
    },
  },
});
