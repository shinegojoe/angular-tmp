import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})


export class ToolbarComponent implements OnInit {

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
  }

  menuClick(): void {
    console.log('menu click')
    this.msgService.open()
  }

}
