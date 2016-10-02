import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {Router} from "@angular/router";


@Component({
    // moduleId:module.id,
    selector: 'my-heroes',
    // template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>' template 会直接加载里面的内容
    templateUrl: 'app/view/heroes.html',
    styleUrls: ['app/css/heroes.css'],
    // providers: [HeroService],

})


export class HeroesComponent implements OnInit{

    heroes: Hero[];

    selectedHero: Hero ;

    constructor(private heroService: HeroService, private router:Router) {

    }

    getHeroes(): void {

        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit():void {

        this.getHeroes();
    }



    onSelect(hero: Hero):void{

        this.selectedHero = hero;
    }

    gotoDetail(): void {

        this.router.navigate(['/detail',this.selectedHero.id]);
    }

    add(name: string): void {

        name = name.trim();

        if (!name) {return};

        this.heroService.create(name)
            .then( hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero):void {

        this.heroService.delete(hero.id)
            .then(()=> {
                this.heroes = this.heroes.filter(h => h!== hero);
                if (this.selectedHero == hero) { this.selectedHero == null;}
            });
    }
}

