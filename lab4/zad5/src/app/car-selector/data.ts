import { Car } from './car';
import { Color } from './color';

export const cars: Car[] = [
  {
    brand: "VM",
    model: "Golf",
    colors: [Color.Red, Color.Blue, Color.White]
  },
  {
    brand: "VM",
    model: "Polo",
    colors: [Color.Black, Color.Green]
  },
  {
    brand: "VM",
    model: "Passat",
    colors: [Color.Black, Color.White]
  },
  {
    brand: "Opel",
    model: "Astra",
    colors: [Color.Blue, Color.White]
  },
  {
    brand: "Opel",
    model: "Corsa",
    colors: [Color.Green, Color.White, Color.Black]
  },
  {
    brand: "Skoda",
    model: "Octavia",
    colors: [Color.Black]
  },
  {
    brand: "Toyota",
    model: "Land Cruiser",
    colors: [Color.Black, Color.White]
  },
];

