import { Component, OnInit } from '@angular/core';
import { cars } from './data';
import { Car } from './car';
import { Color } from './color';

@Component({
  selector: 'app-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.css']
})
export class CarSelectorComponent implements OnInit {
  done: boolean = false;

  brands: string[] = [];
  models: string[] = [];
  colors: Color[] = [];

  selectedBrand: string = "blank";
  selectedModel: string = "blank";
  selectedColor: string = "blank";

  modelIsDisabled: boolean = true;
  colorIsDisabled: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.setBrands(cars);
  }

  setBrands(cars: Car[]) : void {
    for (let car of cars) {
      if (!this.brands.includes(car.brand)) {
        this.brands.push(car.brand);
      }
    }
  }

  setModelsFromBrand() : void {
    this.models = [];
    for (let car of cars) {
      if (car.brand === this.selectedBrand) {
        this.models.push(car.model);
      }
    }
  }

  setColorsFromBrandAndModel() : void {
    this.colors = [];
    for (let car of cars) {
      if (car.brand === this.selectedBrand &&
          car.model === this.selectedModel) {
        this.colors.push(...car.colors);
      }
    }
  }

  changeBrand() {
    this.selectedColor = "blank";
    this.selectedModel = "blank";
    this.done = false;
    this.setModelsFromBrand();
    this.modelIsDisabled = false;
    this.colorIsDisabled = true;
  }

  changeModel() {
    this.selectedColor = "blank";
    this.done = false;
    this.setColorsFromBrandAndModel();
    this.colorIsDisabled = false;
  }

  changeColor() {
    this.done = true;
  }
}
