/* eslint-disable react/no-children-prop */
import { Search2Icon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateSearchTextAction } from '../actions/useNoteAction';
import useNotesReducer from '../hooks/useNotesReducer';

interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const dispatch = useDispatch();

  const { noteState } = useNotesReducer();

  const onText = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTextAction(dispatch, e.target.value);
  };

  return (
    <Box>
      <InputGroup size="md">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="blackAlpha.600" />}
        />
        <Input
          defaultValue={noteState.searchText}
          focusBorderColor="orange.400"
          type="text"
          color="blackAlpha.900"
          placeholder="Search notes"
          bg="blackAlpha.100"
          _placeholder={{ color: 'blackAlpha.600' }}
          rounded="xl"
          onChange={onText}
        />
      </InputGroup>
    </Box>
  );
};

export default Search;
