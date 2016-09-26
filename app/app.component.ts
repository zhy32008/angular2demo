import { Component } from '@angular/core';
import { Hero } from './hero';
// import { HeroDetailComponent } from './hero-detail.component';

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    // template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>' template 会直接加载里面的内容
    templateUrl: 'app/view/app.html',

})

export class AppComponent {
    title = 'Tour of Heroes';

    public heroes = HEROES;

    selectedHero: Hero ;

    onSelect(hero: Hero):void{

        this.selectedHero = hero;
    }
}

