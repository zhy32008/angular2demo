/**
 * Created by dennis on 16/10/2.
 */

import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from  'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';

import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'view/herosearch.html',
    styleUrls: ['css/herosearch.css'],
    providers: [HeroSearchService],
})

export class HeroSearchComponent implements OnInit {

    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroSearchService:HeroSearchService,private router:Router){}

    //put a search term into observer stream

    search(term: string): void {

        this.searchTerms.next(term);
    }

    ngOnInit(): void{

        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term // switch to new observable each time
        // return http search observable
                ?this.heroSearchService.search(term)
                :Observable.of<Hero[]>([])
        )
            .catch( error =>{

                console.error(error);
                return Observable.of<Hero[]>([]);
            });


    }


    gotoDetail(hero: Hero): void {

        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }
}

