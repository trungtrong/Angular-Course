import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <!-- Example 1: Input -->
    <!--
    <h2>Bye {{ text }}</h2> -->

    <!-- Example 2: Input and OnChanges() phase -->
    <!--
    <h2>Bye {{ text }}</h2>
    <button (click)="changeText()">Change Text</button> -->

    <!-- Example 3: Output-->
    <!--
    <label>Add an item: <input #newItem></label>
    <button (click)="addNewItem(newItem.value)">Add</button> -->

    <!--Example 4: Input and Output together-->
    <h2>Bye {{ text }}</h2>
    <button (click)="changeText()">Change Text</button>
  `
})

export class HelloComponent implements OnChanges {
  // Example 1: Input
  // @Input() text: string;

  // Example 2: Input and OnChanges() phase
  /*
  @Input() text: string;

  changeText() {
    this.text = 'Ajinomoto';
  }

  ngOnChanges() {
    console.log('data has been changed.');
  } */

    // Example 3: Output
  /*
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  } */

  // Example 4: Input and Output together
  @Input() text: string;
  @Output() changeTitle = new EventEmitter<string>();

  count = 1; // demonstrate the onChanges() phase

  ngOnChanges() {
    console.log('child has been changed');
  }

  changeText() {
    this.text = `${this.count++} Ajinomoto`;
    this.changeTitle.emit(this.text);
  }

}
