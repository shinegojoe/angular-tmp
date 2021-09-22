import { Directive, ElementRef, Renderer2, Input, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appCircle]'
})

export class CircleDirective {
  @Input() appCircle = 0

  // offsetInit: number = 300
  constructor(private renderer: Renderer2, private el: ElementRef) {
    // this.renderer.setStyle(this.el.nativeElement, 'strokeDashoffset', this.appCircle)
    this.runCircle()
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.el.nativeElement, 'strokeDashoffset', this.appCircle)
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log('change', changes)
    if(changes.appCircle){
      console.log('input changed');
      this.renderer.setStyle(this.el.nativeElement, 'strokeDashoffset', this.appCircle)
      this.renderer.setStyle(this.el.nativeElement, 'opacity', 100)
      console.log('appCircle', this.appCircle)
      // this.renderer.setStyle(this.el.nativeElement, 'opacity', 0)
      if(this.appCircle === 600) {
        this.renderer.setStyle(this.el.nativeElement, 'opacity', 0)
      } 


    }
  }

  runCircle(): void {
    // const timmer = setInterval(()=> {
    //   this.offsetInit -= 100
    //   this.renderer.setStyle(this.el.nativeElement, 'strokeDashoffset', this.offsetInit)
    //   if(this.offsetInit <= 0) {
    //     clearInterval(timmer)
    //   }
    // }, 1000)
  }



}
