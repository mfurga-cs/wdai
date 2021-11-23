import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zad6';

  clicks: number = 0;
  block: boolean = false;

  printClicks(clicks: number): void {
    this.clicks = clicks;
    if (clicks >= 10) {
      this.block = true;
    } else {
      this.block = false;
    }
  }
}
