import { Component, DoCheck, Input,SimpleChanges } from '@angular/core';
import { Summary } from './summary';
import { DishView } from './../dishes/dish';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements DoCheck {

  summaryList: Array<Summary> = new Array<Summary>();
  summaryCount: number = 0;

  @Input()
  dishSelected: Array<DishView> = new Array<DishView>();

  constructor() { }

  ngDoCheck() {
    this.summaryList = [];
    this.summaryCount = 0;

    for (let dish of this.dishSelected) {
      this.summaryCount += dish.selected;
      this.summaryList.push({name: dish.name,
                             count: dish.selected,
                             totalPrice: dish.price * dish.selected});
    }
  }
}
