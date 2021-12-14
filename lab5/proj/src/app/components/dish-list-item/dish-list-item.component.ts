import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../../models/dish';
import { DishService } from '../../services/dish.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dish-list-item',
  templateUrl: './dish-list-item.component.html',
  styleUrls: ['./dish-list-item.component.css']
})
export class DishListItemComponent implements OnInit {

  @Input()
  dish: Dish;

  inCart: number = 0;

  constructor(private dishService: DishService, 
              private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getByDish(this.dish).subscribe(dishes => {
      // console.log("Dishes update for dish " + this.dish.name);
      this.inCart = dishes.length;
    });
  }

  addToCart(dish: Dish): void {
    console.log("Add dish to cart " + dish.name);
    this.cartService.add(dish);
  }

  removeFromCart(dish: Dish): void {
    console.log("Remove dish to cart " + dish.name);
    this.cartService.remove(dish);
  }

  remove(event: Event): void {
    event.preventDefault();
    this.dishService.remove(this.dish);
    this.cartService.removeDishes(this.dish);
  }

}




