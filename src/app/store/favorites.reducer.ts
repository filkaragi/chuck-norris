import {Action, createReducer, on, State} from '@ngrx/store';
import { addToFavorites, removeFromFavorites } from './favotites.actions';
import {Joke, JokeState} from '../interfaces/joke';

export const initialState: any = {
    jokes: [] as Array<Joke>
};
const _favoritesReducer = createReducer(
    initialState,
    on(addToFavorites, (state, { joke }) => {
        console.log(state.jokes, 'test');
        return {
            ...state,
            jokes: [...(state.jokes), joke]
        }
    }),
    on(removeFromFavorites, (state, { joke }) => {
        console.log(state.jokes, 'test');
        return {
            ...state,
            jokes: [...(state.jokes), joke]
        }
    }),
);

export function favoritesReducer(state: JokeState | undefined, action: Action): any {
    return _favoritesReducer(state, action);
}
