import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { ShowFoodComponent } from './show-food.component';
import { DetailsPipe } from './details.pipe';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [DetailsPipe],
  directives: [FoodComponent, NewFoodComponent, EditFoodDetailsComponent, ShowFoodComponent],
  //DOES MY TEMPLATE NEED TO BE IN ITS OWN HTML?
  template: `
  <!-- FOOD DETAILS FILTER (USING FoodPipe) -->
  <div class = "col-md-6">
  <h3>Filter Foods Eaten:</h3>
  <select (change)="onChange($event.target.value)" class="filter form-control">
    <option value="all">Show All Food Eaten</option>
    <option value="healthy">Healthy (< 300 cal)</option>
    <option value="unhealthy">Unhealthy (> 300 cal)</option>
    <option value="NAILED IT">NAILED IT (300 cal exactly)</option>
  </select><br><br>




  <!-- ADD NEW FOOD -->
  <new-food (onAddNewFood)="createFood($event)"></new-food>
  </div>

  <div class = "col-md-6">
    <p>Food Eaten Today </p>
  <food-display *ngFor="#currentFood of foodList | details: filterFoodDetails"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  </div>

  <show-food *ngIf="selectedFood" [food]="selectedFood">
  </show-food>

  <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
  </edit-food-details>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public food: Food;
  public filterFoodDetails: string = "all";

  constructor() {
    this.onFoodSelect = new EventEmitter();
  }

  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood)
}
  createFood(newFood: Food): void {
    console.log(newFood);
    this.foodList.push(newFood);
  }
  onChange(filterOption) {
    this.filterFoodDetails = filterOption;
    console.log(this.filterFoodDetails);
  }
}
