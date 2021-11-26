import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Dish } from '../dish';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  dishForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    cuisine: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
    maxReleases: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    images: new FormControl('', Validators.required)
  });

  constructor(private dishService: DishService) {

  }

  addDish(): void {
    let dish: Dish = {
      name: this.dishForm.value.name,
      cuisine: this.dishForm.value.cuisine,
      category: this.dishForm.value.category,
      ingredients: this.dishForm.value.ingredients.split(","),
      maxReleases: this.dishForm.value.maxReleases,
      price: this.dishForm.value.price,
      description: this.dishForm.value.description,
      images: this.dishForm.value.images.split(",")
    };
    this.dishService.add(dish);
  }
}
