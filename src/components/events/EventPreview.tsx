import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Flex, Button } from '@chakra-ui/core'
import { PreviewListItem } from './PreviewListItem'

export const EventPreview = () => {

  const mockEvents = [
    {
      title: 'Basic Questions',
      description: 'Have questions about your account? No poblem! We are happy to help and can walk you through any problems you may have',
      duration: 15,
      price: 100,
    },
    {
      title: 'General Help',
      description: 'Have questions about your account? No poblem! We are happy to help and can walk you through any problems you may have',
      duration: 30,
      price: 200,
    },
    {
      title: 'Advanced Help',
      description: 'Have questions about your account? No poblem! We are happy to help and can walk you through any problems you may have',
      duration: 45,
      price: 300,
    },
    {
      title: 'Advanced Help',
      description: 'Have questions about your account? No poblem! We are happy to help and can walk you through any problems you may have',
      duration: 60,
      price: 400,
    },
  ]

  const history = useHistory()

  const [selectedEvent, setSelectedEvent] = useState(0)

  const handleClick = (index: number) => {
    setSelectedEvent(index)
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex
        flexDirection="column"
        py={10}
      >
        {mockEvents.map((eventItem, index) => (
          <Flex my={4} key={eventItem.price} onClick={() => handleClick(index)}>
            <PreviewListItem
              title={eventItem.title}
              description={eventItem.description}
              duration={eventItem.duration}
              price={eventItem.price}
              isSelected={index === selectedEvent}
            />
          </Flex>
        ))}
        <Flex flexDirection="row" justifyContent="justify-end" w="100%">
          <Button variantColor="green" mt={8} onClick={() => history.push('/login')}>
            Proceed with {mockEvents[selectedEvent].title}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default EventPreview
