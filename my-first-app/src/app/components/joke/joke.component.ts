import { Component } from '@angular/core';

@Component({
  selector: 'app-joke',
  template: `
    <div class="card card-block">
      <h4 class="card-title">
        <ng-content select=".setup"></ng-content>
      </h4>
      <p class="card-text" [hidden]="data">
        <ng-content select=".punchline"></ng-content>
      </p>
      <a class="btn btn-primary" (click)="onClick()">
      Tell Me</a>
    </div>
  `
})

export class JokeComponent {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
  onClick() {
    data.toggle();
  }
}

