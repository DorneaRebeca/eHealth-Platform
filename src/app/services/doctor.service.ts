import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  patients: Patient[] = [];
  medications: Medication[] = [];
  treatments: Treatment[] = [];

  selectedMedications: Medication[] = [];

  constructor() {
    this.patients.push({ id: 0, name: 'Pop Ionel', age: '34 years old', gender: 'Male', height: '191 cm', weigth: '86 kg', cnp: "1980703244390", address: "Valea viilor nr 131"});
    this.patients.push({ id: 1, name: 'Dan Tudor', age: '28 years old', gender: 'Male', height: '192 cm', weigth: '100 kg', cnp: "1980703244390", address: "Valea viilor nr 131"});
    this.patients.push({ id: 2, name: 'Palade Adrian', age: '31 years old', gender: 'Male', height: '195 cm', weigth: '98 kg', cnp: "1980703244390", address: "Valea viilor nr 131"});
    this.patients.push({ id: 3, name: 'Dan Andreea', age: '25 years old', gender: 'Female', height: '178 cm', weigth: '56 kg', cnp: "1980703244390", address: "Valea viilor nr 131"});
    this.patients.push({ id: 4, name: 'Dornea Rebeca', age: '29 years old', gender: 'Female', height: '169 cm', weigth: '61 kg', cnp: "1980703244390", address: "Valea viilor nr 131"});

    this.medications.push({name: "Paracetamol", description: "Impotriva racelii.", dosage: 1, intakeIntervals: 2});    
    this.medications.push({name: "Algocalmin", description: "Pentru dureri de cap.", dosage: 1, intakeIntervals: 1});
    
    this.treatments.push({startDate: "06/01/2020", endDate: "20/01/2020", medications: this.medications});
    
    this.medications.push({name: "Tantum verde", description: "Pentru dureri in gat.", dosage: 1, intakeIntervals: 4});
    this.medications.push({name: "Dicarbocalm", description: "Pentru disconforturi stomacale.", dosage: 1, intakeIntervals: 2});
    
    this.treatments.push({startDate: "07/01/2020", endDate: "10/01/2020", medications: this.medications});
    
  }

  addItemToCurrentTreatment(item){
    this.selectedMedications.push(item);
  }

  removeItemFromCurrentTreatment(item) {
    var index = this.selectedMedications.indexOf(item);
    this.selectedMedications.splice(index, 1);
  }

  getItemsFromCurrentTreatment(){
    return this.selectedMedications;
  }

  getPatientDetails(id) {
    return this.patients.filter( patient => patient.id === id)[0];
  }

  getPatients() {
    return this.patients;
  }

  getTreatments(){
    return this.treatments;
  }

  getMedications() {
    return this.medications;
  }

  getActivitiesForPatient(id) {
    var activities: Activity[] = [];
    if (id === 0) {
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

  getMedicalHistory(id) {
    var medicalRecord: Record[] = [];
    if (id === 0) {
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
  id: number,
  name: string;
  age: string;
  gender: string;
  height: string;
  weigth: string;
  cnp: string;
  address: string;
}

export interface Treatment {
  startDate: string;
  endDate: string;
  medications: Medication[]
}

export interface Medication {
  name: string;
  description: string;
  dosage: number;
  intakeIntervals: number;
}