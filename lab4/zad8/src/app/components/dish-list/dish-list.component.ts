import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../../models/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[] = [];
  cheapestDish: Dish | null;
  dearestDish: Dish | null;

  @Input() filteredData: any;

  constructor(private dishService: DishService) {
  }

  ngOnInit(): void {
    this.dishService.getFiltered().subscribe(dishes => {
      this.dishes = dishes;
      this.cheapestDish = null;
      this.dearestDish = null;

      for (let dish of dishes) {
        if (this.cheapestDish === null || this.cheapestDish.price > dish.price) {
          this.cheapestDish = dish;
        }

        if (this.dearestDish === null || this.dearestDish.price < dish.price) {
          this.dearestDish = dish;
        }
      }

    });
  }
}
