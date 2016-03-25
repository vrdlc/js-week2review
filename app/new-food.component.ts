import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onAddNewFood'],
  template: `
  <div class="food-form">

    <input placeholder="Food Name" #newFoodName class="form-control"><br>
    <input placeholder="Calories" #newFoodCalories class="form-control"><br>
    <textarea placeholder="Enter Food Details Here" #newFoodDetails class="form-control"></textarea>
    <button (click)="addFood(newFoodName, newFoodCalories, newFoodDetails)" class="btn-info btn add-button">Add Food Item to List</button>

  </div>
  `
})

export class NewFoodComponent {
  public onAddNewFood: EventEmitter<Food>;
  constructor() {
    this.onAddNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement, foodCalories: HTMLInputElement, foodDetails: HTMLInputElement) {
    var newFood: Food = new Food(foodName.value, parseInt(foodCalories.value), foodDetails.value);
    this.onAddNewFood.emit(newFood);
  }
}
