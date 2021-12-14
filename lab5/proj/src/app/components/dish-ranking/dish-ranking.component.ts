import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../../models/dish';

@Component({
  selector: 'app-dish-ranking',
  templateUrl: './dish-ranking.component.html',
  styleUrls: ['./dish-ranking.component.css']
})
export class DishRankingComponent implements OnInit {

  @Input() dish: Dish;

  maxRanking: number = 5;
  starNumbers: number[] = [];
  starFilled: boolean[] = [];
  ranked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.starNumbers = Array(this.maxRanking).fill(0).map((x, i) => i);
    this.starFilled = Array(this.maxRanking).fill(false);
    this.starFilled = this.starFilled.map((x, i) => i < this.dish.ranking);

    this.ranked = this.dish.ranking !== 0;
  }

  starHover(rate: number): void {
    if (!this.ranked) {
      this.starFilled = this.starFilled.map((x, i) => i <= rate);
    }
  }

  starSet(rate: number): void {
    if (!this.ranked) {
      this.dish.ranking = rate + 1;
      this.ranked = true;
    }
  }

  reset(): void {
    if (!this.ranked) {
      this.starFilled = this.starFilled.map((x, i) => i < this.dish.ranking);
    }
  }

}
