import { Directive, ElementRef, HostListener, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  // 1. apply hightlight directive folder
  /***********
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#f2f2f2';
  }
  *********/

  // 2. Host Listener and Host Binding
  /***********************
  @HostBinding('class.card-outline') private ishovering: boolean;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    el.nativeElement.style.backgroundColor = '#f2f2f2';
  }

  @HostListener('mouseover') onMouseOver() {
    const contentEl = this.el.nativeElement.querySelector('.card-content');
    this.renderer.setStyle(contentEl, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    const contentEl = this.el.nativeElement.querySelector('.card-content');
    this.renderer.setStyle(contentEl, 'display', 'none');
    this.ishovering = false;
  }

  *************************************/


  // 3. @Input decorator and configuration
  @HostBinding('class.card-outline') private ishovering: boolean;

  // 3.1. using @Input  to bind an property
  /*
  @Input() config = {
    selectorIsQueried: '.card-content'
  }; */

  // 3.2. bind to an @Input alias
  @Input('appHightlight') config = {
    selectorIsQueried: '.card-content'
  };

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    el.nativeElement.style.backgroundColor = '#f2f2f2';
  }

  @HostListener('mouseover') onMouseOver() {
    const contentEl = this.el.nativeElement.querySelector(this.config.selectorIsQueried);
    this.renderer.setStyle(contentEl, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    const contentEl = this.el.nativeElement.querySelector(this.config.selectorIsQueried);
    this.renderer.setStyle(contentEl, 'display', 'none');
    this.ishovering = false;
  }


}
