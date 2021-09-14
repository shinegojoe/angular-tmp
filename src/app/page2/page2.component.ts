import { Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.sass']
})

@Injectable()
export class Page2Component implements OnInit {
  listener: any
  imgData: any
  ctx: any
  index: number = 0

  @ViewChild('iphoneSe') canvas: any


  constructor(private http: HttpClient, private renderer2: Renderer2) {
    // console.log('render2', this.renderer2)
    // this.listener = this.renderer2.listen('window', 'scroll', (e) => {
    //   console.log('zzzz');
    // });
    this.imgData = []
  
  }

  getNext() {
    const p = new Promise((resolve, reject)=> {
      this.index += 1
      let num = ''
        if(this.index<10) {
          num = `0${this.index}`
        } else {
          num = this.index.toString()
        }
      const url = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/2002878/iphone-se.${num}.png`
      const qq = this.http.get(url, { responseType: 'blob' })
      qq.subscribe((data)=> {
        const pp = this.blobtoDataURL(data)
        pp.then((res: any)=> {
          // this.imgData.push(res)
          resolve(res)
        })
      })
      // setTimeout(()=> {

      //   resolve(this.index)
      // }, 1000)
    })
    return p
  }

  async imgInit2() {
    for(let i=0; i<84; i++) {
      const res = await this.getNext()
      // console.log(res)
      this.imgData.push(res)
    }
    this.drawImg(0)
  }

  imgInit(): any{
    const p = new Promise((resolve, reject)=> {
      for(let i=1; i<=84; i++) {
        let num = ''
        if(i<10) {
          num = `0${i}`
        } else {
          num = i.toString()
        }

        const url = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/2002878/iphone-se.${num}.png`
        const qq = this.http.get(url, { responseType: 'blob' })
        qq.subscribe((data)=> {
          const pp = this.blobtoDataURL(data)
          pp.then((res: any)=> {
            this.imgData.push(res)
          })

        })
      }
      
    })
    return p
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this), true); //third parameter

  }

   async ngAfterViewInit(): Promise<any> {
    // const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2002878/iphone-se.01.png'
    // // const url = 'https://www.w3schools.com/graphics/pic_the_scream.jpg'
    // // const url = 'https://jsonplaceholder.typicode.com/todos'
    // const qq = this.http.get(url, { responseType: 'blob' })
    // // const canvas: any = document.getElementById('iphone-se')
    // console.log('canvas', this.canvas)
    // const ctx = this.canvas.nativeElement.getContext("2d");
    // // console.log('canvas', this.canvas)


    // qq.subscribe((data)=> {
    //   console.log(data)
    //   const pp = this.blobtoDataURL(data)
    //   pp.then((res: any)=> {
    //     // console.log('res', res)
    //     const img = new Image()
    //     // img.src = 'assets/xxx.jpeg'
    //     img.src = res
        
    //     img.onload = function () {
    //       // console.log('img', img)
    //       // console.log('ctx', ctx)
    //       // ctx.drawImage(img, 10, 10)
    //       ctx.drawImage(img, 0, 0, 432, 976)
    //     }
    //     // ctx.drawImage(res, 432, 976)
    //   })
    // })
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.imgInit2()
    // this.imgInit()

    // setTimeout(()=> {
     
    //   this.drawImg(0)

    // }, 3000)

  }

  drawImg(index: number) {
    const img = new Image()
    img.src = this.imgData[index]
    img.onload = (()=> {
      this.ctx.drawImage(img, 0, 0, 432, 976)
    })
    

  }

  blobtoDataURL(data: any) {
    const p = new Promise((resolve, reject)=> {
      const fr = new FileReader()
      fr.readAsDataURL(data)
      fr.onload = function(e) {
        resolve(e.target?.result)
      }
    })

    return p
  }

  onScroll(e: any): void {
    // console.log('scroll', e)
    const t = (e.target as Element)
    let scrolled = t.scrollTop / (t.scrollHeight - t.clientHeight)
    console.log('scrolled', scrolled)
    let frame = Math.ceil(scrolled * 84)
    let index = frame - 1
    if (index < 0) index = 0
    if (index > 84) index = 84
    // console.log(index, this.canvas)
    this.drawImg(index)
    // const img = new Image()
    // img.src = this.imgData[index]
    // img.onload = (()=> {
    //   this.ctx.drawImage(img, 0, 0, 432, 976)
    // })



  }
  onWindowScroll(e: any): void {
    console.log('xxx')
  }

  cc(): void {
    console.log('ccc')
  }

//   @HostListener('window:scroll') onScroll(e: Event): void {
//     console.log(e)
//  }
  ngOnDestroy(): void {
    // this.listener();
    window.removeEventListener('scroll', this.onScroll, true);

  }

}
