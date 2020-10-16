import React from 'react'
import { Flex, IconButton, useColorMode } from '@chakra-ui/core'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

type P = {}

const Home: React.FC<P> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex flexDirection="column" h="100vh">
      <Flex justifyContent="center" width="100%" borderBottom="1px" borderBottomColor="gray.400">
        <Flex height="100px" justifyContent="center" alignItems="center">
          <p>Either create an account or log in to your existing one.</p>
        </Flex>
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
      </Flex>
      {props.children}
    </Flex>
  )
}

export default Home
