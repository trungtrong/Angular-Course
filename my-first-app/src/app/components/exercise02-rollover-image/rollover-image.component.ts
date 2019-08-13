import { Component } from '@angular/core';

@Component({
  selector: 'app-rollover-image',
  template: `
    <img [appRolloverImage]="{
      initial: initial,
      over: over
    }" [src]="initial" />
  `
})

export class RolloverImageComponent {
  initial = 'https://unsplash.it/200/300?image=201';
  over = 'https://unsplash.it/200/300?image=202';

  constructor() { }

}
