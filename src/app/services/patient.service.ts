import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface Drug {
  name: string;
  position: number;
  perday:number;
  daysRemaining: number;
  availablequantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  selectedDrug=[];
  selectedDrugDinner=[];
  selectedDrugLunch=[];
  public selectedPatient;
  nutrients: number;
  showLink=false;
  // nutrients: number;
  nutritionValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  ELEMENT_DATA: Drug[] = [
    {position: 1, name: 'Paracetamol', perday: 1, daysRemaining: 6,availablequantity:6},
    {position: 2, name: 'Dicarbocalm', perday: 2, daysRemaining: 3,availablequantity:7},
    {position: 3, name: 'Abacarvir', perday: 2, daysRemaining: 3,availablequantity:7},
    {position: 4, name: 'Aciclovir', perday: 2, daysRemaining: 3,availablequantity:6},
    {position: 5, name: 'Amoxicilina', perday: 2, daysRemaining: 3,availablequantity:7},
    {position: 6, name: 'Eficen', perday: 2, daysRemaining: 3,availablequantity:7},
    {position: 7, name: 'Berinert', perday: 2, daysRemaining: 3,availablequantity:7},
    {position: 8, name: 'Marcofen', perday: 2, daysRemaining: 3,availablequantity:7},
  ];
  drugsBreakfast = [
    {name: 'Paracetamol',selected:false},
    {name: 'Dicarbocalm',selected:false},
    {name: 'Abacarvir',selected:false}
  ];
  drugsLunch = [
    {name: 'Aciclovir',selected:false},
    {name: 'Amoxicilina',selected:false}
  ];
  drugsDinner = [
    {name: 'Eficen',selected:false},
    {name: 'Berinert',selected:false},
    {name: 'Marcofen',selected:false}
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
  getMyDrugs(){
    return this.ELEMENT_DATA
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
          return rez;
        }
        
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
  setShowLink(){
    this.showLink=true;
  }
  getShowLink(){
    return this.showLink
  }
  findMedicationDetails(id) {
    let med=this.ELEMENT_DATA
    return med.filter( medication => medication.name === id)[0];
  }
  updateStock(medication,duration){
    
    for (var i=0; i<medication.length; i++) {
      console.log(medication[i].name)
      var indexp =this.findMedicationDetails(medication[i].name) //this.ELEMENT_DATA.indexOf(medication[i].name);
     
      let index=indexp.position
      if(index==-1){
        let pos=this.ELEMENT_DATA.length;
        let qty=medication[i].dosage*duration
        this.ELEMENT_DATA.push( {position: pos+1, name: medication[i].name, perday: medication[i].dosage, daysRemaining: duration,availablequantity:qty})
      }
      else{
        let days=this.ELEMENT_DATA[index-1].daysRemaining
        let qty=this.ELEMENT_DATA[index-1].availablequantity
        this.ELEMENT_DATA[index-1].daysRemaining=days+duration;
        this.ELEMENT_DATA[index-1].availablequantity=qty+medication[i].dosage*duration
        this.ELEMENT_DATA[index-1].perday=medication[i].dosage
      }
    }
  }

}
