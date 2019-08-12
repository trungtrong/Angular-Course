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

export class ArticleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() article: Article;
  constructor() {
    console.log(`new -data is ${this.article}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.article}`);
  }

  ngOnInit() {
    console.log(`ngOnInit - data is ${this.article}`);
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
    console.log(`${this.article} is destroyed`);
  }
}
