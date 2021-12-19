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

  currentPage = 1;
  pages = 1;
  perPage = 10;
  dishesPage: Dish[] = [];

  @Input() filteredData: any;

  constructor(private dishService: DishService) {
  }

  ngOnInit(): void {
    this.dishService.getFiltered().subscribe(dishes => {
      this.dishes = dishes;
      this.updatePage();

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

  onPerPageChange(event: Event): void {
    localStorage.setItem('perPage', String(this.perPage));
    localStorage.setItem('currentPage', '1');
    this.updatePage();
  }

  private updatePage(): void {
    if (localStorage.getItem('perPage') == null) {
      localStorage.setItem('perPage', '5');
    }

    if (localStorage.getItem('currentPage') == null) {
      localStorage.setItem('currentPage', '1');
    }

    this.perPage = Number(localStorage.getItem('perPage'));
    this.currentPage = Number(localStorage.getItem('currentPage'));

    this.perPage = Number(this.perPage);
    this.pages = Math.ceil(this.dishes.length / this.perPage);
    this.dishesPage = this.dishes.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
  }

  setPage(page: number): void {
    this.currentPage = Number(page);
    localStorage.setItem('currentPage', String(page));
    this.dishesPage = this.dishes.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
  }

}
