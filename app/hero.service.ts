/**
 * Created by dennis.zhao on 2016/9/27.
 */
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {

        return new Promise<Hero[]>(resolve => setTimeout(resolve,2000).then(()=>this.getHeroes()));

    }
}
