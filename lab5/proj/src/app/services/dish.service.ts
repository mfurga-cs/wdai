import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, BehaviorSubject, map } from 'rxjs';

import { Dish } from '../models/dish';
import { DISHES } from './mock-data';
import { DishFilterPipe } from '../pipes/dish-search.pipe';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private dishes: Dish[] = [];
  private dishesSubject = new BehaviorSubject<Dish[]>(this.dishes);
  private filteredData: any;
  private dishFilterPipe = new DishFilterPipe();

  constructor(private db: AngularFirestore) {}

  private initData(): void {
    for (let dish of DISHES) {
      this.add(dish);
    }
  }

  getAll(): Observable<Dish[]> {
    const ref = this.db.collection<Dish>('/dishes');
    ref.valueChanges({ idField: 'id' }).subscribe(dishes => {
      this.dishes = dishes;
      this.dishesSubject.next(this.dishes);
    });
    return this.dishesSubject.asObservable();
  }

  getFiltered(): Observable<Dish[]> {
    return this.dishesSubject.pipe(map(dishes => this.dishFilterPipe.transform(dishes, this.filteredData)));
  }

  getById(id: string): Observable<Dish | undefined> {  
    return this.db.collection<Dish>('/dishes').doc(id).valueChanges({ idField: 'id' });
  }

  add(dish: Dish): void {
    this.db.collection('/dishes').add({
      'name': dish.name,
      'cuisine': dish.cuisine,
      'category': dish.category,
      'ingredients': dish.ingredients,
      'maxReleases': dish.maxReleases,
      'price': dish.price,
      'ranking': 0,
      'description': dish.description,
      'images': dish.images
    });
  }

  update(dish: Dish): void {
    this.db.collection('/dishes').doc(dish.id).set({
      'name': dish.name,
      'cuisine': dish.cuisine,
      'category': dish.category,
      'ingredients': dish.ingredients,
      'maxReleases': dish.maxReleases,
      'price': dish.price,
      'ranking': dish.ranking,
      'description': dish.description,
      'images': dish.images
    });
  }

  remove(dish: Dish): void {
    this.db.collection<Dish>('/dishes').doc(dish.id).delete();
  }

  filter(filteredData: any): void {
    this.filteredData = filteredData;
    this.dishesSubject.next(this.dishes);
  }
}

