import { Component} from '@angular/core';

@Component({
  selector: 'app-ngfor-index',
  template: `
    <h2>Example 2 : *ngFor with index</h2>
    <ul>
      <li *ngFor="let person of people; let i=index">
        {{ i + 1 }} - {{ person.name }}
      </li>
    </ul>
  `
})

export class NgForIndexComponent {
  people = [
    { name: 'Trong'},
    { name: 'Mai'},
    { name: 'Tuan'},
    { name: 'Tuyet'}
  ];
}
