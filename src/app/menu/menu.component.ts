import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger} from '@angular/material/menu'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemClick(name: string): void {
    console.log('name', name)
  }
   

}
