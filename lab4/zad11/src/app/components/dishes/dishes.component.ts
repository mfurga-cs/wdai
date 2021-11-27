import { Component, OnInit } from '@angular/core';

import { Dish } from '../../models/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
