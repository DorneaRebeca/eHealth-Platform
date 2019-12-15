import { Injectable } from '@angular/core';
import {Meal} from "../patient/food-tracker/food-tracker.component";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  nutrients: number;
  nutritionValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  dailyMeals = [];// = [{'Breakfast': false}, {'Lunch': false}, {'Dinner': false}];

  constructor() {
    this.nutrients = JSON.parse(localStorage.getItem('nutrients'));
    this.dailyMeals = JSON.parse(localStorage.getItem('dailyMeals'))
  }

  public addNutritionValue(numberOfNutrition, toMeal) {
    //2000 is max
    this.nutrients += numberOfNutrition;
    localStorage.setItem('nutrients', JSON.stringify(this.nutrients));
    this.nutritionValue.next(this.nutrients);
    this.dailyMeals[toMeal].status = true;
    this.dailyMeals[toMeal].calories += numberOfNutrition;
    localStorage.setItem('dailyMeals', JSON.stringify(this.dailyMeals));
  }

  saveDataInLocalStorageArray(tempData, arrayName : string) :void {
    if(localStorage.getItem(arrayName) != null) {

        let readData = JSON.parse(localStorage.getItem(arrayName));
        readData.push(tempData);
      localStorage.setItem(arrayName, JSON.stringify(readData) );
    }
    else {
      let temperatureData = [tempData];
      localStorage.setItem(arrayName, JSON.stringify(temperatureData) );
    }
    }

    getDataOnDate(date: Date, dataName : string) {
        let data = JSON.parse(localStorage.getItem(dataName));
        let rez;

        if(data) {
          for(let i = 0; i < data.length; i++) {
            if(new Date(data[i].date).toDateString() ==  date.toDateString() ) {
               rez = data[i];
            }
          }
        }
        return rez;
  }

  }
