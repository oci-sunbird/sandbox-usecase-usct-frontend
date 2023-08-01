import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {},
  sizes: {
    lg: {
      fontSize: '18px',
    },
    md: {
      fontSize: '16px',
    },
    sm: {
      fontSize: '14px',
    },
  },
  variants: {
    ghost: {},
    outline: {},
    solid: {},
  },
});
