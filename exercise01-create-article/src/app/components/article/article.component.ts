import { Component, Input} from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  template: `
    <div class="article-container">
      <h4 class="article-title"> {{ article.title }}</h4>
      <p class="article-content" [hidden]="article.hide">
        {{ article.content }}
      </p>
      <button (click)="article.toggle()">Tell Me</button>
    </div>
  `,
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
  @Input() article: Article;
}
