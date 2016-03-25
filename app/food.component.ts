import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div>
  <input *ngIf="food.healthy" type="checkbox" checked (click)="toggleHealthy(false)"/>
  <input *ngIf="!food.healthy" type="checkbox" (click)="toggleHealthy(true)"/>
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
