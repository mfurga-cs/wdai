import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-ranking',
  templateUrl: './dish-ranking.component.html',
  styleUrls: ['./dish-ranking.component.css']
})
export class DishRankingComponent implements OnInit {

  maxRanking: number = 5;
  starNumbers: number[] = [];
  starFilled: boolean[] = [];
  ranked: boolean = false;

  constructor() {
    this.starNumbers = Array(this.maxRanking).fill(0).map((x, i) => i);
    this.starFilled = Array(this.maxRanking).fill(false);
  }

  ngOnInit(): void {
  }

  starHover(rate: number): void {
    if (!this.ranked) {
      this.starFilled = this.starFilled.map((x, i) => i <= rate);
    }
  }

  starSet(rate: number): void {
    if (!this.ranked) {
      this.ranked = true;
    }
  }

  reset(): void {
    if (!this.ranked) {
      this.starFilled.fill(false);
    }
  }

}
