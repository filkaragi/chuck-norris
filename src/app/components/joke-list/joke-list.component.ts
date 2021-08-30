import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Joke } from '../../interfaces/joke';
import { FavoritesService } from '../../services/Favorites.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

    constructor(public favoritesService: FavoritesService) {}
    @Input() jokesList: Array<Joke> | null = []

    @Output() removeJokeEvent = new EventEmitter<string>();

    ngOnInit(): void {
    }

    removeJoke(value: string) {
        this.removeJokeEvent.emit(value);
    }

    inFavorites(jokeId: string):boolean {
        return this.favoritesService.isInFavorites(jokeId)
    }

    addToFavorites (joke: Joke) {
        this.favoritesService.addToFavorites(joke, Date.now());
    }

    removeFavorite (jokeId: string) {
        this.favoritesService.removeFromFavorites(jokeId);
    }
}
