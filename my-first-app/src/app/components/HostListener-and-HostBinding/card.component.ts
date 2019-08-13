import { Component} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <!-- Lecture 1 and 2  -->
  <!--
    <div class="card" appHightlight>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-content" [style.display]="'none'">{{ content }}</p>
    </div> -->

  <!-- 3.1. @Input decorator and Configuration -->
  <!--
  <div class="card" appHightlight [config]="{selectorIsQueried: '.card-content'}">
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-content" [style.display]="'none'">{{ content }}</p>
  </div> -->

  <!-- 3.2. bind to an @Input alias  -->
  <div class="card" [appHightlight]="{selectorIsQueried: '.card-content'}">
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-content" [style.display]="'none'">{{ content }}</p>
  </div>

  `,
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  title = 'What did the cheese say when it looked in the mirror';
  content = 'Hello-me(Hellomi)';
}
