import { Dish } from '../dish';

export interface DishView extends Dish {
  selected: number,
  cheapest: boolean,
  expensive: boolean,
}


