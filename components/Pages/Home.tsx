import { Box, Container } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import AddedButton from '../common/AddedButton';
import Navigator from '../common/Navigator';
import NotesList from '../common/NotesLists';
import Search from '../common/Search';
import { config } from '../constants/config';

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <Box bg={config.secondBg} minH="100vh">
      <Container maxW={config.containerMaxWidth} py={12}>
        <Navigator />
        <Search />
        <NotesList />
        <AddedButton />
      </Container>
    </Box>
  );
};

export default Home;
