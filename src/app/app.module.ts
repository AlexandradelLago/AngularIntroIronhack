import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

//routes
import { RouterModule, Routes } from '@angular/router';

import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ComidaDetailComponent } from './comida-detail/comida-detail.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsHomeComponent } from './contacts-home/contacts-home.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';


//estas son en realidad las rutas
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'citas',  component: QuoteListComponent },
  { path: 'comida', component: FoodListComponent },
  { path: 'about/:id', component: MyAboutComponent },
  { path: 'comida/:name', component: ComidaDetailComponent},
  { path: 'servicio', component: MyCounterComponent },
  { path: 'http', component: MyAboutComponent },
  { path:'contact/:id', component:ContactsComponent, 
  children:[
    { path: '', component:ContactsHomeComponent},
    { path: 'edit', component: ContactsEditComponent }
  ] }
  
];

//servicios
import {CounterService} from './services/counter.service';
import { ContactsService } from './services/contacts.service';

//http module
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipe,
    QuoteItemComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent,
    ComidaDetailComponent,
    MyCounterComponent,
    ContactsComponent,
    ContactsHomeComponent,
    ContactsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [CounterService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
