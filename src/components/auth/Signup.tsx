import React from 'react'
import { useHistory } from 'react-router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  Heading,
} from '@chakra-ui/core'

export type SignupPayload = {
  username: string
  email: string
  password: string
}

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export default function SignupForm() {
  const history = useHistory()

  const { handleSubmit, errors, register, formState } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<SignupPayload> = (data) => {
    // signup action here
    console.log(JSON.stringify(data))
  }

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box m={[10, 0, 0, 0]} width={['100%', '75%', '50%', '25%']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading>Sign Up</Heading>
          <FormControl mt={10} isInvalid={errors.username}>
            <FormLabel htmlFor="name" fontWeight="bold">
              Username
            </FormLabel>
            <Input
              name="username"
              placeholder="username"
              ref={register}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={6} isInvalid={errors.email}>
            <FormLabel htmlFor="name" fontWeight="bold">
              Email
            </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="email"
              ref={register}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={6} isInvalid={errors.password}>
            <FormLabel htmlFor="password" fontWeight="bold">
              Password
            </FormLabel>
            <Input
              name="password"
              placeholder="password"
              type="password"
              ref={register}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={10}
            width="100%"
            variantColor="green"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Sign Up
          </Button>
          <FormLabel htmlFor="login" color="gray.500" mt={12}>
            Already have an account yet?
          </FormLabel>
          <Button
            mt={2}
            w="100%"
            variantColor="blue"
            variant="outline"
            isLoading={formState.isSubmitting}
            onClick={() => history.push('/login')}
          >
            Log In
          </Button>
        </form>
      </Box>
    </Flex>
  )
}
