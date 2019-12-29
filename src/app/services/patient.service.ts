import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  saveDataInLocalStorageArray(tempData, arrayName : string) : void {
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
