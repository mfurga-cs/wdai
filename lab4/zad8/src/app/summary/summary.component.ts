import { Component, DoCheck, Input,SimpleChanges } from '@angular/core';
import { Summary } from './summary';
import { Dish } from './../dishes/dish';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements DoCheck {

  summaryList: Array<Summary> = new Array<Summary>();
  summaryCount: number = 0;

  @Input()
  dishSelected: Array<Dish> = new Array<Dish>();

  constructor() { }

  ngDoCheck() {
    this.summaryList = [];
    this.summaryCount = this.dishSelected.length;
    for (let dish of this.dishSelected) {
      let idx = this.summaryList.findIndex(e => e.name == dish.name);
      if (idx === -1) {
        this.summaryList.push({name: dish.name, count: 1, totalPrice: dish.price});
      } else {
        this.summaryList[idx].count++;
        this.summaryList[idx].totalPrice += dish.price;
      }
    }
  }
}
