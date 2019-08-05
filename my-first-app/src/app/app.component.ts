import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- String interpolation -->
    <h1>Hello Ajinomoto {{ title }}</h1>
    <h2>1 + 1 = {{ 1 + 1 }}</h2>
    <img src = "{{ imageUrl }}"  />

    <!-- property binding -->
    <h1 [textContent] = "title"></h1>
    <img [src] = "imageUrl"/>
    <img [src] = "imageUrl"/>

    <!-- Binding target -->
    <img bind-src = "imageUrl" />

    <!-- Attribute Binding  -->
    <button [attr.class] = "buttonClasses">Click on me</button>
    <button [attr.aria-label]="actionName">Click on me</button>

    <!-- class Binding  -->
    <div class="item special menu">Class Binding</div>
    <div class="item special menu" [class.item-plugin]="itemPlugin">Class Binding</div>

    <div [ngClass]="{
          'item': true,
          'special': true,
          'menu': true,
          'item-plugin': itemPlugin
        }">Class Binding</div>

    <div [ngClass]="listClass">Class Binding</div>

    <!-- Style Binding  -->
    <div [style.color]="textColor" [style.background]="textBackground">Class Binding</div>
    <div [style.font-size.em]='1.8'>Class Binding</div>

    <div [ngStyle]="{
      'font-size': '1.5em',
      'color': 'violet'
    }">Class Binding</div>

    <div [ngStyle]="listStyle">Class Binding</div>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Coders-Tokyo';
  imageUrl = 'https://picsum.photos/200';

  buttonClasses = 'enable trigger';
  actionName = 'trigger';

  itemPlugin = true;

  listClass = {
    item: true,
    special: true,
    menu: true,
    'item-plugin': this.itemPlugin
  };

  textColor = 'tomato';
  textBackground = '#f2f2f2';

  listStyle = {
    'font-size': '1.5em',
    color: 'green'
  };

}
