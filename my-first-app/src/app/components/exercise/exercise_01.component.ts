import { Component, OnInit } from '@angular/core';

class Article {
  constructor(public title: string,
              public date: Date,
              public content: string,
              public kind: string) {}
}

@Component({
  selector: 'app-exercise-01',
  template: `
    <div class="col-md-4 card" *ngFor="let article of articles"
      [ngClass]="{
        'card-outline-primary': article.kind === 'title',
        'card-outline-danger': article.kind === 'article'}">
        <div class="card-block">
          <h4 class="card-title">{{ article.title }}</h4>
          <p class="card-text" *ngIf="article.kind === 'text'">
            {{ article.content }}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated
              {{ article.date | date: "shortDate" }}
            </small>
          </p>
        </div>
        <img class="card-img-bottom img-fuild"
              *ngIf="article.kind === 'image'"
              src="{{ article.content }}">
    </div>
  `,
  styleUrls: ['./exercise_01.component.css']
})

export class Exercise01Component {
  articles: Article[] = [
    new Article('Title 1', new Date(), 'Lorem ipsumm', 'text'),
    new Article('Title 2', new Date(), 'https://unsplash.it/400?image=10', 'image'),
    new Article('Title 3', new Date(),
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
      'text'),
    new Article('Title 4', new Date(), 'https://unsplash.it/400?image=20', 'image'),
    new Article('Title 5', new Date(),
     'Lorem ipsum dolor sit amet, consectetuer dipiscing elit. Aenean commodo ligula',
     'text'),
    new Article('Title 6', new Date(), 'https://unsplash.it/400?image=30', 'image')
  ];
}


