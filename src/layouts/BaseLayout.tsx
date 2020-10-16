import React from 'react'
import { Flex, IconButton, useColorMode } from '@chakra-ui/core'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

type P = {}

const BaseLayout: React.FC<P> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex flexDirection="column">
      <IconButton
        m={3}
        position="absolute"
        top={0}
        right={0}
        width="20px"
        variant="ghost"
        isRound
        variantColor={colorMode === 'light' ? 'white' : 'green'}
        onClick={toggleColorMode}
        aria-label="Call Sage"
        fontSize="20px"
        icon={colorMode === 'light' ? RiMoonClearLine : RiSunLine}
      />
      {props.children}
    </Flex>
  )
}

export default BaseLayout
