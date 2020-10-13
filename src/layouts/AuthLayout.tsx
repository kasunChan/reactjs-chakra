import React from 'react'
import { Box } from '@chakra-ui/core'

type P = {}

const Home: React.FC<P> = (props) => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
    >
      {props.children}
    </Box>
  )
}

export default Home
