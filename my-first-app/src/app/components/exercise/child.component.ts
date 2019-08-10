import { Component, OnInit } from '@angular/core';
import { SimpleService } from './simple-service.service';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <p>Child</p>
      {{ value }}
    </div>
  `
})

export class ChildComponent implements OnInit {
  value: string;
  constructor(private service: SimpleService ) {
    this.value = service.value;
  }

  ngOnInit() { }
}
