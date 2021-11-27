import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../../models/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  dishes: Dish[] = [];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getAll().subscribe(dishes => {
      this.dishes = dishes;
    });
  }

  removeDish(dish: Dish): void {
    this.dishService.remove(dish);
  }

  show() {
    console.log(this.dishes);
  }
}
