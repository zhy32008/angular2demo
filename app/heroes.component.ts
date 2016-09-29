import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-app',
    // template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>' template 会直接加载里面的内容
    templateUrl: 'app/view/app.html',
    providers: [HeroService],

})


export class AppComponent implements OnInit{
    title = 'Tour of Heroes';

    heroes: Hero[];

    selectedHero: Hero ;

    constructor(private heroService: HeroService) { }

    getHeroes(): void {

        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit():void {

        this.getHeroes();
    }



    onSelect(hero: Hero):void{

        this.selectedHero = hero;
    }
}

