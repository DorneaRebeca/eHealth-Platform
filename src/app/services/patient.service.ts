import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  selectedDrug=[];
  selectedDrugDinner=[];
  selectedDrugLunch=[];
  public selectedPatient;
  nutrients: number;
  // nutrients: number;
  nutritionValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  drugsBreakfast = [
    {name: 'Medicament 1',selected:false},
    {name: 'Medicament 2',selected:false},
    {name: 'Medicament 3',selected:false}
  ];
  drugsLunch = [
    {name: 'Medicament 5',selected:false},
    {name: 'Medicament 6',selected:false}
  ];
  drugsDinner = [
    {name: 'Medicament 8',selected:false},
    {name: 'Medicament 10',selected:false},
    {name: 'Medicament 13',selected:false}
  ];
  dailyMeals = [];

  constructor() {
    // localStorage.setItem('dailyMeals', JSON.stringify([]));
    this.dailyMeals = JSON.parse(localStorage.getItem('dailyMeals'));
  }

  public addNutritionValue(nutrition) {
    this.dailyMeals = JSON.parse(localStorage.getItem('dailyMeals'));
    this.nutritionValue.next(0);
    this.dailyMeals.filter(meal => {
      return new Date(meal.date).toDateString() ===  nutrition.date.toDateString() && meal.name === nutrition.meal;
    }).map( element => {
      element.status = true;
      element.calories += nutrition.nutrients;
    });
    localStorage.setItem('dailyMeals', JSON.stringify(this.dailyMeals));
  }

  getMealsForDay(day) {
    const found = this.dailyMeals.filter(meal => {
      return new Date(meal.date).toDateString() ===  day.toDateString();
    });
    if (found.length === 0) {
      this.dailyMeals.push({
        status: false,
        date: day,
        calories: 0,
        name: 'Breakfast'
      });
      this.dailyMeals.push({
        status: false,
        date: day,
        calories: 0,
        name: 'Lunch'
      });
      this.dailyMeals.push({
        status: false,
        date: day,
        calories: 0,
        name: 'Dinner'
      });
      this.dailyMeals.push({
        status: false,
        date: day,
        calories: 0,
        name: 'Snack'
      });
      localStorage.setItem('dailyMeals', JSON.stringify(this.dailyMeals));
      return this.dailyMeals;
    }
    return found;
  }

  getMealsForDayPrettyPrint(day) {
    return this.dailyMeals.filter(meal => {
      return new Date(meal.date).toDateString() ===  day.toDateString();
    })
  }

  updateNutrition(date) {
    this.nutritionValue.next(0);
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
        return rez;
      }
    }
  }

  setDrugsForBeakfast(data:{name:string,selected:boolean}[]){
    this.drugsBreakfast=data;
  }

  setDrugsForLunch(data:{name:string,selected:boolean}[]){
    this.drugsLunch=data;
  }

  setDrugsForDinner(data:{name:string,selected:boolean}[]){
    this.drugsDinner=data;
  }
  setSelectedDrugs(list){
    this.selectedDrug=list
  }
  getSelectedDrugs(){
    return this.selectedDrug
  }
  setSelectedDrugsDinner(list){
    this.selectedDrugDinner=list
  }
  getSelectedDrugsDinner(){
    return this.selectedDrugDinner
  }
  setSelectedDrugsLunch(item){
    this.selectedDrugLunch=item
  }
  getSelectedDrugsLunch(){
    return this.selectedDrugLunch
  }

}
