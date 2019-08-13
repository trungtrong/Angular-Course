import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRolloverImage]'
})

export class RolloverImageDirective {
  @Input('appRolloverImage') config = {
    initial: '',
    over: ''
  };

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.src = this.config.over;
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.src = this.config.initial;
  }
}
