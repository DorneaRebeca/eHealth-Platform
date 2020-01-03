import {Component, OnInit, ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";
import {MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import {FoodTrackerComponent} from "../../patient/food-tracker/food-tracker.component";
import {MeasurementsComponent} from '../../patient/measurements/measurements.component';
import { DailyTreatmentComponent } from 'src/app/patient/daily-treatment/daily-treatment.component';
import { MydrugsComponent } from 'src/app/patient/mydrugs/mydrugs.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  
  private sideNavVisible: boolean;
  private loggedInUserRole;

  constructor(
    private accountService: AccountService,
    private cdRef : ChangeDetectorRef,
    private router: Router,
    private dialog : MatDialog ) {
      this.accountService.shouldShowNavBar.subscribe(value => this.sideNavVisible = value);
      this.accountService.roleEvent.subscribe(role => this.loggedInUserRole = role);
  }

  ngOnInit() {
    this.loggedInUserRole = this.accountService.getLoggedInUserRole();
   }

  onLogout() {
    this.router.navigate(["login"]);
    this.loggedInUserRole = "";
    this.accountService.shouldShowNavBar.next(false);
  }

  showFoodTracker() {
    this.dialog.open(FoodTrackerComponent, {
      height: '520px',
      width: '664px',
    });
  }

  ngAfterContentChecked():void{
    this.cdRef.detectChanges();
  }
  
  openMeasurementsDialog() {
    this.dialog.open(MeasurementsComponent);
  }

  openMyDailyTreatmentDialog() {
    this.dialog.open(DailyTreatmentComponent);
  }

  openMyDrugs() {
    this.dialog.open(MydrugsComponent);
  }

  openDoctorHome() {
    this.router.navigateByUrl('/home-doctor').then(r => {});
  }

  openPatientsPage() {
    this.router.navigateByUrl('/app-patient-detail').then(r => {});
  }

}
