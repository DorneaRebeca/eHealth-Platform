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
  private patientUser : boolean = true;

  constructor(
    private accountService: AccountService,
    private cdRef : ChangeDetectorRef,
    private route: Router,
    private dialog : MatDialog ) {
      this.accountService.shouldShowNavBar.subscribe(value => this.sideNavVisible = value);
  }

  ngOnInit() {
  }


  showFoodTracker() {
    this.dialog.open(FoodTrackerComponent, {
      height: '520px',
      width: '664px',
    });
  }

  public openMeasurementsDialog() : void {
    this.dialog.open(MeasurementsComponent);
  }

  ngAfterContentChecked():void{
    this.cdRef.detectChanges();
  }
    
  public openMyDailyTreatmentDialog() : void {
    this.dialog.open(DailyTreatmentComponent);
  }

  public openMyDrugs() : void {
    this.dialog.open(MydrugsComponent);
  }

  openDoctorHome() {
    this.route.navigateByUrl('/home-doctor').then(r => {});
  }

  openPatientsPage() {
    this.route.navigateByUrl('/app-patient-detail').then(r => {});
  }

}
