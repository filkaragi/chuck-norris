import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../../interfaces/joke';
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

  constructor() { }
  @Input() jokesList: Array<Joke> = []

  ngOnInit(): void {
  }

}
