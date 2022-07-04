import { combineReducers } from "redux";
import { dictionaryReducer } from "./dictionaryReducer";


export const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;