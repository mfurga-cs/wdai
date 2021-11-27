import { Component, OnInit } from '@angular/core';

import { Dish } from '../../models/dish';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dishesGroup: Array<{name: string, count: number, price: number}> = [];
  totalCount: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAll().subscribe(dishes => {
      this.dishesGroup = [];
      this.totalCount = 0;
      this.totalPrice = 0;

      for (let dish of dishes) {
        this.totalCount += 1;
        this.totalPrice += dish.price;

        let idx = this.dishesGroup.findIndex(e => e.name === dish.name);
        if (idx !== -1) {
          this.dishesGroup[idx].count += 1;
          this.dishesGroup[idx].price += dish.price;
        } else {
          this.dishesGroup.push({
            "name": dish.name, "price": dish.price, "count": 1
          });
        }
      }
    });
  }
}
