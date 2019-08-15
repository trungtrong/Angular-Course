import { Component, OnInit } from '@angular/core';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-cat',
  template: `
    <div class="cat">
      <h3>Cat</h3>
      <!-- Exercise 1: using text -->
      <p>cat = {{ data }} </p>
      <button (click)="changeData()">Change</button>

      <!-- Exercise 2: using input and ngModel -->
      <!--
      <div class="form-group">
        <input type="text" [(ngModel)]="data">
      </div> -->
    </div>
  `
})

export class CatComponent implements OnInit {

  constructor(private _animalService: AnimalService ) {
  }

  ngOnInit() {  }

  get data(): string {
    return this._animalService.data;
  }

  set data(value: string) {
    this._animalService.data = value;
  }

  changeData() {
    this.data = '0905'; // setter
  }
}
