import { Component, OnInit } from '@angular/core';

import { Dish } from '../../models/dish';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<{dish: Dish, count: number}> = [];
  totalCount: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAll().subscribe(dishes => {
      this.items = [];
      this.totalCount = 0;
      this.totalPrice = 0;

      for (let dish of dishes) {
        this.totalCount += 1;
        this.totalPrice += dish.price;

        let idx = this.items.findIndex(e => e.dish.id === dish.id);
        if (idx !== -1) {
          this.items[idx].count += 1;
        } else {
          this.items.push({"dish": dish, "count": 1});
        }
      }

      this.items.sort((a, b) => a.dish.name > b.dish.name ? 1 : -1);
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

}
