import {
  defineStyle,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system'
import { accordionAnatomy as parts } from '@chakra-ui/anatomy'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)
  
const sizes = {
  xs: definePartsStyle(() => ({
    panel: defineStyle({
      fontSize: '12px',
    })
  })),
  sm: definePartsStyle(() => ({
    panel: defineStyle({
      fontSize: '14px',
    })
  })),
  md: definePartsStyle(() => ({
    panel: defineStyle({
      fontSize: '16px',
    })
  })),
}

export const Accordion = defineMultiStyleConfig({sizes})

