import {
  Directive,
  Input,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appMultipleHightlight]'
})

export class MultipleHightlightDirective {
  @Input() colorD: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.color = this.colorD;
  }
  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.color = null;
  }
}
