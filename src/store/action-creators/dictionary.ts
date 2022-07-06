import axios from 'axios';
import {
  AppDispatch, DictionaryActionTypes, DictionaryItem, FetchWordDefinitions,
} from '../../types/dictionary';

export const fetchWordDefinitions = (word: string): FetchWordDefinitions => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: DictionaryActionTypes.FETCH_WORDS });
    const response = await axios.get<DictionaryItem[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    dispatch({ type: DictionaryActionTypes.FETCH_WORDS_SUCCESS, payload: response.data });
  } catch (e: any) {
    if (e.response.data.title) {
      dispatch({ type: DictionaryActionTypes.FETCH_WORDS_ERROR, payload: e.response.data.title });
    } else {
      dispatch({ type: DictionaryActionTypes.FETCH_WORDS_ERROR, payload: 'An error occurred while loading definitions' });
    }
  }
};
