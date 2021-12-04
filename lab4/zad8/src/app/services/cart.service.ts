import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';

import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private dishes: Dish[] = [];
  private dishesSubject = new BehaviorSubject<Dish[]>(this.dishes);

  constructor() { }

  getAll(): Observable<Dish[]> {
    return this.dishesSubject.asObservable();
  }

  getByDish(dish: Dish): Observable<Dish[]> {
    return this.dishesSubject.pipe(map(dishes => dishes.filter(d => d === dish)));
  }

  add(dish: Dish): void {
    if (dish.maxReleases === 0) {
      return;
    }
    dish.maxReleases--;
    this.dishes.push(dish);
    this.dishesSubject.next(this.dishes);
  }

  remove(dish: Dish): void {
    let idx = this.dishes.indexOf(dish);
    if (idx !== -1) {
      dish.maxReleases++;
      this.dishes.splice(idx, 1);
      this.dishesSubject.next(this.dishes);
    }
  }

  removeDishes(dish: Dish): void {
    this.dishes = this.dishes.filter(d => d !== dish);
    this.dishesSubject.next(this.dishes);
  }
}
