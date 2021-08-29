import { createAction, props } from '@ngrx/store';
import { Joke } from '../interfaces/joke';
export const addToFavorites = createAction('[Favorites Component] addToFavorites', props<{joke: Joke}>());
export const removeFromFavorites = createAction('[Favorites Component] removeFromFavorites',  props<{joke: Joke}>());
