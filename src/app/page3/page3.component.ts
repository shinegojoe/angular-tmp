import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.sass']
})
export class Page3Component implements OnInit {

  @ViewChild('boxContainer') box: any
  timmer: any = null
  x: number = 0
  y: number = 0
  x_: number = 0
  y_: number = 0
  xN: number = 0
  yN: number = 0
  roX: number = -15
  roY: number = 0
  isDown: boolean =  false
  dx: number = 0
  dy: number = 0
  currentDegY: number = 0


  // @HostListener('document:click', ['$event']) mClick(event: Event) {
  //   console.log('mClick')
  // }

  // @HostListener('document:mousedown', ['$event']) mDown(event: any) {
  //   this.isDown = true
  //   clearInterval(this.timmer)
  //   this.x_ = event.clientX
  //   this.y_ =  event.clientY
  //   console.log('mDown', this.x_, this.y_)

  // }

  // @HostListener('document:mouseup', ['$event']) mUp(event: Event) {
  //   console.log('mUp')
  //   this.isDown = false
  //   // this.timmer = setInterval(()=> {

  //   // }, 1000)
  // }

  @HostListener('document:mousemove', ['$event']) mMove(event: any) {
    // console.log('move')
    // if(this.isDown) {
    //   this.x = event.clientX
    //   this.y  =event.clientY
    //   this.xN = this.x - this.x_
    //   this.yN = this.y - this.y_
    //   this.roX -= this.yN * 0.2
    //   this.roY += this.xN * 0.2
    //   this.box.nativeElement.style.transform = 'perspective(800px) rotateX('+this.roX+'deg) rotateY('+this.roY+'deg)'
    //   this.x_ = event.clientX
    //   this.y_ = event.clientY
    // }
    
    

  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.box.nativeElement)
    const ch = this.box.nativeElement.children
    console.log(ch.length)
    const deg = 360 / ch.length
    for(let i=0; i<ch.length; i++) {
      ch[i].style.transform = 'rotateY('+ i*deg + 'deg) translateZ(350px)'
      ch[i].style.transition = (ch.length-i-1)*0.1 +'s'
      ch[i].ondragstart=function ( ) {
        return false;
      }
    }
  }

  move(start: number, dy: number, end: number): void {
    let deg = start
    const timmer = setInterval(()=> {
      deg += dy
      this.box.nativeElement.style.transform = 'perspective(800px) rotateX('+this.roX+'deg) rotateY('+deg+'deg)'
      if(deg === end) {
        clearInterval(timmer)
      }
    }, 50)
  }

  nextClick(): void {
    this.move(this.currentDegY, 10, this.currentDegY + 90)
    this.currentDegY += 90

  }

  lastClick(): void {
    this.move(this.currentDegY, -10, this.currentDegY - 90)
    this.currentDegY -= 90
  }

  resetClick(): void {

  }

  boxClick(): void {
    console.log('box click')
  }


}
