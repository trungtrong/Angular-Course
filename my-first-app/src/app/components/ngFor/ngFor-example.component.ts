import { Component} from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  template: `
    <h2>Example 1: Basic *ngFor iteractor</h2>
    <ul>
      <li *ngFor="let person of people">
        {{ person.name }}
      </li>
    </ul>
  `
})

export class NgForExampleComponent {
  people = [
    { name: 'Trong'},
    { name: 'Mai'},
    { name: 'Tuan'},
    { name: 'Tuyet'}
  ];
}
