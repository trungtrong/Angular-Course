import { Component } from '@angular/core';

import { HEROES } from './hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{ master }} controls {{ heroes.length }}</h2>
    <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero" [masterName]="master">
    </app-hero-child>
  `
})

export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
