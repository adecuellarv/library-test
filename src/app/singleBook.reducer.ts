import { Action, createReducer, on } from '@ngrx/store';
import { selectBook, cleanBook } from './singleBook.actions';
import { Book } from './models/books';

export const initialState = {};

const _counterReducer = createReducer(
  initialState,
  on(selectBook, (state, action) => {
      return {
          ...state,
          ...action
      }
  }),
  on(cleanBook, () => {
    return {
        initialState
    }
}),

);

export function singleBookReducer(state: object = Book, action:  Action) {
    //return state;
    return _counterReducer(state, action);
}