import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Example 1-->
    <!--<button (click)="onSave($event)">Save</button> -->

    <!-- Example 2: Change Color -->
    <!--
      <div [class.item]="changeItem">Hello Ajinomoto</div>
      <button (click)="onChangeItem()">{{changeItem ? 'Origin ' : 'Change'}} Color</button>
    -->

    <!-- Example 3: on-click -->
    <button on-click="onSave()">Save</button>

  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /*
  onSave(event ?: MouseEvent) {
    const targetElem = event.target as HTMLElement;
    const evtMsg = event ?
      'Event target is ' + targetElem.textContent : '';
    console.log(event);
    console.log('Saved ' + evtMsg);
    if (event) {
      event.stopPropagation();
    }
  } */


  // Example 2: change Color
  /*
  changeItem = true;
  onChangeItem() {
    this.changeItem = !this.changeItem;
  } */

  // Example 3: on-click Save
  onSave() {
    console.log('Saved');
  }

}
