import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.sass']
})
export class WatchPageComponent implements OnInit {
  percentage = 0
  dx: number =  (600/ 100) * ( 100 - this.percentage)
  

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.percentage += 10
    if(this.percentage > 100) {
      this.percentage = 0
    }
    this.dx =  (600/ 100) * ( 100 - this.percentage)


  }

}
