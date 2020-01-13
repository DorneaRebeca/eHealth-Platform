import { Component, OnInit } from '@angular/core';
import { Patient, DoctorService, Prescription, Medication } from 'src/app/services/doctor.service';
import { MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-download-prescription',
  templateUrl: './download-prescription.component.html',
  styleUrls: ['./download-prescription.component.css']
})
export class DownloadPrescriptionComponent implements OnInit {

  fileUrl;
  patientDetails: Patient;
  medication:Medication[];
  duration;
  prescription1:Prescription[];
  prescription= new MatTableDataSource<Medication>();
  private displayedColumns = ["Medication", "Quantity", "Intake"];
  
  constructor(private sanitizer: DomSanitizer,private doctorService: DoctorService) { }

  ngOnInit() {
    const data = this.doctorService.getCurrentPrescription();
     const blob = new Blob(["Name: "+data[0].name+"\n Age: "+data[0].age+"\n Gender:"+data[0].gender], { type: 'application/octet-stream' });
    //let blob:any = new Blob([data], { type: 'text/json; charset=utf-8' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    let selectedPatientId = 0;
    this.patientDetails = this.doctorService.getPatientDetails(+selectedPatientId);
    this.prescription1=this.doctorService.getCurrentPrescription();
    this.duration=this.prescription1[this.prescription1.length-1].duration;
    console.log(this.prescription);
    this.prescription.data=this.prescription1[this.prescription1.length-1].medications;
    console.log(this.medication);
    
  }

}
