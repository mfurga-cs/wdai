import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zad11';

  constructor(private testService: TestService) {
    testService.getAll().subscribe(data => {
      console.log(data);
    });
  }




}
