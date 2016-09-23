import { Component, Input } from '@angular/core'
import { Hero } from './hero';
export class Hero {

    id: number;
    name: string;

}

@Component({

    selector: 'my-hero-detail',
})

export class HeroDetailComponent {

    hero: Hero;

}