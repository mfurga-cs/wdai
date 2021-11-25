
export interface Dish {
  name: string,
  cuisine: string,
  category: string,
  ingredients: string[],
  maxReleases: number,
  price: number,
  description: string,
  images: string[]
}

export interface DishView extends Dish {
  selected: number,
  cheapest: boolean,
  expensive: boolean,
}

