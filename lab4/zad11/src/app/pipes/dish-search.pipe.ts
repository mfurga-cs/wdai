import { Pipe, PipeTransform } from '@angular/core';

import { Dish } from '../models/dish';

@Pipe({
  name: 'dishFilter'
})
export class DishFilterPipe implements PipeTransform {

  transform(dishes: Dish[], filteredData: any): Dish[] {
    if (!dishes) {
      return [];
    }

    let result: Dish[] = dishes;

    if (!filteredData) {
      return result;
    }

    if (filteredData.category) {
      result = result.filter(dish => dish.category.toLowerCase().includes(filteredData.category));
    }

    if (filteredData.cuisine) {
      result = result.filter(dish => dish.cuisine.toLowerCase().includes(filteredData.cuisine));
    }

    if (filteredData.ranking !== -1) {
      result = result.filter(dish => dish.ranking == filteredData.ranking);
    }

    if (filteredData.minPrice !== -1) {
      result = result.filter(dish => dish.price >= filteredData.minPrice);
    }

    if (filteredData.maxPrice !== -1) {
      result = result.filter(dish => dish.price <= filteredData.maxPrice);
    }

    return result;
  }
}


@Pipe({
  name: 'dishCategory'
})
export class DishCategoryPipe implements PipeTransform {

  transform(dishes: Dish[], category: string): Dish[] {
    if (!dishes) {
      return [];
    }

    if (!category) {
      return dishes;
    }

    category = category.toLowerCase();
    return dishes.filter(dish => {
      return dish.category.toLowerCase().includes(category);
    });
  }
}

@Pipe({
  name: 'dishCuisine'
})
export class DishCuisinePipe implements PipeTransform {

  transform(dishes: Dish[], cuisine: string): Dish[] {
    if (!dishes) {
      return [];
    }

    if (!cuisine) {
      return dishes;
    }

    cuisine = cuisine.toLowerCase();
    return dishes.filter(dish => {
      return dish.cuisine.toLowerCase().includes(cuisine);
    });
  }
}

@Pipe({
  name: 'dishRanking'
})
export class DishRankingPipe implements PipeTransform {

  transform(dishes: Dish[], ranking: number): Dish[] {
    if (!dishes) {
      return [];
    }

    if (ranking === -1) {
      return dishes;
    }

    return dishes.filter(dish => {
      return dish.ranking == ranking;
    });
  }
}

@Pipe({
  name: 'dishMinPrice'
})
export class DishMinPricePipe implements PipeTransform {

  transform(dishes: Dish[], minPrice: number): Dish[] {
    if (!dishes) {
      return [];
    }

    if (minPrice === -1) {
      return dishes;
    }

    return dishes.filter(dish => {
      return dish.price >= minPrice;
    });
  }
}

@Pipe({
  name: 'dishMaxPrice'
})
export class DishMaxPricePipe implements PipeTransform {

  transform(dishes: Dish[], maxPrice: number): Dish[] {
    if (!dishes) {
      return [];
    }

    if (maxPrice === -1) {
      return dishes;
    }

    return dishes.filter(dish => {
      return dish.price <= maxPrice;
    });
  }
}






