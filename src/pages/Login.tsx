import React from "react";
import { useHistory } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Flex,
  Heading
} from "@chakra-ui/core";

type Inputs = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const history = useHistory();

  const { handleSubmit, errors, register, formState } = useForm();

  const validateName = (value: String) => {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error || true;
  }

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(JSON.stringify(data));
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box
        width={[
          "100%",
          "75%",
          "50%",
          "25%",
        ]}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading>Sign In</Heading>
          <FormControl mt={10} isInvalid={errors.username}>
            <FormLabel htmlFor="name" fontWeight="bold">
              Username
            </FormLabel>
            <Input
              name="username"
              placeholder="username"
              ref={register({ validate: validateName })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={6} isInvalid={errors.password}>
            <FormLabel htmlFor="password" fontWeight="bold">Password</FormLabel>
            <Input
              name="password"
              placeholder="password"
              type="password"
              ref={register({ validate: validateName })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={10}
            w="100%"
            variantColor="green"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Login
          </Button>
          <FormLabel htmlFor="signup" color="gray.500" mt={12}>
            Don't have an account yet?
          </FormLabel>
          <Button
            mt={2}
            w="100%"
            variantColor="blue"
            variant="outline"
            isLoading={formState.isSubmitting}
            onClick={() => history.push('/signup')}
          >
            Sign up
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
