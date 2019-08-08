import { Component, OnInit } from '@angular/core';

import { Item } from './item';

@Component({
  selector: 'app-without-ngmodel',
  template: `
    <label for="without">without model</label>
    <input [value]="currentItem.name"
      (input)="currentItem.name=$event.target.value"
      id="without" (change)="showItem()">
      {{ currentItem.name }}
  `
})

export class WithoutNgModelComponent implements OnInit {
  items = Item;
  currentItem: any;

  ngOnInit() {
    this.currentItem = this.items[0];
  }

  showItem() {
    console.log(Item);
  }
}
