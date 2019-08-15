import { Component, AfterViewChecked } from '@angular/core';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-dog',
  template: `
    <div class="dog">
      <p>Dog</p>
      <!-- Exercise 1: using text -->
      <p>dog = {{ data }} </p>
      <button (click)="changeData()">Change</button>

      <!-- Exercise 2: using input and ngModel -->
      <!--
      <div class="form-group">
        <input type="text" [(ngModel)]="data">
      </div> -->
    </div>
  `
})

export class DogComponent implements AfterViewChecked {
  constructor(private _animalService: AnimalService) { }

  // using accessor property
  get data(): string {
    return this._animalService.data;
  }

  set data(value: string) {
    this._animalService.data = value;
  }

  changeData() {
    this.data = '1234567'; // setter
  }

  // catch every time that data changes
  ngAfterViewChecked() {
    console.log(this.data);
  }
}
