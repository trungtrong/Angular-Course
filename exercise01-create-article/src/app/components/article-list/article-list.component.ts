import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  template: `
    <app-form (articleCreated)="addArticle($event)"></app-form>
    <app-article *ngFor="let a of articles" [article]="a">
    </app-article>
  `
})

export class ArticleListComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article(
        'What did the cheese say when it looked in the mirror ?',
        'Hello-me'
      )
    ];
  }

  addArticle(article: Article) {
    this.articles.push(article);
  }
}
