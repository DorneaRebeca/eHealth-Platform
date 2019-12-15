import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  private video:any = null;
  private stream: any;
  shouldShowCamera: boolean = false;
  uploadProcessIsOn: boolean = false;
  selectedIndex: number = -1;

  constructor( public dialogRef: MatDialogRef<FoodTrackerComponent>, private patientService: PatientService){  }

  onNoClick(): void {
    this.uploadProcessIsOn = false;
    this.stopCamera();
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }

  ngOnInit(): void {
    this.meals = this.patientService.dailyMeals;
  }

  didTapCaptureButton(selected) {
    document.getElementById('video-wrapper').style.setProperty('display', 'block');
    this.selectedIndex = selected;
    this.shouldShowCamera = true;
    this.video = document.getElementById('video');
    const intervalId = this.showLoadingScreen(99999);
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.setStream(stream);
        clearTimeout(intervalId);
        this.hideLoadingScreen();
      });
    }
  }

  setStream(stream) {
    this.stream = stream;
    this.video.srcObject = stream;
    this.video.play();
  }

  stopCamera() {
    if(this.shouldShowCamera) {
      this.shouldShowCamera = false;
      this.video.pause();
      this.video.src = "";
      this.stream.getTracks()[0].stop();
    }
  }

  didTapTakePhotoButton() {
    this.showLoadingScreen();
    this.video.pause();
    const canvas: any = document.getElementById('canvas');
    const context: any = canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, 640, 480);
    document.getElementById('video-wrapper').style.setProperty('display', 'none');
    document.getElementById('canvas-wrapper').style.setProperty('display', 'block');
  }

  didTapApprovePhoto() {
    this.stopCamera();
    this.uploadProcessIsOn = false;
    var nutrients: number = Math.round(Math.random() * 10_000 % 500);
    this.patientService.addNutritionValue(nutrients, this.selectedIndex);
    this.dialogRef.close();
  }

  didTapRetakePhotoButton() {
    if(this.uploadProcessIsOn)  {
      document.getElementById('upload-button').click();
      document.getElementById('canvas-wrapper').style.setProperty('display', 'none');
    } else {
      document.getElementById('video-wrapper').style.setProperty('display', 'block');
      document.getElementById('canvas-wrapper').style.setProperty('display', 'none');
      this.video.play();
    }
  }

  showLoadingScreen(predefined  = 0) {
    const interval = predefined == 0 ? Math.round(Math.random() * 10_000 % 200) * 10 : predefined;
    document.getElementById("loading-spinner").style.setProperty('display', 'block');
    return setTimeout(this.hideLoadingScreen, interval)
  }

  hideLoadingScreen() {
    document.getElementById("loading-spinner").style.setProperty('display', 'none');
  }

  didTapUploadButton(selectedFile, index) {
    if(selectedFile.length == 0) {
      this.uploadProcessIsOn = false;
      return
    }
    this.selectedIndex = index;
    this.uploadProcessIsOn = true;
    var reader = new FileReader();
    reader.onload = function(event){
      var img = new Image();
      img.onload = function(){
        const canvas: any = document.getElementById('canvas');
        const context: any = canvas.getContext('2d');
        document.getElementById('canvas-wrapper').style.setProperty('display', 'block');
        context.drawImage(img, 0, 0, 640, 480);
      };
      // @ts-ignore
      img.src = event.target.result;
    };
    reader.readAsDataURL(selectedFile[0]);
  }
}
