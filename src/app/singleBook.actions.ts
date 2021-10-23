import { createAction, props } from '@ngrx/store';
import { Book } from './models/books';


export const selectBook = createAction('[books page] selectBook', props< Book >());
//export const decrement = createAction('[Counter Component] Decrement');
//export const reset = createAction('[Counter Component] Reset');