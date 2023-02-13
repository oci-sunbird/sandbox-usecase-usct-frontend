import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Fade,
  Flex,
  IconButton,
  Image,
  Text
} from "@chakra-ui/react";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { authentication } from "../../utils/authentication";
import { Nav, NavigationLink } from "./Navbar.styles";
import { LINKS } from "./routes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const onSignOut = async () => {
    await authentication.signOut();
  };
  return (
    <Nav isOpen={isOpen}>
      <Flex padding="24px" zIndex="1" w="100%" position="relative">
        <Fade in={isOpen}>
          <Flex gap="8px" w="100%" alignItems="center">
            <Image h="32px" w="32px" src="/govstack-logo.png" />
            <Text color="main.0" whiteSpace="nowrap">
              Open Sandbox
            </Text>
          </Flex>
        </Fade>
        <IconButton
          position="absolute"
          right={isOpen ? "24px" : "0"}
          top="50%"
          transform={`translateY(-50%) ${
            isOpen ? "rotateY(0)" : "rotateY(180deg)"
          }`}
          aria-label="Toggle Menu"
          icon={<ArrowLeftIcon />}
          background="transparent"
          color="main.0"
          w={isOpen ? "40px" : "100%"}
          h="40px"
          transitionProperty="width, border-radius, transform, right"
          transitionDuration="0.3s"
          transitionTimingFunction="ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
          borderRadius={isOpen ? "0.375rem" : "0"}
        ></IconButton>
      </Flex>
      <Flex
        zIndex="1"
        gap="16px"
        as="nav"
        direction="column"
        alignItems="flex-start"
        w="100%"
      >
        {LINKS.map((category) => {
          return (
            <Flex
              key={category.name}
              gap="8px"
              alignItems="flex-start"
              direction="column"
              w="100%"
            >
              <Fade in={isOpen}>
                <Text
                  height="40px"
                  padding="0 24px"
                  whiteSpace="nowrap"
                  color="main.0"
                >
                  <strong>{category.name}</strong>
                </Text>
              </Fade>
              {category.children.map((child) => {
                return (
                  <Flex key={child.path} alignItems="center" w="100%">
                    <NavigationLink
                      key={child.path}
                      as={NavLink}
                      to={child.path}
                    >
                      <Flex
                        gap="16px"
                        alignItems="center"
                        height="40px"
                        transition="padding 0.3s ease-in-out"
                      >
                        <Box w="24px" h="24px">
                          {child.icon}
                        </Box>
                        <Text
                          w={isOpen ? "100%" : "0"}
                          transition="width 0.3s ease-in-out"
                          overflow="hidden"
                        >
                          {child.name}
                        </Text>
                      </Flex>
                    </NavigationLink>
                  </Flex>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
      <Button color="main.900" marginTop="auto" onClick={onSignOut}>
        LOG OUT
      </Button>
    </Nav>
  );
}
