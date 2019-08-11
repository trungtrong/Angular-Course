import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  @Output() articleCreated = new EventEmitter<Article>();

  constructor() {}

  createArticle(title: string, content: string) {
    this.articleCreated.emit(new Article(title, content));
  }
}
