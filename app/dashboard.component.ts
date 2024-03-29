/**
 * Created by dennis.zhao on 2016/9/29.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({

    selector: 'my-dashboard',
    templateUrl: 'app/view/dashboard.html',
    styleUrls: ['app/css/dashboard.css'],
})

export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router){

    }

    ngOnInit(): void {

        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero): void {

        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}