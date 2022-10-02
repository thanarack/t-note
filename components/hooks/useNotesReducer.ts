import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { INoteReducer } from '../../store/reducers/noteReducer';

interface IUseNotesReducer {
  noteState: INoteReducer;
}

/* Using the `useSelector` hook to get the state of the `noteReducer` from the Redux store. */
const useNotesReducer = (): IUseNotesReducer => {
  const noteState = useSelector((state: RootState) => state.noteReducer);
  return { noteState };
};

export default useNotesReducer;
