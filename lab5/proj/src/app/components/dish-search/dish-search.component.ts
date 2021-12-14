import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dish-search',
  templateUrl: './dish-search.component.html',
  styleUrls: ['./dish-search.component.css']
})
export class DishSearchComponent implements OnInit {

  categories: string[] = [];
  cuisines: string[] = [];
  maxPriceValue: number;
  minPriceValue: number;

  @Output() filteredDataChange = new EventEmitter<any>();

  selectedCategory: string = "";
  selectedCuisine: string = "";
  selectedRanking: number = -1;
  selectedMinPrice: number = -1;
  selectedMaxPrice: number = -1;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getAll().subscribe(dishes => {
      this.reset();

      for (let dish of dishes) {
        if (this.categories.indexOf(dish.category) == -1) {
          this.categories.push(dish.category);
        }

        if (this.cuisines.indexOf(dish.cuisine) == -1) {
          this.cuisines.push(dish.cuisine);
        }
      }
    });

    this.dishService.getFiltered().subscribe(dishes => {
      this.maxPriceValue = 0;
      this.minPriceValue = Infinity;
      for (let dish of dishes) {
        this.maxPriceValue = Math.max(this.maxPriceValue, dish.price);
        this.minPriceValue = Math.min(this.minPriceValue, dish.price);
      }
    });

    this.update();
  }

  private reset(): void {
    this.categories = [];
    this.cuisines = [];
    this.maxPriceValue = 0;
    this.minPriceValue = Infinity;
  }

  update(): void {
    this.filteredDataChange.emit({
      "category": this.selectedCategory,
      "cuisine": this.selectedCuisine,
      "ranking": this.selectedRanking,
      "minPrice": this.selectedMinPrice,
      "maxPrice": this.selectedMaxPrice
    });
  }

  changeCategory(event: Event, category: string): void {
    this.selectedCategory = category;
    this.update();
  }

  changeCuisine(event: Event, cuisine: string): void {
    this.selectedCuisine = cuisine;
    this.update();
  }

  changeRanking(event: Event, ranking: string): void {
    if (ranking == "") {
      this.selectedRanking = Number(-1);
    } else {
      this.selectedRanking = Number(ranking);
    }
    this.update();
  }

  changeMinPrice(event: Event, minPrice: string): void {
    if (minPrice == "") {
      this.selectedMinPrice = Number(-1);
    } else {
      this.selectedMinPrice = Number(minPrice);
    }
    this.update();
  }

  changeMaxPrice(event: Event, maxPrice: string): void {
    if (maxPrice == "") {
      this.selectedMaxPrice = Number(-1);
    } else {
      this.selectedMaxPrice = Number(maxPrice);
    }
    this.update();
  }

}
