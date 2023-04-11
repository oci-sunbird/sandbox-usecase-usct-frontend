import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Fade, Flex, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { colors } from "../../chakra-overrides/colors";

export default function DIAL() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const f = async () => {
      const req = await fetch('https://exchange.dial.global/api/v1/building_blocks');
      const res = await req.json();
      setData(res.results);
    };
    f();
  }, []);
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
          <Box position="absolute" color="#FFC107" bottom="24px" left="24px"><CloseIcon /></Box>
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
        <Fade in={open}>
          <Flex
          direction="column"
            backgroundColor={colors.primary[900]}
            position="absolute"
            left="100%"
            bottom="100%"
            border="1px solid black"
            w="300px"
            h="400px"
            color={colors.black[0]}
            padding="16px"
            overflow="auto"
            gap="16px"
          >
            {data.map((result: any) => {
              return <Heading key={result.self_url} size="sm">{result.name}</Heading>
            })}
          </Flex>
        </Fade>
      )}
    </Box>
  );
}
