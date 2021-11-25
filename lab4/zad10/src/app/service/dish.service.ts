import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Dish } from './../dish';
import { dishes } from './data';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private dishes: Array<Dish> = new Array<Dish>();
  private dishSubject: BehaviorSubject<Array<Dish>> = new BehaviorSubject(dishes);

  constructor() {
    this.dishes = dishes;
  }

  getAll(): Observable<Array<Dish>> {
    return this.dishSubject.asObservable();
  }

  add(dish: Dish): void {
    this.dishes.push(dish);
    this.dishSubject.next(this.dishes);
  }

  removeByName(name: string): void {
    let idx = this.dishes.findIndex(d => d.name === name);
    if (idx === -1) {
      return;
    }
    this.dishes.splice(idx, 1);
    this.dishSubject.next(this.dishes);
    console.log(this.dishes);
  }
}
