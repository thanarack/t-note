import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { INoteItemData } from '../../store/reducers/noteReducer';

interface INoteItem {
  data: INoteItemData;
}

const NoteItem: React.FC<INoteItem> = (props) => {
  const { data } = props;
  return (
    <Link href={`note/${data.id}`}>
      <Box
        shadow="sm"
        marginBottom={4}
        py={6}
        px={6}
        rounded="2xl"
        bg="white"
        h="fit-content"
        justifyContent="center"
        gridRow="span 2"
        css={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}
        w="100%"
      >
        <Heading as="h3" size="md" my={4}>
          {data.title}
        </Heading>
        <Text fontSize="sm" mb={2} pt={2}>
          {data.description}
        </Text>
      </Box>
    </Link>
  );
};

export default NoteItem;
