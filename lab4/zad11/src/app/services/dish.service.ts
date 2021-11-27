import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Dish } from '../models/dish';
import { DISHES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private dishes: Dish[] = [];
  private dishesSubject = new BehaviorSubject<Dish[]>(this.dishes);

  constructor() {
    this.dishes = DISHES;
    this.dishesSubject.next(this.dishes);
  }

  getAll(): Observable<Dish[]> {
    return this.dishesSubject.asObservable();
  }

  add(dish: Dish): void {
    this.dishes.push(dish);
    this.dishesSubject.next(this.dishes);
  }

  remove(dish: Dish): void {
    this.dishes = this.dishes.filter(e => e !== dish);
    this.dishesSubject.next(this.dishes);
  }
}

