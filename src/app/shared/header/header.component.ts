import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private sideNavVisible = false;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.shouldShowNavBar.subscribe( value => {
      console.log(value.valueOf());
      this.sideNavVisible = value.valueOf();
    })
  }

}
