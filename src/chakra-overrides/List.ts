import {
  defineStyle,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system'
import { listAnatomy as parts } from '@chakra-ui/anatomy'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)
  
const sizes = {
  xs: definePartsStyle(() => ({
    container: defineStyle({
      fontSize: '12px',
    })
  })),
  sm: definePartsStyle(() => ({
    container: defineStyle({
      fontSize: '14px',
    })
  })),
  md: definePartsStyle(() => ({
    container: defineStyle({
      fontSize: '16px',
    })
  })),
}

export const List = defineMultiStyleConfig({sizes})

