import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'show-food',
  inputs: ['food'],
  template: `
  <div class="showFood">
    <h3>{{ food.foodName }}, {{ food.foodCalories }} cal<br> <p class="details">Additional Details: {{ food.foodDetails }}</p></h3>
  </div>
  `
})

export class ShowFoodComponent {
  public food: Food;
}
