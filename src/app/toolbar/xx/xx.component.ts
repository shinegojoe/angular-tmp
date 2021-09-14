import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../message.service'

@Component({
  selector: 'app-xx',
  templateUrl: './xx.component.html',
  styleUrls: ['./xx.component.sass']
})
export class XxComponent implements OnInit {

  msg: string = 'qq123'
  @Input() cb: any
  constructor(private msgService: MessageService) { }

  ngOnInit(): void {

  }

  btnClick(): void {
    this.cb()
  }

  getMsg(): string {
    this.msg = this.msgService.getMsg()
    return this.msg
  }

  setMsg(): void {
    this.msgService.setMsg('new word')
  }

}
