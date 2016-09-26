import { Component, Input } from '@angular/core'
import { Hero } from './hero';


@Component({

    selector: 'my-hero-detail',
    templateUrl: 'app/view/herodetail.html'

})

export class HeroDetailComponent {

    @Input()
    hero: Hero;

}