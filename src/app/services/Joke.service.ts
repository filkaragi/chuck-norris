import { Injectable } from '@angular/core';
import { Joke } from '../interfaces/joke'
@Injectable({ providedIn: 'root' })
export class JokeService {

    removeJokeFromArray (id:string, jokes: Array<Joke>): Array<Joke> {
        return jokes.filter(joke => joke.id !== id);
    }
}
