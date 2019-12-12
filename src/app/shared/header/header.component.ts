import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";
import {MatDialog, MatDialogConfig} from '@angular/material';
import {MeasurementsComponent} from '../../patient/measurements/measurements.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private sideNavVisible = false;
  private patientUser : boolean = true;

  constructor(private accountService: AccountService,
  private dialog : MatDialog) { }


  ngOnInit() {
    this.accountService.shouldShowNavBar.subscribe( value => {
      console.log(value.valueOf());
      this.sideNavVisible = value.valueOf();
    });
    console.log(localStorage.getItem('loggedUserType'));
    this.patientUser = (localStorage.getItem('loggedUserType') === 'patient');
    console.log(this.patientUser);
  }

  public openMeasurementsDialog() : void {
    console.log('Merge');
    this.dialog.open(MeasurementsComponent);
  }


}
