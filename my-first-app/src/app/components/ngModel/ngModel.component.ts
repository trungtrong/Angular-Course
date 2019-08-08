import { Component, OnInit, OnChanges } from '@angular/core';

import { Item } from './item';

@Component({
  selector: 'app-ngmodel-example',
  template: `
    <label for="without">[(ngModel)]</label>
    <input [(ngModel)]="currentItem.name" id="example-ngModel" (change)="showItem()">
    {{ currentItem.name }}
  `
})

export class NgModelExampleComponent implements OnInit {
  items = Item;
  currentItem: any;

  ngOnInit() {
    this.currentItem = this.items[0];
  }

  showItem() {
    console.log(Item);
  }
}
