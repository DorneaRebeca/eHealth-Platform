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
        console.log(rez);
        return rez;
      }
  }
