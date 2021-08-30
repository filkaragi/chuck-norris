import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../../services/ChuckNorris.service';
import { JokeService } from '../../services/Joke.service';
import { Joke } from '../../interfaces/joke';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    selectedCategory: string = '';
    loading: boolean = false
    categories: Array<string> = [];
    jokes: Array<Joke> = [];
    constructor(
        private chuckNorrisService: ChuckNorrisService,
        public jokeService: JokeService) {}
    ngOnInit(){
        this.getCategories();
    }
    getCategories(): void {
        this.chuckNorrisService.getJokeCategories()
            .subscribe((categories) => {
                this.categories = categories;
            });
    }

    getJoke(): void {
        this.loading = true;
        this.chuckNorrisService.getJokeFromCategory(this.selectedCategory)
            .subscribe((joke) => {
                this.jokes.unshift(joke);
                this.loading = false;
            });
    }

}
