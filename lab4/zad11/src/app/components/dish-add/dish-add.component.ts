import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Dish } from '../../models/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dish-add',
  templateUrl: './dish-add.component.html',
  styleUrls: ['./dish-add.component.css'],
  providers: [FormBuilder]
})
export class DishAddComponent implements OnInit {

  @Input()
  dish: Dish;
  dishForm: FormGroup;

  constructor(private dishService: DishService, 
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    if (this.dish == null) {
      this.dish = new Dish();
    }

    this.dishForm = this.formBuilder.group({
      name: [this.dish.name, Validators.required],
      cuisine: [this.dish.cuisine, Validators.required],
      category: [this.dish.category, Validators.required],
      ingredients: [this.dish.ingredients, Validators.required],
      maxReleases: [this.dish.maxReleases, [Validators.required, Validators.min(1)]],
      price: [this.dish.price, [Validators.required, Validators.min(1)]],
      description: [this.dish.description, [Validators.required, Validators.minLength(10)]],
      images: [this.dish.images, Validators.required]
    });
  }

  onSubmit(): void {
    let dish = this.dishForm.value;
    dish.ingredients = dish.ingredients.split(',');
    dish.images = dish.images.split(',');
    this.dishService.add(dish);
    this.dishForm.reset();
  }
}
