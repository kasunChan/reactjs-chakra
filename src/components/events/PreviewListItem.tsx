import React from 'react'
import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/core'

export type EventItem = {
  title: string;
  description: string;
  duration: number;
  price: number;
  isSelected?: boolean; 
}

export const PreviewListItem: React.FC<EventItem> = ({
  title,
  description,
  duration,
  price,
  isSelected,
}) => {
  return (
    <Flex
      justifyContent="space-between"
      border="1px"
      borderRadius="10px"
      borderColor={isSelected ? 'green.100' : 'gray.100'}
      boxShadow={isSelected ? '0px 1px 6px 3px rgba(0,200,0,0.1), 0 2px 4px -1px rgba(0,200,0,0.06)' : ''}
      padding="15px 20px"
      cursor="pointer"
    >
      <Flex flexDirection="column" width="80%">
        <Heading fontSize="18px" lineHeight="27px">{ title }</Heading>
        <Text fontSize="18px" lineHeight="27px" fontWeight="400" color="gray.400">{ description }</Text>
      </Flex>
      <Flex flexDirection="row" width="20%" justifyContent="flex-end">
        <Flex alignItems="flex-end">
          <Heading fontSize="64px" color={isSelected ? 'green.400' : 'gray.400'}>{ duration }</Heading>
        </Flex>
        <Flex ml={2} flexDirection="column" justifyContent="space-between">
          <Heading fontSize="24px" textAlign="right" color={isSelected ? 'green.400' : 'gray.400'}>{ price }€</Heading>
          <Text fontSize="18px" color="gray.400">minutes</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
