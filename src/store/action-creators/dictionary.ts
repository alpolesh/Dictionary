import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import { AppDispatch, DictionaryAction, DictionaryActionTypes, DictionaryItem, DictionaryState, FetchWordDefinitions } from "../../types/dictionary";
import axios from "axios";

// const asyncThinkAction: ActionCreator<
//   ThunkAction<Promise<Action>, IState, void>
// > = () => {
//   return async (dispatch: Dispatch<IState>): Promise<Action> => {
//     try {
//       const text = await Api.call();
//       return dispatch({
//         type: SET_TEXT,
//         text
//       });
//     } catch (e) {}
//   };
// };

export const fetchWordDefinitions = (word: string): FetchWordDefinitions => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({type: DictionaryActionTypes.FETCH_WORDS});
      const response = await axios.get<DictionaryItem[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      dispatch({type: DictionaryActionTypes.FETCH_WORDS_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({type: DictionaryActionTypes.FETCH_WORDS_ERROR, payload: 'An error occurred while loading definitions'});
    }
  }
}

