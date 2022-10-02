import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createNewNoteAction } from '../actions/useNoteAction';
import useNotesReducer from '../hooks/useNotesReducer';
import { useDispatch } from 'react-redux';
import Navigator from '../common/Navigator';
import { config } from '../constants/config';

const NotePage: React.FC<AppProps> = (props) => {
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();

  const [isLoading, setIsloading] = useState(false);

  const { noteState } = useNotesReducer();

  const onChangeInput = (name: string, value: any) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsloading(true);

    // Push data to store
    createNewNoteAction(dispatch, {
      id: noteState.data.length + 1,
      title: form.title,
      description: form.description,
    });

    setIsloading(false);

    router.push('/');
  };

  return (
    <Box bg={config.mainBg} minH="100vh">
      <Container maxW={config.containerMaxWidth} py={12}>
        <Navigator showBackButton />
        <Heading as="h2" size="lg" mt={12}>
          New Note
        </Heading>
        <form onSubmit={onSubmit}>
          <Flex mt={4} direction="column" gap={4}>
            <Input
              focusBorderColor="orange.400"
              required
              defaultValue={form.title}
              placeholder="Note title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeInput('title', e.target.value)
              }
            />
            <Textarea
              focusBorderColor="orange.400"
              required
              defaultValue={form.description}
              placeholder="Enter your idea"
              rows={10}
              resize="none"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                onChangeInput('description', e.target.value)
              }
            />
            <Box textAlign="center">
              <Button
                type="submit"
                colorScheme="orange"
                size="md"
                isLoading={isLoading}
              >
                Add Note
              </Button>
            </Box>
          </Flex>
        </form>
      </Container>
    </Box>
  );
};

export default NotePage;
