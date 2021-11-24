import { Component, OnInit } from '@angular/core';
import { dishes } from './data';
import { Dish } from './dish';

interface DishView extends Dish {
  selected: number,
  cheapest: boolean,
  expensive: boolean,
}

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Array<DishView> = new Array<DishView>();

  constructor() {}

  ngOnInit(): void {
    let cheapest = dishes[0];
    let cheapestIdx = 0;
    let expensive = dishes[0];
    let expensiveIdx = 0;

    for (let i = 0; i < dishes.length; i++) {
      let dish = dishes[i];
      this.dishes.push({...dish, selected: 0, cheapest: false, expensive: false});
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

  addDish(dish: DishView): void {
    if (dish.maxReleases === 0) {
      return;
    }
    dish.selected++;
    dish.maxReleases--;
  }

  removeDish(dish: DishView): void {
    if (dish.selected === 0) {
      return;
    }
    dish.selected--;
    dish.maxReleases++;
  }
}
