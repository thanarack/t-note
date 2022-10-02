import { AppDispatch } from '../../store';
import {
  createNewNote,
  INoteItemData,
  updateSearchText,
} from '../../store/reducers/noteReducer';

/**
 * It takes a dispatch function and a payload, and then dispatches the createNewNote action with the
 * payload.
 * @param {AppDispatch} dispatch - AppDispatch - this is the dispatch function that is passed to the
 * component by the useDispatch hook.
 * @param {INoteItemData} payload - INoteItemData
 */
const createNewNoteAction = (dispatch: AppDispatch, payload: INoteItemData) => {
  dispatch(createNewNote(payload));
};

const updateSearchTextAction = (dispatch: AppDispatch, payload: string) => {
  dispatch(updateSearchText(payload));
};

export { createNewNoteAction, updateSearchTextAction };
