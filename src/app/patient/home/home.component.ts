import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-home-patient',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('progressBarTrigger', [
      transition(':enter', [
        style({transform: 'scaleX(0)'}), animate('500ms')
      ])]
    )
  ]
})
export class HomeComponent implements OnInit, AfterContentInit  {
  color = 'primary';
  mode = 'determined';
  value = 80;
  bufferValue = 75;
  state = 'none';

  refreshIntervalId = 0;
  constructor() { }

  ngOnInit() { }

  ngAfterContentInit (): void {
    this.startAnimate();
    this.refreshIntervalId = setInterval(() => this.startAnimate(), 1000);
  }

  public startAnimate() {
    console.log(this.value);
    this.state = 'maximum';
    this.value -= 5;
    clearInterval(this.refreshIntervalId);
  }
}
