import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodDetails } from './edit-food.details';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [FoodPipe],
  directives: [FoodComponent, NewFoodComponent],
  //DOES MY TEMPLATE NEED TO BE IN ITS OWN HTML?
  template: `
  <!-- FOOD DETAILS FILTER (USING FoodPipe) -->
  <div class = "col-md-6">
  <h3>Filter Foods Eaten:</h3>
  <select (change)="onChange($event.target.value)" class="filter form-control">
    <option value="all">Show All Food Eaten</option>
    <option value="healthy">Healthy (< 300 cal)</option>
    <option value="unhealthy">Unhealthy (> 300 cal)</option>
  </select><br><br>


  <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
  </edit-food-details>

  <!-- ADD NEW FOOD -->
  <new-food (onAddNewFood)="createFood($event)"></new-food>
  </div>

  <div class = "col-md-6">
    <p>Food Eaten Today </p>
  <food-display *ngFor="#currentFood of foodList | details: filterBeerDetails
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>

  </div>
  `
})
