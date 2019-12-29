import {Component, OnInit, ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {MatDialog} from '@angular/material';
import {MeasurementsComponent} from '../../patient/measurements/measurements.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  
  private sideNavVisible: boolean;

  constructor(
    private accountService: AccountService,
    private cdRef : ChangeDetectorRef,
    private dialog : MatDialog ) {
      this.accountService.shouldShowNavBar.subscribe(value => this.sideNavVisible = value);
  }

  ngOnInit() {
  }

  public openMeasurementsDialog() : void {
    console.log('Merge');
    this.dialog.open(MeasurementsComponent);
  }

  ngAfterContentChecked():void{
    this.cdRef.detectChanges();
  }
    
}
