import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  template: `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})

export class CarouselItemComponent {
  isActive = false;
}
