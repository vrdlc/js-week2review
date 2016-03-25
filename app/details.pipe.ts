import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "details",
  pure: false
})

export class DetailsPipe implements PipeTransform {
  transform(input: Food[], args) {
    var caloriesInFood = args[0];
    if(caloriesInFood < 300) {
      return input.filter((food) => {
        return food.foodCalories === caloriesInFood;
      });
    } else if (caloriesInFood > 300) {
      return input.filter((food) => {
        return food.foodCalories === caloriesInFood;
      });
    } else if (caloriesInFood === 300) {
      return input.filter((food) => {
        return food.foodCalories === caloriesInFood;
      });
    } else {
      return input;
    }
  }
}
