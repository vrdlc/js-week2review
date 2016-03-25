import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {
    var caloriesInFood = args[0];
    if(caloriesInFood === "healthy") {
      return input.filter((food) => {
        return food.healthy;
      });
    } else if (caloriesInFood === "notHealthy") {
      return input.filter((food) => {
        return !food.healthy;
      });
    } else {
      return input;
    }
  }
}
