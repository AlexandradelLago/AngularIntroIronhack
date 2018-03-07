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

//estas son en realidad las rutas
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'citas',  component: QuoteListComponent },
  { path: 'comida', component: FoodListComponent },
  { path: 'about/:id', component: MyAboutComponent },
  { path: 'comida/:name', component: ComidaDetailComponent},
  { path: 'servicio', component: MyCounterComponent }
  
];

//servicios
import {CounterService} from './services/counter.service';

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
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
