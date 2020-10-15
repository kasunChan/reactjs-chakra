import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Heading, Text } from '@chakra-ui/core'
import BaseLayout from '../layouts/BaseLayout'
import { EventPreview } from '../components/events/EventPreview'

function HomePage() {
  return (
    <BaseLayout>
      <Flex flexDirection="column">
        <Flex flexDirection="column" alignItems="center" justifyContent="center" mt={20}>
          <Heading fontSize="36px" lineHeight="51px">
            Online Termine
          </Heading>
          <Text fontSize="18px" lineHeight="27px" textAlign="center" color="gray.600">
            Hello! This is the event preview page, to continue, you have to&nbsp;
            <Link to="/login" style={{ color: '#48bb78' }}>log in</Link>.
          </Text>
        </Flex>
        <EventPreview />
      </Flex>
    </BaseLayout>
  )
}

export default HomePage
