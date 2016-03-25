import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class="food-form">
    <h3>Edit Food Item: </h3>
      <input [(ngModel)]="food.foodName" class="col-sm-8 input-lg food-form"/>
      <input [(ngModel)]="food.foodCalories" class="col-sm-8 input-lg food-form"/>
      <textarea [(ngModel)]="food.foodDetails" class="col-sm-8 input-lg food-form"></textarea>
  </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
