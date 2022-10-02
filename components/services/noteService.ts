import { INoteItemData, INoteReducer } from '../../store/reducers/noteReducer';

/**
 * It returns a promise that resolves to the note data if the note exists, or rejects if the note
 * doesn't exist
 * @param {number} id - number - The id of the note you want to get.
 */
const getNoteById = (
  id: number,
  noteState: INoteReducer
): Promise<INoteItemData | undefined> =>
  new Promise<INoteItemData>((resolve, reject) => {
    setTimeout(async () => {
      const getData = noteState.data.find((value) => value.id === id);
      if (getData) {
        resolve(getData);
      } else {
        reject();
      }
    }, 50);
  });

export { getNoteById };
