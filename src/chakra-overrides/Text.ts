import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: 'Inter',
    color: 'inherit',
    fontWeight: 400,
  },
  variants: {
    bold: {
      fontWeight: 600,
    },
    caps: {
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  },
  sizes: {
    xxs: {
      fontSize: '10px',
      lineHeight: '14px',
    },
    xs: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    sm: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    md: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    lg: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
  defaultProps: {
    size: 'md',
  },
});
