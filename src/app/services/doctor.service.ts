import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  patients: Patient[] = [];
  constructor() {
    this.patients.push({ name: 'Pop Ionel', age: '34 years old', gender: 'Male', height: '191 cm', weigth: '86 kg'});
    this.patients.push({ name: 'Dan Tudor', age: '28 years old', gender: 'Male', height: '192 cm', weigth: '100 kg'});
    this.patients.push({ name: 'Palade Adrian', age: '31 years old', gender: 'Male', height: '195 cm', weigth: '98 kg'});
    this.patients.push({ name: 'Dan Andreea', age: '25 years old', gender: 'Female', height: '178 cm', weigth: '56 kg'});
    this.patients.push({ name: 'Dornea Rebeca', age: '29 years old', gender: 'Female', height: '169 cm', weigth: '61 kg'});

  }

  getPatientDetails(name) {
    return this.patients.filter( patient => patient.name === name)[0];
  }

  getActivitiesForPatient(name) {
    var activities: Activity[] = [];
    if (name === 'Pop Ionel') {
      activities.push({created_at: '2019-12-21 17:51', duration: '17 min', distance: '0,5 km', title: 'Short Run', image: 'run'});
      activities.push({created_at: '2019-12-21 17:51', duration: '7 min', distance: '0,3 km', title: 'Shopping Walk', image: 'walk'});
      activities.push({created_at: '2019-12-21 17:51', duration: '25 min', distance: '0,65 km', title: 'Late Swiming', image: 'swim'});
      activities.push({created_at: '2019-12-21 17:51', duration: '77 min', distance: '0,89 km', title: 'Shopping Run', image: 'run'});
      activities.push({created_at: '2019-12-21 17:51', duration: '42 min', distance: '0,46 km', title: 'Afternoon Walk', image: 'walk'});
      activities.push({created_at: '2019-12-21 17:51', duration: '45 min', distance: '1,3 km', title: 'Afternoon Biking', image: 'bike'});
      activities.push({created_at: '2019-12-21 17:51', duration: '62 min', distance: '0,1 km', title: 'Morning Yoga Session', image: 'yoga'});
      activities.push({created_at: '2019-12-21 17:51', duration: '34 min', distance: '1,2 km', title: 'Midnight run', image: 'run'});
      activities.push({created_at: '2019-12-21 17:51', duration: '23 min', distance: '0,6 km', title: 'Late Walk', image: 'walk'});
    }
    return activities;
  }


  getMedicalHistory(name) {
    var medicalRecord: Record[] = [];
    if (name === 'Pop Ionel') {
      medicalRecord.push( { name: 'Astm', start_date: '17-12-2019', duration: 15, description: 'Pacientul s-a prezentat cu stari febrile(39,8 C). I-au fost administrate calmante, iar in urma analizelor s-a observat un nivel ridicat de celule albe ceea ce a dus la o investigatie mai amanuntita.'});
      medicalRecord.push( { name: 'Astm', start_date: '17-12-2019', duration: 15, description: 'Pacientul s-a prezentat cu stari febrile(39,8 C). I-au fost administrate calmante, iar in urma analizelor s-a observat un nivel ridicat de celule albe ceea ce a dus la o investigatie mai amanuntita.'});
      medicalRecord.push( { name: 'Astm', start_date: '17-12-2019', duration: 15, description: 'Pacientul s-a prezentat cu stari febrile(39,8 C). I-au fost administrate calmante, iar in urma analizelor s-a observat un nivel ridicat de celule albe ceea ce a dus la o investigatie mai amanuntita.'});
      medicalRecord.push( { name: 'Astm', start_date: '17-12-2019', duration: 15, description: 'Pacientul s-a prezentat cu stari febrile(39,8 C). I-au fost administrate calmante, iar in urma analizelor s-a observat un nivel ridicat de celule albe ceea ce a dus la o investigatie mai amanuntita.'});
      medicalRecord.push( { name: 'Astm', start_date: '17-12-2019', duration: 15, description: 'Pacientul s-a prezentat cu stari febrile(39,8 C). I-au fost administrate calmante, iar in urma analizelor s-a observat un nivel ridicat de celule albe ceea ce a dus la o investigatie mai amanuntita.'});
      medicalRecord.push( { name: 'Astm', start_date: '17-12-2019', duration: 15, description: 'Pacientul s-a prezentat cu stari febrile(39,8 C). I-au fost administrate calmante, iar in urma analizelor s-a observat un nivel ridicat de celule albe ceea ce a dus la o investigatie mai amanuntita.'});
      medicalRecord.push( { name: 'Astm', start_date: '17-12-2019', duration: 15, description: 'Pacientul s-a prezentat cu stari febrile(39,8 C). I-au fost administrate calmante, iar in urma analizelor s-a observat un nivel ridicat de celule albe ceea ce a dus la o investigatie mai amanuntita.'});
    }
    //else alt pacient
    return medicalRecord;
  }
}

export interface Record {
  name: string;
  start_date: string;
  duration: number;
  description: string;
}

export interface Activity {
  created_at: string;
  duration: string;
  distance: string;
  title: string;
  image: string;
}

export interface Patient {
  name: string;
  age: string;
  gender: string;
  height: string;
  weigth: string;
}
