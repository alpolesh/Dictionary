export interface DictionaryState {
  words: any[];
  loading: boolean;
  error: null | string;
}

export enum DictionaryActionTypes {
  FETCH_WORDS = 'FETCH_WORDS',
  FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS',
  FETCH_WORDS_ERROR = 'FETCH_WORDS_ERROR',
}

interface FetchWordsAction {
  type: DictionaryActionTypes.FETCH_WORDS;
}

interface FetchWordsSuccessAction {
  type: DictionaryActionTypes.FETCH_WORDS_SUCCESS;
  payload?: any[];
}

interface FetchWordsErrorAction {
  type: DictionaryActionTypes.FETCH_WORDS_ERROR;
  payload?: string;
}

export type DictionaryAction = FetchWordsAction | FetchWordsSuccessAction | FetchWordsErrorAction;
