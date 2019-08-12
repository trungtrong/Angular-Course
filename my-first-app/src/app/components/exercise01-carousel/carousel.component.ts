import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item.component';

@Component({
  selector: 'app-carousel',
  template: `
    <div>
      <app-carousel-item>
        <img src="https://unsplash.it/200?image=0" alt="0">
      </app-carousel-item>
      <app-carousel-item>
        <img src="https://unsplash.it/200?image=100" alt="1">
      </app-carousel-item>
      <app-carousel-item>
        <img src="https://unsplash.it/200?image=200" alt="2">
      </app-carousel-item>
    </div>
  `
})

export class CarouselComponent implements AfterViewInit {
  delay = 2000;

  @ViewChildren(CarouselItemComponent)
      carouselItemsList: QueryList<CarouselItemComponent>;

  ngAfterViewInit() {
    const carouselItems = this.carouselItemsList.toArray();

    let count = 0;
    const max = carouselItems.length;
    setInterval(() => {
      const i = count % max;
      carouselItems.forEach(item => item.isActive = false);
      carouselItems[i].isActive = true;
      count++;
    }, this.delay);
  }
}
