import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };

    heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
