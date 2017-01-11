import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {TableComponent} from "./table.component";
import {SortButtonsComponent} from "./sort-buttons.component";
import {SortingService} from "./sorting.service";
// import {SearchBox} from './search-box' ;
import {SearchPipe} from './search.pipe';
import{FormsModule} from '@angular/forms'
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    imports:      [ BrowserModule ,FormsModule],
    declarations: [ AppComponent,TableComponent,SortButtonsComponent,SearchPipe],
    bootstrap:    [ AppComponent ],
   providers:[SortingService]
})
export class AppModule {
}
