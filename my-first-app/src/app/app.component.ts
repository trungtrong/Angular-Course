import { Component, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-joke-list><app-joke-list>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {}
