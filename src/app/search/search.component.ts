import { Component, OnInit } from '@angular/core';
import {Joke} from "../interfaces/joke";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { ChuckNorrisService } from '../ChuckNorris.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchWord: string = '';
    modelChanged = new Subject<string>();
    jokes: Array<Joke> = [];
    constructor(private chuckNorrisService: ChuckNorrisService) {
        this.modelChanged.pipe(debounceTime(3000)).subscribe(() => {
            this.chuckNorrisService.searchForJokes(this.searchWord)
                .subscribe((jokes) => {
                    this.jokes = jokes.result.slice(0,10);
                });
        });
    }
    changed() {
        this.modelChanged.next();
    }
    ngOnInit(): void { }
    valueChange(value:string){
        this.searchWord = value;
        this.modelChanged.next();
    }

}
