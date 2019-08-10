import { Component, OnInit } from '@angular/core';
import { SimpleService } from './simple-service.service';

@Component({
  selector: 'app-parent',
  template: `
    <div class="parent">
      <p>Parent</p>
      <form novalidate>
        <div class="form-group">
          <input type="text" name="value"
            [(ngModel)]="value">
        </div>
      </form>
      <ng-content ></ng-content>
      <button (click)="changeData()">Change</button>
    </div>
  `
})

export class ParentComponent implements OnInit {
  value: string;
  constructor(private service: SimpleService) { }

  changeData() {
    this.value = 'lala';
    this.service.value = this.value;
  }

  ngOnInit() {
    // this.value = this.service.value;
  }
}
