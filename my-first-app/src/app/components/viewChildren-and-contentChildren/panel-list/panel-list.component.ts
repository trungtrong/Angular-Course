import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  ContentChild,
  AfterContentInit,
  ContentChildren
} from '@angular/core';
import { Panel } from '../panel';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-panel-list',
  template: `
  <h3 #header>View Panels</h3>
    <app-panel *ngFor="let p of panels" [panel]="p">
    </app-panel>

  <h3>Content Panels</h3>
    <!-- Content of component: content projection -->
    <ng-content></ng-content>
  `
})

export class PanelListComponent
  implements
    OnInit,
    AfterViewInit,
    AfterContentInit {
  @ViewChild(PanelComponent, {static: false}) panelViewChild: PanelComponent;
  @ViewChildren(PanelComponent) panelViewChildren: QueryList<PanelComponent>;

  // @ViewChild reference to a template local variable
  @ViewChild('header', {static: false}) headerEl: ElementRef;

  @ContentChild(PanelComponent, {static: false}) panelContentChild: PanelComponent;
  @ContentChildren(PanelComponent) panelContentChildren: QueryList<PanelComponent>;


  panels: Panel[] = [
    new Panel(
      'What did the cheese say when it looked in the mirror',
      'Hello-me(Hellowmi)'),
    new Panel(
      'What kind of cheese do you use to disguise a small horse',
      'Mask-a-pony(Mascarpone)')
  ];

  constructor() {
    // panelViewChild property contains in the constructor
    console.log(`new - panelViewChild is ${this.panelViewChild}`);
  }

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(`ngAtferContentChild - panelContentChild is
                   ${this.panelContentChild}`);
    const contentList: PanelComponent[] = this.panelContentChildren.toArray();
    console.log(contentList);
  }

  ngAfterViewInit() {
    console.log(`ngAtferViewChild - panelViewChild is
                ${this.panelViewChild}`);

    const panels: PanelComponent[] = this.panelViewChildren.toArray();
    console.log(panels);

    console.log(`ngAtferViewChild - headerEl is
                ${this.headerEl}`);
    // change content of raw dom element
    this.headerEl.nativeElement.textContent = 'Best Panel Machine!';
  }
}
