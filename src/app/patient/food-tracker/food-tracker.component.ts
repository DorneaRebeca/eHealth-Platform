import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { MatIconModule } from '@angular/material/icon';
import {PatientService} from "../../services/patient.service";

export interface Meal {
  name: string;
  status: boolean;
  calories?: number;
}

@Component({
  selector: 'app-food-tracker',
  templateUrl: './food-tracker.component.html',
  styleUrls: ['./food-tracker.component.css']
})
export class FoodTrackerComponent implements OnInit, OnDestroy {
  meals = [];
  displayedColumns: string[] = ['position'];
  private video:any = null;
  private stream: any;
  shouldShowCamera: boolean = false;
  shouldShowLoadingScreen: boolean = false;

  constructor( public dialogRef: MatDialogRef<FoodTrackerComponent>, private patientService: PatientService){  }

  onNoClick(): void {
    this.stopCamera();
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }

  ngOnInit(): void {
    this.meals = this.patientService.dailyMeals;
  }

  startCamera(selected) {
    this.patientService.dailyMeals[selected].status = true;
    this.shouldShowCamera = true;
    this.video = document.getElementById('video');
    console.log(this.video);
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => this.setStream(stream));
    }
  }

  setStream(stream) {
    this.stream = stream;
    this.video.srcObject = stream;
    this.video.play();
  }

  stopCamera() {
    this.shouldShowCamera = false;
    this.video.pause();
    this.video.src = "";
    this.stream.getTracks()[0].stop();
  }

}
