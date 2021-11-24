import { Component } from '@angular/core';
import { Dish } from './dishes/dish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dishSelected: Array<Dish> = new Array<Dish>();

  dishUpdate(obj: any): void {
    if (obj.op === 1) {
      this.dishSelected.push(obj.dish);
    } else {
      this.dishSelected.splice(this.dishSelected.indexOf(obj.dish), 1);
    }
  }
}
