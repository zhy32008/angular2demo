import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule],//import: other modules whose exported classes are needed by component templates declared in this module
    declarations: [ AppComponent ],//the view classes that belong to this module. angular has three kinds of view classes:components,directives,and pipes.
    bootstrap:    [ AppComponent ]//the main application view, called the root component, that hosts all other app views. only the root module should set this bootstrap property.
    // exports: [AppComponent] ////exports: the subset of declarations that should be visible and usable in the component templates of other modules
})
export class AppModule { }
