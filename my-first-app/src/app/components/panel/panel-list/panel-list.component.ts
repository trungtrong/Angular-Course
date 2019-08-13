import { Component } from '@angular/core';
import { Panel } from '../panel';

@Component({
  selector: 'app-panel-list',
  template: `
    <app-panel *ngFor="let p of panels" [panel]="p"></app-panel>
  `
})

export class PanelListComponent {
  panels: Panel[];

  constructor() {
    this.panels = [
      new Panel(
        'What did the cheese say when it looked in the mirror',
        'Hello-me(Hellowmi)'),
      new Panel(
        'What kind of cheese do you use to disguise a small horse',
        'Mask-a-pony(Mascarpone)'),
      new Panel(
        'A kid threw a lump of cheddar at me',
        'I thought ‘That’s not very mature’')
    ];
  }
}
