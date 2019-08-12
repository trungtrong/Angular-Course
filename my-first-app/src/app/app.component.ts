import { Component, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Panel } from './components/viewChildren-and-contentChildren/panel';

@Component({
  selector: 'app-root',
  template: `
    <!--1. Life cycle hook-->
    <!--
    <app-article-list></app-article-list> -->

    <!-- 2. ViewContent and ViewChildren  -->
    <!--
    <app-panel-list>
      <app-panel [panel]="p"></app-panel>
    </app-panel-list> -->

    <!-- 3. Exercise01- carousel -->
    <app-carousel></app-carousel>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  p: Panel = new Panel(
    'A kid threw a lump of cheddar at me',
    'I thought ‘That’s not very mature’'
  );
}
