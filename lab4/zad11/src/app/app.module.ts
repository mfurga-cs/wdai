import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { DishService } from './services/dish.service';
import { CartService } from './services/cart.service';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { DishesListItemComponent } from './components/dishes-list-item/dishes-list-item.component';
import { CartComponent } from './components/cart/cart.component';
import { DishAddComponent } from './components/dish-add/dish-add.component';
import { DishRankingComponent } from './components/dish-ranking/dish-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishesListComponent,
    DishesListItemComponent,
    CartComponent,
    DishAddComponent,
    DishRankingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DishService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }