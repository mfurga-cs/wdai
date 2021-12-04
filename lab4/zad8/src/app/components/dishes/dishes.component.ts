import { Component, OnInit } from '@angular/core';

import { Dish } from '../../models/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  filteredData: any;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
  }

  onFilteredDataChange(event: any): void {
    this.filteredData = event;
    this.dishService.filter(this.filteredData);
  }
}
