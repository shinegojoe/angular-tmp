import { Component, OnInit, Input, Directive } from '@angular/core';
import IIcon from '../IIcon'

// @Directive({
//   selector: '[width]'
// })

@Component({
  selector: 'app-test-icon',
  templateUrl: './test-icon.component.html',
  styleUrls: ['./test-icon.component.sass']
})
export class TestIconComponent implements OnInit {
  
  // @Input()
  width: string = "20"
  color: IIcon = {
    width: "30px",
    height: "30px",
    color: "red"
  }

  xx: string = 'green'
  
  constructor() { }

  ngOnInit(): void {
  }

  iconClick(): void {
    console.log('icon click')
  }

}
