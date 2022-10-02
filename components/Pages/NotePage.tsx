import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Container, Heading, Icon, Text } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useNotesReducer from '../hooks/useNotesReducer';
import { INoteItemData } from '../../store/reducers/noteReducer';
import { getNoteById } from '../services/noteService';
import Navigator from '../common/Navigator';
import { config } from '../constants/config';

const NewNote: React.FC<AppProps> = (props) => {
  const router = useRouter();

  const pid = router.query.pid as string;

  const [data, setData] = useState<INoteItemData>();

  const { noteState } = useNotesReducer();

  /**
   * It gets the data from the API and sets it to the state.
   */
  const getData = async () => {
    try {
      await getNoteById(+pid, noteState).then((result) => setData(result));
    } catch (err) {
      // Add more logic here
    }
  };

  /* A hook that runs when the component is mounted. */
  useEffect(() => {
    getData();
  }, [pid, noteState]);

  return (
    <Box bg={config.mainBg} minH="100vh">
      <Container maxW={config.containerMaxWidth} py={12}>
        <Navigator showBackButton/>
        <Heading as="h3" size="md" mt={12} mb={6}>
          {data?.title}
        </Heading>
        <Box>
          <Text>{data?.description}</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(NewNote);
