import { Injectable } from '@angular/core';
import { DoctorService } from './doctor.service';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    patients = [];
    doctors = [];

    constructor(
        private doctorService: DoctorService,
        private accountService: AccountService
    ) {
        let patientsWithoutMessages = this.doctorService.getPatients();
        let i = 0;        
        patientsWithoutMessages.forEach(patient => {
            let messages = [];
            switch (i) {
                case 0: {
                    messages.push({content: "Hello!", type: "R"});
                    messages.push({content: "Hello!", type: "S"});
                    messages.push({content: "How is your ankle?", type: "R"});
                    messages.push({content: "It's a little better now!", type: "S"});
                    this.patients.push({
                        info: patient,
                        messages: messages
                    });
                    break;
                }
                case 1: {
                    messages.push({content: "Hello!", type: "R"});
                    messages.push({content: "Hello!", type: "S"});
                    this.patients.push({
                        info: patient,
                        messages: messages
                    });
                    break;
                }
                case 2: {
                    messages.push({content: "I need your help!", type: "S"});
                    messages.push({content: "Sure, anything!", type: "R"});
                    this.patients.push({
                        info: patient,
                        messages: messages
                    });
                    break;
                }
                case 3: {
                    messages.push({content: "How do you feel today?", type: "R"});
                    messages.push({content: "I'm fine, thanks!", type: "S"});
                    this.patients.push({
                        info: patient,
                        messages: messages
                    });
                    break;
                }
                case 4: {
                    messages.push({content: "I need new medication!", type: "S"});
                    messages.push({content: "Call me and we'll talk!", type: "R"});
                    this.patients.push({
                        info: patient,
                        messages: messages
                    });
                    break;
                }
            }
            i++;
        })
        i = 0;
        let doctorsWithoutMessages = this.accountService.getDoctors();
        doctorsWithoutMessages.forEach(doctor => {
            let messages = [];
            switch (i) {
                case 0: {
                    messages.push({content: "Hello!", type: "S"});
                    messages.push({content: "Hello!", type: "R"});
                    messages.push({content: "How is your ankle?", type: "S"});
                    messages.push({content: "It's a little better now!", type: "R"});
                    this.doctors.push({
                        info: doctor,
                        messages: messages
                    });
                    break;
                }
                case 1: {
                    messages.push({content: "Hello!", type: "S"});
                    messages.push({content: "Hello!", type: "R"});
                    this.doctors.push({
                        info: doctor,
                        messages: messages
                    });
                    break;
                }
            }
            i++;
        });
    }

    getPatients() {
        return this.patients;
    }

    getDoctors() {
        return this.doctors;
    }

}

export interface Message {
    content: string;
    type: string;
}
