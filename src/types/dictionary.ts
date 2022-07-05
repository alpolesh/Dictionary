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
  antonyms: any[]
  example?: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: any[]
}

export interface License2 {
  name: string
  url: string
}

export interface DictionaryItem {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License2
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

export type DictionaryAction = FetchWordsAction | FetchWordsSuccessAction | FetchWordsErrorAction;
export type FetchWordDefinitions = ThunkAction<Promise<void>, DictionaryState, string, DictionaryAction>;
export type AppDispatch = ThunkDispatch<DictionaryState, string, DictionaryAction>;
