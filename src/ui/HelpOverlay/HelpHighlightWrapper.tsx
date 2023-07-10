import { Box, BoxProps } from '@chakra-ui/react';
import React, { useContext, useRef } from 'react';
import { HelpOverlayContext } from './HelpOverlayContext';
import { createPortal } from 'react-dom';

const infoStyles = {
  top: {
    bottom: '100%',
    left: 0,
    transform: 'translateY(-20px)',
  },
  right: {
    top: '50%',
    left: '100%',
    transform: 'translate(20px, -50%)',
  },
  inside: {
    top: '64px',
    left: '20px',
    right: '20px',
  },
};

interface IHelpHighlightWrapperProps {
  info: string | React.ReactNode;
  infoPosition: 'top' | 'right' | 'inside';
  children: React.ReactNode;
} 

export default function HelpHighlightWrapper({
  info,
  infoPosition,
  children,
  ...boxProps
}: IHelpHighlightWrapperProps & BoxProps) {
  const { showOverlay } = useContext(HelpOverlayContext);

  const highlightedContentRef = useRef<HTMLDivElement>(null);
  const position = highlightedContentRef.current?.getBoundingClientRect();

  return (
    <>
      <Box ref={highlightedContentRef} {...boxProps}>{children}</Box>
      {showOverlay &&
        position &&
        createPortal(
          <Box
            border="2px solid white"
            borderRadius="10px"
            position="fixed"
            zIndex={1000}
            fontSize={{ base: "16px", lg: "24px" }}
            top={`${position.top - 5}px`}
            height={`${position.height + 10}px`}
            left={`${position.left - 5}px`}
            width={`${position.width + 10}px`}
          >
            <Box
              color="white"
              position="absolute"
              style={infoStyles[infoPosition]}
            >
              {info}
            </Box>
          </Box>,
          document.body
        )}
    </>
  );
}
