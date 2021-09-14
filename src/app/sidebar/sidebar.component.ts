import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MessageService } from '../message.service'
// import { MatSidenavModule } from '@angular/material/sidenav'
// import { ElementRef,Renderer2 } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawer') drawer?: any

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
    console.log(this.drawer, 'drawer')
  }

  ngAfterViewInit() {
    console.log(this.drawer, 'after');
    this.msgService.setDrawer(this.drawer)
  }

  getMsg(): string {
    return this.msgService.msg
  }

  btnClick(drawer: any): void {
    // drawer.toggle()
    // drawer.close()
    this.drawer.toggle()
    
  }

  open(drawer: any): void {
    // drawer.open()
  }

}
