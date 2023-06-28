import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface IIconCardProps {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode
}

export default function IconCard({ icon, title, children }: IIconCardProps) {
  return (
    <Box w="100%" border="2px solid black" borderRadius="8px" minH="200px">
      <Flex gap="20px" alignItems="center">
        <Flex
          w="60px"
          h="60px"
          borderBottomRightRadius="35px"
          borderColor="black"
          borderBottomWidth="2px"
          borderRightWidth="2px"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Flex>
        <Text>{title}</Text>
      </Flex>
      <Flex direction="column" alignItems="center">
        {children}
      </Flex>
    </Box>
  );
}
