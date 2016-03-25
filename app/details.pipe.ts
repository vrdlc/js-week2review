import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: 'details'
})

export class DetailsPipe implements PipeTransform {
  transform(input: Food[], args) {
    var foodCalories = args[0];
    if(foodCalories < 300) {
      return input.filter((food) => {
        return food.foodCalories === foodCalories;
      });
    } else if (foodCalories > 300) {
      return input.filter((food) => {
        return food.foodCalories === foodCalories;
      });
    } else if (foodCalories === 300) {
      return input.filter((food) => {
        return food.foodCalories === foodCalories;
      });
    } else {
      return input;
    }
  }
}
