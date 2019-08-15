import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- employee folder -->
    <!--
    <app-employee-list></app-employee-list>
    <app-employee-detail></app-employee-detail> -->

    <!-- exercise01-communicate between 2 strange components -->
    <div>
      <app-dog></app-dog>
    </div>
    <div>
      <app-cat></app-cat>
    </div>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {}
