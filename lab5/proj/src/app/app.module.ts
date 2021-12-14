import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { DishService } from './services/dish.service';
import { CartService } from './services/cart.service';
import { TestService } from './services/test.service';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishListItemComponent } from './components/dish-list-item/dish-list-item.component';
import { CartComponent } from './components/cart/cart.component';
import { DishAddComponent } from './components/dish-add/dish-add.component';
import { DishRankingComponent } from './components/dish-ranking/dish-ranking.component';
import { DishSearchComponent } from './components/dish-search/dish-search.component';
import { DishFilterPipe, DishCategoryPipe, DishCuisinePipe, DishRankingPipe, DishMinPricePipe, DishMaxPricePipe } from './pipes/dish-search.pipe';



import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishListComponent,
    DishListItemComponent,
    CartComponent,
    DishAddComponent,
    DishRankingComponent,
    DishSearchComponent,
    DishCategoryPipe,
    DishCuisinePipe,
    DishRankingPipe,
    DishMinPricePipe,
    DishMaxPricePipe,
    DishFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule
  ],
  providers: [DishService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
