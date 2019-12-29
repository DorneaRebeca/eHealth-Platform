import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { IfStmt } from '@angular/compiler';

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
      'address': "sss",
      'role' : "PATIENT",
    },
    {
      'username' : 'doctor',
      'password' : 'doctor',
      'role' : "DOCTOR"
    }
  ];

  public shouldShowNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  public canLogin(username, password) {
    let role = 0;
    this.users.forEach(user => {
      if(user.username == username && user.password == password) {
        if(user.role == "PATIENT") {
          localStorage.setItem('loggedUserType' , 'patient');
          role = 1;
        }
        else if(user.role == "DOCTOR") {
          localStorage.setItem('loggedUserType' , 'doctor');
          role = 2;
        }
      }
    });
    if(role == 0) {
      localStorage.setItem('loggedUserType' , null);
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
}
