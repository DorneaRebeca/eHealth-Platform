import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";
import {MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import {FoodTrackerComponent} from "../../patient/food-tracker/food-tracker.component";
import {MeasurementsComponent} from '../../patient/measurements/measurements.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private sideNavVisible = false;
  constructor(private accountService: AccountService, public dialog: MatDialog) { }
  private patientUser : boolean = true;

  ngOnInit() {
    this.accountService.shouldShowNavBar.subscribe( value => {
      console.log(value.valueOf());
      this.sideNavVisible = value.valueOf();
    });
    console.log(localStorage.getItem('loggedUserType'));
    this.patientUser = (localStorage.getItem('loggedUserType') === 'patient');
    console.log(this.patientUser);
  }


  showFoodTracker() {
    let dialogRef = this.dialog.open(FoodTrackerComponent, {
      height: '520px',
      width: '664px',
    });
  }

  public openMeasurementsDialog() : void {
    this.dialog.open(MeasurementsComponent);
  }

  redirect

}
