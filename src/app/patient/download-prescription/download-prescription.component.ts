import { Component, OnInit } from '@angular/core';
import { Patient, DoctorService, Prescription, Medication } from 'src/app/services/doctor.service';
import { MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { PatientService } from 'src/app/services/patient.service';

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
  showLink;
  prescription1:Prescription[];
  prescription= new MatTableDataSource<Medication>();
  private displayedColumns = ["Medication", "Quantity", "Intake"];
  
  constructor(private sanitizer: DomSanitizer,private doctorService: DoctorService,private patientService : PatientService,) { }

  ngOnInit() {
    const data = this.doctorService.getCurrentPrescription();
    let s = "";
    let meds=data[data.length-1].medications
    meds.forEach( m => {
      s = s.concat("   Medication: " + m.name+"   dosage: "+ m.dosage+"   intake intervals: "+m.intakeIntervals+"\n");

    }
    )
    console.log(meds)
    console.log(s)
    
    //data[data.length-1].medications.map(x=>x.name).join(",")
     const blob = new Blob(["Name: "+data[data.length-1].name+"\nAge: "+data[data.length-1].age+"\nGender:"+data[data.length-1].gender+ "\n\n"+ s], { type: 'application/octet-stream' });
    //let blob:any = new Blob([data], { type: 'text/json; charset=utf-8' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    let selectedPatientId = 0;
  this.patientDetails = this.doctorService.getPatientDetails(+selectedPatientId);
    this.prescription1=this.doctorService.getCurrentPrescription();
    this.duration=this.prescription1[this.prescription1.length-1].duration;
    console.log(this.prescription);
    this.prescription.data=this.prescription1[this.prescription1.length-1].medications;
    console.log(this.medication);
    this.showLink=this.patientService.getShowLink();
    
  }
  restoreStock(){
    this.patientService.setShowLink()
    this.showLink=this.patientService.getShowLink();
    this.patientService.updateStock(this.prescription.data,this.duration)
  }

}
