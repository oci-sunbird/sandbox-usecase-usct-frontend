import {
  Box,
  Center,
  CircularProgress,
  Fade,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function FakeLoader({
  children,
  label,
  override,
}: {
  children: React.ReactElement;
  label: string;
  override?: boolean;
}) {
  const [loader, setLoader] = useState<boolean>(
    override === undefined ? true : override
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Fade in={loader} unmountOnExit>
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          backgroundColor="#fff"
        >
          <Center h="100%">
            <VStack>
              <CircularProgress isIndeterminate size={50} />
              <Text variant="caps" size="lg">
                {label}
              </Text>
            </VStack>
          </Center>
        </Box>
      </Fade>
      {!loader && children}
    </>
  );
}
