import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke, Search } from '../interfaces/joke'
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ChuckNorrisService {

    private chuckNorrisUrl = 'https://api.chucknorris.io/'

    constructor(
        private http: HttpClient) { }

    /** GET jokes from the server */
    getRandomJoke(): Observable<Joke> {
        return this.http.get<Joke>(this.chuckNorrisUrl + 'jokes/random')
            .pipe(
                tap(_ => this.log('fetched joke')),
                catchError(this.handleError<Joke>('getRandomJoke'))
            );
    }

    getJokeCategories(): Observable<Array<string>> {
        return this.http.get<Array<string>>(this.chuckNorrisUrl + 'jokes/categories')
            .pipe(
                tap(_ => this.log('fetched joke')),
                catchError(this.handleError<Array<string>>('getJokeCategories'))
            );
    }

    getJokeFromCategory(category:string): Observable<Joke> {
        return this.http.get<Joke>(this.chuckNorrisUrl + `/jokes/random?category=${category}`)
            .pipe(
                tap(_ => this.log('fetched joke')),
                catchError(this.handleError<Joke>('getJokeFromCategory'))
            );
    }

    searchForJokes(keyword: string): Observable<Search> {
        return this.http.get<Search>(this.chuckNorrisUrl + `/jokes/search?query=${keyword}`).pipe(
            tap(_ => this.log('fetched joke')),
            catchError(this.handleError<Search>('getJokeFromCategory'))
        );
    };

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message)
    }
}
