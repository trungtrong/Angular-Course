import { Component} from '@angular/core';

@Component({
  selector: 'app-ngfor-group',
  template: `
    <h2>Example 3: ngFor grouped</h2>
    <ul *ngFor="let group of peopleByCountry">
      <li>{{ group.country }}</li>
      <ul>
        <li *ngFor="let person of group.people">
          {{ person.name }}
        </li>
      </ul>
    </ul>
  `
})

export class NgForGroupComponent  {
  peopleByCountry = [
    {
      country: 'UK',
      people: [
        { name: 'Trong'},
        { name: 'Mai'}
      ]
    },
    {
      country: 'US',
      people: [
        { name: 'Lam'},
        { name: 'Tuan'}
      ]
    }
  ];
}
