import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private user1 = {
    'username' : 'patient',
    'password' : 'patient'
  };
  private user2 = {
    'username' : 'doctor',
    'password' : 'doctor'
  };

  public shouldShowNavBar: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(true);
  constructor() { }

  public canLogin(username, password) {
    if( this.user1.username == username && this.user1.password == password) { return 1; }
    else if( this.user2.username == username && this.user2.password == password) { return 2; }
    else { return 0; }
  }
}
