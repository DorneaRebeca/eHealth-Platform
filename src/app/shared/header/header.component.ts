import {Component, OnInit, ChangeDetectorRef, AfterContentChecked, ViewEncapsulation} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {MatDialog} from '@angular/material/dialog';
import {FoodTrackerComponent} from "../../patient/food-tracker/food-tracker.component";
import {MeasurementsComponent} from '../../patient/measurements/measurements.component';
import { DailyTreatmentComponent } from 'src/app/patient/daily-treatment/daily-treatment.component';
import { MydrugsComponent } from 'src/app/patient/mydrugs/mydrugs.component';
import {Router} from "@angular/router";
import { ChatComponent } from '../chat/chat.component';

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
    private dialog : MatDialog 
  ) {
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
      panelClass: "custom-dialog-container"
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
  /*  this.dialog.open(MydrugsComponent
  //     , {
  //     height: '50%',
  //     width: '70%',
  // }
  );*/
  this.router.navigate(["ask-for-more"]);
  }

  openChat(){
    this.dialog.open(ChatComponent, {
      width: '750px',
      height: '500px',
      panelClass: 'myapp-no-padding-dialog',
      data: {
        openAs: this.loggedInUserRole
      }
    });
  }

}
