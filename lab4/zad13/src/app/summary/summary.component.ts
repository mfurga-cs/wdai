import { Component, DoCheck, Input,SimpleChanges } from '@angular/core';
import { Summary } from './summary';
import { DishView } from './../dishes/dishView';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements DoCheck {

  summaryList: Array<Summary> = new Array<Summary>();
  summaryCount: number = 0;
  summaryPrice: number = 0;

  @Input()
  dishSelected: Array<DishView> = new Array<DishView>();

  constructor() { }

  ngDoCheck() {
    this.summaryList = [];
    this.summaryCount = 0;
    this.summaryPrice = 0;

    for (let dish of this.dishSelected) {
      this.summaryCount += dish.selected;
      this.summaryPrice += dish.price * dish.selected;
      this.summaryList.push({name: dish.name,
                             count: dish.selected,
                             totalPrice: dish.price * dish.selected});
    }
  }
}
