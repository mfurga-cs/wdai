import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';

import { Dish } from '../models/dish';
import { DISHES } from './mock-data';
import { DishFilterPipe } from '../pipes/dish-search.pipe';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private dishes: Dish[] = [];
  private filteredData: any;
  private dishesSubject = new BehaviorSubject<Dish[]>(this.dishes);
  private dishFilterPipe = new DishFilterPipe();

  constructor() {
    this.dishes = DISHES;
    this.dishesSubject.next(this.dishes);
  }

  getAll(): Observable<Dish[]> {
    return this.dishesSubject.asObservable();
  }

  getFiltered(): Observable<Dish[]> {
    return this.dishesSubject.pipe(map(dishes => this.dishFilterPipe.transform(dishes, this.filteredData)));
  }

  add(dish: Dish): void {
    this.dishes.push(dish);
    this.dishesSubject.next(this.dishes);
  }

  remove(dish: Dish): void {
    this.dishes = this.dishes.filter(e => e !== dish);
    this.dishesSubject.next(this.dishes);
  }

  filter(filteredData: any): void {
    this.filteredData = filteredData;
    this.dishesSubject.next(this.dishes);
  }
}

