import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div>
    <label>{{ food.foodName }}</label>
    <label>{{ food.foodCalories }}</label>
    <label>{{ food.foodDetails }}</label>
  `
})

export class FoodComponent {
  public food: Food;
}
