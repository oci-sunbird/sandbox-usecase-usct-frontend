import { Box, Button, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function DIAL() {
  const [open, setOpen] = useState(false);
  return (
    <Box position="relative">
      <Button
        onClick={() => setOpen(!open)}
        h="92px"
        w="92px"
        backgroundColor="black.900542"
        borderWidth="1px 1px 0px 0px"
        borderStyle="solid"
        borderColor="#FFC107"
        colorScheme="admin"
        boxShadow="0px 4px 32px rgba(0, 0, 0, 0.25)"
        borderRadius="0px 152px 0px 0px"
        position="relative"
      >
        {open ? (
          <>X</>
        ) : (
          <Image
            position="absolute"
            bottom="24px"
            left="12px"
            src="/images/digital-impact-alliance-logo.svg"
            alt="Digital Impact Alliance Logo"
          />
        )}
      </Button>
      {open && (
        <Box
          backgroundColor="red"
          position="absolute"
          left="100%"
          bottom="100%"
          border="1px solid black"
          w="300px"
          h="400px"
        ></Box>
      )}
    </Box>
  );
}
