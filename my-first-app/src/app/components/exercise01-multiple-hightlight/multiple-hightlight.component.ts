import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-hightlight',
  template: `
    <div class="card">
      <h3>Pick a hightlight color</h3>
      <div class="card-selection">
        <input type="radio" name="colors" checked (click)="color='green'">Green
        <input type="radio" name="colors" (click)="color='yellow'">Yellow
        <input type="radio" name="colors" (click)="color='cyan'">Cyan
      </div>
      <p class="card-content" appMultipleHightlight [colorD]="color" >Hightlight me</p>
    </div>
  `
})

export class MultipleHightlightComponent {
  color = 'green';
}
