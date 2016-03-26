import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "details",
  pure: true
})

export class DetailsPipe implements PipeTransform {
  transform(input: Food[], args) {
    var caloriesInFood = args[0];
    if(caloriesInFood === "notHealthy") {
      return input.filter((food) => {
        return food.foodCalories > 300;
      });
    } else if (caloriesInFood === "healthy") {
      return input.filter((food) => {
        return food.foodCalories <= 300;
      });
    } else if (caloriesInFood === "nailedIt") {
      return input.filter((food) => {
        return food.foodCalories === 300;
      });
    } else {
      return input;
    }
  }
}
