import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFillcolor]'
})
export class FillcolorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fill = 'yellow';
  }

}
