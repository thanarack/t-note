import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { userLoginAction } from '../actions/useAuthAction';
import { useDispatch } from 'react-redux';
import { config } from '../constants/config';

const defaultForm = {
  username: '',
  password: '',
};

const Login: React.FC<AppProps> = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [form, setForm] = useState<{ username: string; password: string }>(
    defaultForm
  );

  const [error, setError] = useState<boolean>(false);

  const onChangeInput = (name: string, value: any) => {
    setForm({ ...form, [name]: value });
    setError(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If login success will send state and redirect to note dashboard
    if (form.username === 'admin' && form.password === 'admin') {
      userLoginAction(dispatch, { isAuth: true, username: form.username });
      return router.push('/');
    }

    setForm(defaultForm);
    setError(true);
  };

  return (
    <Flex
      bg={config.secondBg}
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={onSubmit}>
        <Flex
          direction="column"
          maxW="container.sm"
          gap={4}
          shadow="lg"
          rounded="lg"
          bg="white"
          p={6}
        >
          <Text textAlign="center">Login To Note</Text>
          {error && (
            <Text textAlign="center" color="red" fontSize="sm">
              Username and password invalid
            </Text>
          )}

          <Input
            focusBorderColor="orange.400"
            required
            placeholder="username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeInput('username', e.target.value)
            }
          />
          <Input
            focusBorderColor="orange.400"
            required
            placeholder="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeInput('password', e.target.value)
            }
          />
          <Button type="submit" colorScheme="orange">
            Login
          </Button>
          <Box color="gray.300" fontSize="sm">
            <Text>user: admin </Text>
            <Text>password: admin </Text>
          </Box>
        </Flex>
      </form>
    </Flex>
  );
};

export default React.memo(Login);
