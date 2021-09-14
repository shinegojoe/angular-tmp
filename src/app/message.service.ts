import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // messages: string[] = []
  // isOpen: boolean = true
  msg: string = 'xxx'
  drawer: any
  constructor() { 

  }

  // add(message: string) {
  //   this.messages.push(message)
  // }

  // clear() {
  //   this.messages = []
  // }
  getMsg(): string {
    return this.msg
  }


  setMsg(msg: string): void {
    this.msg = msg
  }

  setDrawer(drawer: any): void {
    this.drawer = drawer
  }

  open(): void {
    this.drawer.toggle()
    // console.log('open')
  }


}
