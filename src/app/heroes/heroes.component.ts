import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROS } from '../mock-heros'
import { HeroService } from '../hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'qq123'
  }

  // heros = HEROS
  heros: Hero[] = []


  selectedHero?: Hero

  constructor(private heroService: HeroService) {
    
   }

  ngOnInit(): void {
    this.getHeros()
  }

  getHeros(): void {
    // setTimeout(()=> {
    //   this.heros = this.heroService.getHeros()
    // }, 5000)
    this.heroService.getHeros().subscribe((heroes)=> {
      this.heros = heroes
    })
  }

  onSelet(hero: Hero) {
    console.log('hero', hero)
    this.selectedHero = hero
  }


}
