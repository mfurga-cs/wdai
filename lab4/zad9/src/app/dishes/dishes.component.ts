import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { dishes } from './data';
import { Dish, DishView } from './dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Array<DishView> = new Array<DishView>();

  @Output()
  dishUpdate: EventEmitter<DishView> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.updateDishes(dishes.map(dish => ({...dish, selected: 0, cheapest: false, expensive: false})));
  }

  updateDishes(dishes: DishView[]) {
    let cheapest = dishes[0];
    let cheapestIdx = 0;
    let expensive = dishes[0];
    let expensiveIdx = 0;

    this.dishes = [];
    for (let i = 0; i < dishes.length; i++) {
      let dish = dishes[i];
      this.dishes.push(dish);
      if (dish.price < cheapest.price) {
        cheapest = dish; cheapestIdx = i;
      }
      if (dish.price > expensive.price) {
        expensive = dish;expensiveIdx = i;
      }
    }
    this.dishes[cheapestIdx].cheapest = true;
    this.dishes[expensiveIdx].expensive = true;
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
    this.dishes.splice(this.dishes.indexOf(dish), 1);
    this.updateDishes(this.dishes);
    dish.selected = 0;
    this.dishUpdate.emit(dish);
  }
}
