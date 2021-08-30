import { Joke } from '../interfaces/joke';
import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class FavoritesService {

    public favorites = Array();

    addToFavorites(joke: Joke, timestamp: number) {
        joke.favoritesTimestamp = timestamp;
        this.favorites.push(joke);
    }

    isInFavorites(jokeId: string) {
        return this.favorites.find(joke => joke.id === jokeId) || false;
    }

    removeFromFavorites(jokeId: string): Array<Joke> {
        this.favorites = this.favorites.filter((joke) => {
            return joke.id !== jokeId;
        })
        return this.favorites;
    }


}
