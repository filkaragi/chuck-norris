import { Component, OnInit } from '@angular/core';
import { Joke } from "../../interfaces/joke";
import { FavoritesService } from '../../services/Favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    favoritesList: Array<Joke> = [];
    constructor(public favoritesService: FavoritesService) {}

    ngOnInit(): void {
        this.favoritesList = this.favoritesService.favorites;
    }

    removeFavorite (jokeId: string) {
        this.favoritesList = this.favoritesService.removeFromFavorites(jokeId);
    }

}
