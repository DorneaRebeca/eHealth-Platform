import { Injectable } from '@angular/core';
import {Meal} from "../patient/food-tracker/food-tracker.component";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  nutritionValue = 0;
  dailyMeals = [];// = [{'Breakfast': false}, {'Lunch': false}, {'Dinner': false}];
  constructor() {
    this.dailyMeals.push({name: 'Breakfast', status: false, calories: 0});
    this.dailyMeals.push({name: 'Lunch', status: true, calories: 0});
    this.dailyMeals.push({name: 'Dinner', status: false, calories: 0});
    this.dailyMeals.push({name: 'Snack', status: false, calories: 0});
  }

  public addNutritionValue(numberOfNutrition) {
    //2000 is max
    this.nutritionValue = numberOfNutrition;
  }
}
