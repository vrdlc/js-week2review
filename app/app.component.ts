import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container">
  <div class="jumbotron top">
    <h1>Jim's Gym's Calorie Counter</h1>
    </div>
  </div>
    <div class="container">
    <div class="jumbotron main">
      <food-list [foodList]="foods" (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  </div>
  `
})

export class AppComponent {
  public foods: Food[]
  public food: Food;
  constructor() {
    this.foods = [
      new Food("Hamburger", 400, "1/4 of beef, no cheese, boring"),
      new Food("Kale salad", 300, "Salad had ranch dressing (145 cal) and croutons (122 cal), not exciting"),
      new Food("Stick of Butter", 810, "I know I shouldn't have, but it looked so good I thought I'd just have a lick and before I knew it, the stick was gone."),
      new Food("One Cracker", 10, "I just had one...")
    ];
  }
  foodWasSelected(clickedFood: Food): void {
  }

}
