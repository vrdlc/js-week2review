import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'show-food',
  inputs: ['food'],
  template: `
  <div class="showFood">
    <h3>{{ food.foodName }}, {{ food.foodCalories }} cal, Additional Details: {{ food.foodDetails }}</h3>
  </div>
  `
})

export class ShowFoodComponent {
  public food: Food;
}
