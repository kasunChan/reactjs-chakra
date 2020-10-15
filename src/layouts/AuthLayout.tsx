import React from 'react'
import { Flex } from '@chakra-ui/core'
import BaseLayout from './BaseLayout'

type P = {}

const AuthLayout: React.FC<P> = (props) => {

  return (
    <BaseLayout>
      <Flex flexDirection="column" h="100vh">
        <Flex justifyContent="center" width="100%" borderBottom="1px" borderBottomColor="gray.400">
          <Flex height="100px" justifyContent="center" alignItems="center">
            <p>Either create an account or log in to your existing one.</p>
          </Flex>
        </Flex>
        {props.children}
      </Flex>
    </BaseLayout>
  )
}

export default AuthLayout
