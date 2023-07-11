import { Box, Button, position } from '@chakra-ui/react';
import React, { useContext, useRef } from 'react';
import { ReactComponent as LightbulbIcon } from '@assets/icons/lightbulb.svg';
import { HelpOverlayContext } from './HelpOverlayContext';
import { createPortal } from 'react-dom';

export default function HelpButton() {
  const { showOverlay, setShowOverlay } = useContext(HelpOverlayContext);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const position = buttonRef.current?.getBoundingClientRect();

  return (
    <>
      <Button
        ref={buttonRef}
        leftIcon={
          <Box _groupHover={{ color: 'theme.success' }}>
            <LightbulbIcon />
          </Box>
        }
        data-group
        colorScheme="admin"
        onClick={() => setShowOverlay(true)}
      >
        SHOW HELP
      </Button>
      {showOverlay &&
        position &&
        createPortal(
          <Button
            leftIcon={<LightbulbIcon />}
            position="fixed"
            zIndex={1000}
            top={`${position.top}px`}
            left={`${position.left}px`}
            onClick={() => setShowOverlay(false)}
            colorScheme="primary"
            px="8px"
          >
            CLOSE HELP
          </Button>,
          document.body
        )}
    </>
  );
}
