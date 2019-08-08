import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch-example',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You pick red color</div>
      <div *ngSwitchCase="'green'">You pick green color</div>
      <div *ngSwitchCase="'yellow'">You pick yellow color</div>
      <div *ngSwitchDefault>You pick again</div>
    </div>
    <p>{{ color }}</p>
  `
})

export class NgSwitchExampleComponent {
  color = 'green';
}
