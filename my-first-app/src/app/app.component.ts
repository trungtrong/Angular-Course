import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- 1. built-in pipe -->
  <!--  <app-built-in-pipe></app-built-in-pipe> -->

  <!-- 2. async-pipe -->
    <app-async-pipe></app-async-pipe>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
