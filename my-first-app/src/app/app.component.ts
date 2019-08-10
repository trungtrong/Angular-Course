import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- employee folder -->
    <!--
    <app-employee-list></app-employee-list>
    <app-employee-detail></app-employee-detail> -->

    <!-- exercise -->
    <div>
      <app-parent><app-child></app-child></app-parent>
    </div>
    <div>
      <app-parent><app-child></app-child></app-parent>
    </div>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
