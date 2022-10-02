import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import useNotesReducer from '../hooks/useNotesReducer';
import NoteItem from './NoteItem';
import { INoteItemData } from '../../store/reducers/noteReducer';

interface INotesList {}

const NotesList: React.FC<INotesList> = () => {
  const [data, setData] = useState<INoteItemData[]>([]);
  const { noteState } = useNotesReducer();

  const onTriggerData = () => {
    // Clone state and set data new data
    const newData = [...noteState.data];
    const searchText = noteState.searchText;

    // Sort by id
    let sortData = newData.sort((a, b) => b.id - a.id);

    // Find matching search
    if (searchText) {
      sortData = sortData.filter(
        (val) =>
          val.title.match(new RegExp(searchText, 'gi')) ||
          val.description.match(new RegExp(searchText, 'gi'))
      );
    }
    setData(sortData);
  };

  useEffect(() => {
    if (noteState.data.length || noteState.searchText) {
      onTriggerData();
    }
  }, [noteState.data.length, noteState.searchText]);

  return (
    <Box mt={8}>
      <Box sx={{ columnCount: [1, 2], columnFill: 'balance' }}>
        {data.map((val, index) => (
          <NoteItem key={index} data={val} />
        ))}
      </Box>
    </Box>
  );
};

export default NotesList;
