import { Component,
         Input,
         OnChanges,
         OnInit,
         AfterContentChecked,
         AfterContentInit,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         DoCheck } from '@angular/core';
import { Panel } from '../panel';

@Component({
  selector: 'app-panel',
  template: `
    <div class="panel-container">
      <h4 class="panel-title"> {{ panel.title }}</h4>
      <p class="panel-content" [hidden]="panel.hide">
        {{ panel.content }}
      </p>
      <button (click)="panel.toggle()">Tell Me</button>
    </div>
  `,
  styleUrls: ['./panel.component.css']
})

export class PanelComponent {
  @Input() panel: Panel;

  /*
  constructor() {
    console.log(`new -data is ${this.panel}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.panel}`);
  }

  ngOnInit() {
    console.log(`ngOnInit - data is ${this.panel}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log(`${this.panel} is destroyed`);
  }*/
}
