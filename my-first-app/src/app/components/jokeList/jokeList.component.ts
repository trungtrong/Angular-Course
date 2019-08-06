import { Component } from '@angular/core';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: "joke-list",
  template: `
    <app-joke *ngFor="let j of jokes" [app-joke]="j">
      <span class="setup">{{ j.setup }}?</span>
      <h1 class="punchline">{{ j.punchline }}</h1>
    </app-joke>

    <button type="button" class="btn btn-success"
        (click)="addJoke()">Add Joke</button>
    <button type="button" class="btn btn-danger"
        (click)="deleteJoke()">Clear Jokes</button>
  `
})

export class JokeListComponent {
  // property jokes = Array of JokeComponent
  jokes: JokeComponent[] = [];

  addJoke() {
    this.jokes.unshift(new JokeComponent());
  }

  deleteJoke() {
    this.jokes = [];
  }
}
