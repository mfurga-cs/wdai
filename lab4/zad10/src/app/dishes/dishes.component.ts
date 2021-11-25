import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Dish } from './../dish';
import { DishView } from './dishView';
import { DishService } from './../service/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Array<DishView> = new Array<DishView>();

  @Output()
  dishUpdate: EventEmitter<DishView> = new EventEmitter();

  constructor(private dishService: DishService) {

  }

  ngOnInit(): void {
    this.dishService.getAll().subscribe(dishes => {
      this.updateDishes(dishes.map(dish => ({...dish, selected: 0, cheapest: false, expensive: false})));
    });
  }

  updateDishes(dishes: DishView[]) {
    let cheapest = dishes[0];
    let cheapestIdx = 0;
    let expensive = dishes[0];
    let expensiveIdx = 0;

    let newDishes = [];

    for (let i = 0; i < dishes.length; i++) {
      let dish = dishes[i];
      newDishes.push(dish);

      let idx = this.dishes.findIndex(d => d.name === dish.name);
      if (idx !== -1) {
        dish.selected = this.dishes[idx].selected;
        dish.cheapest = this.dishes[idx].cheapest;
        dish.expensive = this.dishes[idx].expensive;
      }

      if (dish.price < cheapest.price) {
        cheapest = dish; cheapestIdx = i;
      }
      if (dish.price > expensive.price) {
        expensive = dish;expensiveIdx = i;
      }
    }
    newDishes[cheapestIdx].cheapest = true;
    newDishes[expensiveIdx].expensive = true;
    this.dishes = newDishes;
  }

  incDish(dish: DishView): void {
    if (dish.maxReleases === 0) {
      return;
    }
    dish.selected++;
    dish.maxReleases--;
    this.dishUpdate.emit(dish);
  }

  decDish(dish: DishView): void {
    if (dish.selected === 0) {
      return;
    }
    dish.selected--;
    dish.maxReleases++;
    this.dishUpdate.emit(dish);
  }

  removeDish(dish: DishView): void {
    this.dishService.removeByName(dish.name);
    dish.selected = 0;
    this.dishUpdate.emit(dish);
  }
}
