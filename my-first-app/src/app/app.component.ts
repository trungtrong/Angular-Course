import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Example 1: Input -->
    <!--
    <h1>Hello {{ title }}</h1>
    <app-hello [text]="title"></app-hello> -->

    <!-- Example 2: Input and OnChanges() phase -->
    <!--
    <button (click)="changeTitle()">Change Title</button>
    <app-hello [text]="title"></app-hello> -->

    <!-- Example 3: Output -->
    <!--
    <h2>Output: Adding new item</h2>
    <app-hello (newItemEvent)="addItem($event)"></app-hello>
    <ul>
      <li *ngFor="let item of items">{{item}}</li>
    </ul> -->

    <!--Example 4: Input and Output together-->
    <h1>Hello {{ title }}</h1>
    <button (click)="changeTitle()">Change Title</button>
    <app-hello [text]="title" (changeTitle)="changeTitleFromChild($event)"></app-hello>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    // Example 1: Input
  // title = 'Coders-Tokyo';

  // Example 2: Input and OnChanges() phase
  /*
  title = 'Coders-Tokyo';
  i = 1; // demonstrate the onChanges() phase

  changeTitle() {
    this.title = `${this.i++} Chinsu`;
  }

  ngOnChanges() {
    console.log(`title changed`);
  } */

   // Example 3: Output -->
  /*
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    this.items.push(newItem);
  } */

  // Example 4: Input and Output together
  title = 'Coders-Tokyo';

  i = 1; // demonstrate the onChanges() phase on Child

  // ngOnChanges() {
  //   console.log('parent has been changed');
  // } // Parent doesn't implement onChanges

  changeTitle() {
    this.title = `${this.i++} Chinsu`;
  }

  changeTitleFromChild(text: string) {
    this.title = text;
  }
}
