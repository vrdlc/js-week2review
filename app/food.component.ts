import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div>
    <label>{{ food.foodName }}</label>
  </div>
  `
})

export class FoodComponent {
  public food: Food;
  toggleHealthy(setState: boolean) {
    this.food.healthy = setState;
  }
}
