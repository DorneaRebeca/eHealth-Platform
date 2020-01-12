import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MessageService, Message } from 'src/app/services/message.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ChatComponent implements OnInit {

  contacts = [];
  selectedContact;
  messages = [];
  doctors = [];

  public myForm = new FormGroup({
    message: new FormControl('', [
        Validators.required
    ])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if(this.data.openAs == "DOCTOR") {
      this.loadPatients(); 
    }
    else if(this.data.openAs == "PATIENT") {
      this.loadDoctors();
    }
    this.myForm.controls['message'].disable();
  }

  loadPatients(){
    this.contacts = this.messageService.getPatients();
  }

  loadDoctors(){
    this.contacts = this.messageService.getDoctors();
  }

  selectContact(patient) {
    this.selectedContact = patient;
    this.myForm.controls['message'].enable();
  }

  sendMessage() {
    let text = this.myForm.controls['message'].value;
    let message : Message = {
      content : text,
      type : "S"
    }
    this.selectedContact.messages.push(message);
    this.myForm.controls['message'].setValue(""); 
  }

  isMessageEmpty(){
    let message = this.myForm.controls['message'].value;
    if(message == ""){
       return true;
    }
    return false;
  }

}
