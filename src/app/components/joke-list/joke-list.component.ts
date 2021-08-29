import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Joke } from '../../interfaces/joke';
import { Observable } from 'rxjs';
import {addToFavorites, removeFromFavorites} from "../../store/favotites.actions";
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

    favorites$: Observable<Array<Joke>>
    constructor(private store: Store<{ jokes: Array<Joke> }>) {
        this.favorites$ = store.select('jokes');
    }
    @Input() jokesList: Array<Joke> = []

    @Output() removeJokeEvent = new EventEmitter<string>();

    ngOnInit(): void {
    }

    removeJoke(value: string) {
        this.removeJokeEvent.emit(value);
    }

    inFavorites(id: string):boolean {
       console.log(this.store);
       return true;
    }

    addToFavorites (joke: Joke) {
        this.store.dispatch(addToFavorites({joke: joke}));
        // this.store.dispatch(removeFromFavorites({joke: joke}));
    }
}
