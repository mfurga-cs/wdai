import { Component } from '@angular/core';
import { DishView } from './dishes/dish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dishSelected: Array<DishView> = new Array<DishView>();

  dishUpdate(dish: DishView): void {
    let idx = this.dishSelected.findIndex(e => e.name == dish.name);

    if (idx === -1) {
      if (dish.selected !== 0) {
        this.dishSelected.push(dish);
      }
    } else {
      if (dish.selected === 0) {
        this.dishSelected.splice(idx, 1);
      } else {
        this.dishSelected[idx] = dish;
      }
    }
  }
}
