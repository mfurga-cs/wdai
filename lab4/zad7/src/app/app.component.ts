import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result: number = 0;
  firstOperand: number = 0;
  secondOperand: number = 0;
  operator: string = "";

  calc(): void {
    switch (this.operator) {
      case "+":
        this.result = this.firstOperand + this.secondOperand;
      break;
      case "-":
        this.result = this.firstOperand - this.secondOperand;
      break;
      case "*":
        this.result = this.firstOperand * this.secondOperand;
      break;
      case "/":
        this.result = this.firstOperand / this.secondOperand;
      break;
    }

    this.firstOperand = this.result;
    this.secondOperand = 0;
    this.operator = "";
  }

  reset(): void {
    this.result = 0;
    this.firstOperand = 0;
    this.secondOperand = 0;
    this.operator = "";
  }

  num(digit: number): void {
    if (this.operator === '') {
      this.firstOperand = (this.firstOperand * 10) +  digit;
      this.result = this.firstOperand;
    } else {
      this.secondOperand = (this.secondOperand * 10) + digit;
      this.result = this.secondOperand;
    }
  }

  op(operator: string): void {
    if (operator === '=') {
      this.calc();
      return;
    }

    if (operator === 'ac') {
      this.reset();
      return;
    }

    this.operator = operator;
  }

}

