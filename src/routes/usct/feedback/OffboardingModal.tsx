import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Text,
  extendTheme,
  ChakraProvider,
  Link,
} from "@chakra-ui/react";
import { colors } from "../../../chakra-overrides/colors";
import { ModalFlex } from "./OffboardingModal.styles";

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: () => ({
        dialog: {
          width: "100%",
          maxWidth: ["528px", "528px", "528px"],
          minWidth: "240px",
          bg: "#FFFFFF",
          borderRadius: "16px",
          border: "2px solid #000000",
        },
      }),
    },
  },
});

export default function OffboardingModal({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={opened} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="24px" paddingTop="6" fontWeight="700">
            All done!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom={6}>
            <Flex direction="column" justifyContent="center" gap="24px">
              <Text fontSize="14px">
                We hope this experience was helpful for you to understand
                GovStacks approach for sustainable development.
              </Text>
              <ModalFlex
                direction="column"
                alignItems="flex-start"
                padding="8px"
                backgroundColor="green.100"
              >
                <Text
                  size="md"
                  as="b"
                  color="secondary.900"
                  marginBottom="14px"
                >
                  Your next steps towards implementation
                </Text>
                <ModalFlex
                  marginBottom="12px"
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Text fontSize="xs" color="secondary.900">
                    Deep-dive into the <br></br> Building Block specifications
                  </Text>
                  <Button
                    as={Link}
                    href="https://govstack.gitbook.io/specification/"
                    target="_blank"
                    variant="solid"
                    colorScheme="citizen"
                    backgroundColor={colors.primary[500]}
                    fontWeight="500"
                  >
                    Open GitBook
                  </Button>
                </ModalFlex>
                <ModalFlex
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Text fontSize="xs" color="secondary.900">
                    We welcome community participation.
                  </Text>
                  <Button
                    as={Link}
                    href="https://www.govstack.global/join-the-community/"
                    target="_blank"
                    variant="solid"
                    colorScheme="secondary"
                    backgroundColor={colors.secondary[0]}
                    color={colors.secondary[1000]}
                    border={`2px solid ${colors.secondary[1000]}`}
                    fontWeight="500"
                  >
                    Open Community page
                  </Button>
                </ModalFlex>
              </ModalFlex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
