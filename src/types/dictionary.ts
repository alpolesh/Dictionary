import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export interface License {
  name: string
  url: string
}

export interface Phonetic {
  text: string
  audio: string
  sourceUrl: string
  license: License
}

export interface Definition {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example?: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

export interface DictionaryItem {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}

export interface DictionaryState {
  words: DictionaryItem[];
  loading: boolean;
  error: null | string;
}

export enum DictionaryActionTypes {
  FETCH_WORDS = 'FETCH_WORDS',
  FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS',
  FETCH_WORDS_ERROR = 'FETCH_WORDS_ERROR',
  RESET_DICTIONARY = 'RESET_DICTIONARY',
}

interface FetchWordsAction {
  type: DictionaryActionTypes.FETCH_WORDS;
}

interface FetchWordsSuccessAction {
  type: DictionaryActionTypes.FETCH_WORDS_SUCCESS;
  payload: DictionaryItem[];
}

interface FetchWordsErrorAction {
  type: DictionaryActionTypes.FETCH_WORDS_ERROR;
  payload: string;
}

interface ResetDictionaryAction {
  type: DictionaryActionTypes.RESET_DICTIONARY;
}

export type DictionaryAction = FetchWordsAction | FetchWordsSuccessAction | FetchWordsErrorAction | ResetDictionaryAction;
export type FetchWordDefinitions = ThunkAction<Promise<void>, DictionaryState, string, DictionaryAction>;
export type AppDispatch = ThunkDispatch<DictionaryState, string, DictionaryAction>;
