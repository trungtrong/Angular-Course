import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- employee folder -->
    <app-employee-list></app-employee-list>
    <app-employee-detail></app-employee-detail>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
