import { Injectable, EventEmitter, Output } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { Patient } from '../doctor/patients/patients.component';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private users = [
    {
      'username' : 'patient1',
      'password' : 'patient1',
      'firstName' : 'dsadas',
      'lastName' : 'dasdas',
      'cnp': 'sss',
      'gender': 'F',
      'birthDate': "sss",
      'height': 191,
      'weight': 86,
      'address': "sss",
      'role' : "PATIENT"
    }, 
    {
      'username' : 'patient2',
      'password' : 'patient2',
      'firstName' : 'dsadas',
      'lastName' : 'dasdas',
      'cnp': 'sss1',
      'gender': 'M',
      'birthDate': "sss",
      'height': 191,
      'weight': 86,
      'address': "sss",
      'role' : "PATIENT",
    },
    {
      'username' : 'doctor',
      'password' : 'doctor',
      'role' : "DOCTOR"
    }
  ];

  @Output() roleEvent: EventEmitter<any> = new EventEmitter();
  public shouldShowNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  public canLogin(username, password) {
    let role = 0;
    this.users.forEach(user => {
      if(user.username == username && user.password == password) {
        if(user.role == "PATIENT") {
          this.roleEvent.emit("PATIENT");
          localStorage.setItem('loggedInUserRole' , "PATIENT");
          role = 1;
        }
        else if(user.role == "DOCTOR") {
          this.roleEvent.emit("DOCTOR");
          localStorage.setItem('loggedInUserRole' , "DOCTOR");
          role = 2;
        }
      }
    });
    if(role == 0) {
      this.roleEvent.emit("");
      localStorage.setItem('loggedInUserRole' , null);
    }
    return role;
  }

  public getPatients(){
    let patients = [];
    
    this.users.forEach(user => {
      if(user.role == "PATIENT") {
        patients.push(user);
      }
    });
    
    return patients;
  }
  
  public getPatientByUsername(username) : any {
    this.users.forEach(user => {
      if(user.role == "PATIENT" && user.username == username) {
        return user;
      }
    });
  }

  public getLoggedInUserRole() {
    let role = localStorage.getItem('loggedInUserRole');
    return role;
  }

}
