import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dish } from '../../models/dish';
import { Review } from '../../models/review';
import { DishService } from '../../services/dish.service';
import { CartService } from '../../services/cart.service';
import { ReviewService } from '../../services/review.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css'],
  providers: [FormBuilder]
})
export class DishDetailComponent implements OnInit {

  dish: Dish;
  inCart: number = 0;
  reviews: Review[] = [];

  review: Review;
  reviewForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private dishService: DishService,
              private cartService: CartService,
              private reviewService: ReviewService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.review == null) {
      this.review = new Review();
    }

    const id = this.route.snapshot.params['id'];
    this.dishService.getById(id).subscribe(dish => {
      if (dish === undefined) {
        return;
      }
      this.dish = dish;

      this.cartService.getByDish(this.dish).subscribe(dishes => {
        this.inCart = dishes.length;
      });

      this.reviewService.getByDishId(id).subscribe(reviews => {
        this.reviews = reviews;
      });
    });

    this.reviewForm = this.formBuilder.group({
      nick: [this.review.nick, Validators.required],
      name: [this.review.name, Validators.required],
      text: [this.review.text, [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      purchaseDate: [this.review.purchaseDate]
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

  onSubmit(): void {
    let review: Review = this.reviewForm.value;
    review.dishId = this.dish.id;
    console.log(review);
    // dish.ingredients = dish.ingredients.split(',');
    // dish.images = dish.images.split(',');
    // dish.ranking = 0;
    this.reviewService.add(review);
    this.reviewForm.reset();
  }
}
