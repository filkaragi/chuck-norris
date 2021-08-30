import { Component, OnInit } from '@angular/core';
import { Joke } from '../../interfaces/joke';
import { ChuckNorrisService } from '../../services/ChuckNorris.service';
import { JokeService } from '../../services/Joke.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    constructor(
        private chuckNorrisService: ChuckNorrisService,
        public jokeService: JokeService) { }
    jokes: Array<Joke> = [];
    loading: boolean = false;
    ngOnInit(): void {
        this.getJoke()
    }
    getJoke(): void {
        this.loading = true;
        this.chuckNorrisService.getRandomJoke()
            .subscribe((joke) => {
                this.jokes.unshift(joke);
                this.loading = false;
            });
    }
}
