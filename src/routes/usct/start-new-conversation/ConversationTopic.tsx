import { Flex, Radio, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import radioCheck from '@assets/icons/radio-check.svg';

interface IConversationTopic {
  available?: boolean;
  topic: string;
  onSelect?: () => void;
}

export default function ConversationTopic({
  topic,
  available,
  onSelect,
}: IConversationTopic) {
  const [selected, setSelected] = useState(false);

  const onChange = () => {
    setSelected(true);
    if (onSelect) {
      onSelect();
    }
    
  };

  return (
    <Flex
      h="160px"
      w="200px"
      boxSizing="border-box"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="8px"
      p="20px"
      pb="0"
      color={available ? 'secondary.1000' : 'secondary.700'}
      border={`${selected ? 2 : 1}px solid ${
        available
          ? 'var(--chakra-colors-secondary-1000)'
          : 'var(--chakra-colors-secondary-600)'
      }`}
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Text fontSize="14px" fontWeight="500" width="125px">
          {topic}
        </Text>
        {available && (
          <Radio
            size="lg"
            ml="auto"
            borderColor="secondary.1000"
            _checked={{
              background: 'black',
              content: `url(${radioCheck})`,
            }}
            onChange={onChange}
          />
        )}
      </Flex>

      {!available && <Text fontSize="10px" color="secondary.700" textAlign="right">Unavailable</Text>}
    </Flex>
  );
}
