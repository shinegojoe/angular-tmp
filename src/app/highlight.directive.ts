import { Directive, ElementRef, Input, HostListener, Renderer2, HostBinding } from '@angular/core';
import IIcon from './icon/IIcon'

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  @HostBinding('style.fill') bg: string = 'blue'
  @Input() appHighlight: IIcon = {
    width:'20px',
    height: '20px',
    color:  ""
  }

  @HostListener('mousedown') qq() {
    console.log('qqq')
    // this.renderer.setStyle(this.el.nativeElement, 'fill', 'green')

    this.bg = 'green'
  }
  


  // constructor(private el: ElementRef) {
  //   // el.nativeElement.style.backgroundColor = this.appHighlight;
  //   // el.nativeElement.style.width = '30px'
  //   // el.nativeElement.style.height = '30px'

  // }
  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  ngAfterViewInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.appHighlight.color
    // this.el.nativeElement.style.width = this.appHighlight.width
    // this.el.nativeElement.style.height = this.appHighlight.height
    // this.el.nativeElement.style.fill = this.appHighlight.color
    this.renderer.setStyle(this.el.nativeElement, 'width', this.appHighlight.width)
    this.renderer.setStyle(this.el.nativeElement, 'height', this.appHighlight.height)
    this.renderer.setStyle(this.el.nativeElement, 'fill', this.appHighlight.color)


  }


  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

}
