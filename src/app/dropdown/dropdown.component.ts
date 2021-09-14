import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        // height: '200pz',
        opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        // height: '0px',
        // display: 'none',
        visibility: 'hidden',
        opacity: 0,
        // backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})


export class DropdownComponent implements OnInit {
  @ViewChild('drop') drop: any



  isOpen: boolean = false

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // this.isOpen = !this.isOpen
    // this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    this.isOpen = this.drop.nativeElement.contains(event.target) ? !this.isOpen : false;


  }
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.drop, 'drop');
  }

  btnClick(): void {
    // this.isOpen = !this.isOpen
    
  }

  itemClick(name: string): void {
    console.log('item click', name)
  }

}
