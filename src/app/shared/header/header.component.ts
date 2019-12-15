import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {FoodTrackerComponent} from "../../patient/food-tracker/food-tracker.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private sideNavVisible = false;
  constructor(private accountService: AccountService, public dialog: MatDialog) { }

  ngOnInit() {
    this.accountService.shouldShowNavBar.subscribe( value => {
      console.log(value.valueOf());
      this.sideNavVisible = value.valueOf();
    })
  }


  showFoodTracker() {
    let dialogRef = this.dialog.open(FoodTrackerComponent, {
      height: '520px',
      width: '664px',
    });
  }
}
