
import './rxjs-extension';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroDetailComponent } from './hero-detail.component';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'

import { HeroesComponent }   from './heroes.component';
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import { routing } from './app.routing';
import {DashboardComponent} from "./dashboard.component";
import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule, routing,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService)],//import: other modules whose exported classes are needed by component templates declared in this module
    declarations: [ AppComponent,HeroesComponent,HeroDetailComponent,DashboardComponent,HeroSearchComponent],//the view classes that belong to this module. angular has three kinds of view classes:components,directives,and pipes.
    bootstrap:    [ AppComponent ],//the main application view, called the root component, that hosts all other app views. only the root module should set this bootstrap property.
    // exports: [HeroesComponent] ////exports: the subset of declarations that should be visible and usable in the component templates of other modules
    providers: [HeroService,],
})
export class AppModule { }
