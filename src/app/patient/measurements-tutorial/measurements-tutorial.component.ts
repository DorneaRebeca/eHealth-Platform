import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-measurements-tutorial',
  templateUrl: './measurements-tutorial.component.html',
  styleUrls: ['./measurements-tutorial.component.css']
})
export class MeasurementsTutorialComponent implements OnInit {

  page : number = 1;
  pageSize : number = 1;

  infoMessage = 'Blood pressure is the force that moves blood through our circulatory system.\n\n' +
    'It is an important force because oxygen and nutrients would not be pushed around our circulatory system to nourish tissues and organs without blood pressure.\n' +
    'Blood pressure is also vital because it delivers white blood cells and antibodies for immunity, and hormones such as insulin.\n' +
    'Just as important as providing oxygen and nutrients, the fresh blood that gets delivered is able to pick up the toxic waste products of metabolism, including the carbon dioxide we exhale with every breath, and the toxins we clear through our liver and kidneys.\n\n' +
    'Blood itself carries a number of other properties, including its temperature. It also carries one of our defenses against tissue damage, the clotting platelets that prevent blood loss following injury.\n\n' +
    'But what exactly is it that causes blood to exert a pressure in our arteries? Part of the answer is simple - the heart creates blood pressure by forcing out blood when it contracts with every heartbeat. Blood pressure, however, cannot be created solely by the pumping heart.\n\n';

  steps = [
    'To check the blood pressure without the aid of an automated machine, a person will need several medical items. These are:\n' +
    '\n' +
    'a stethoscope\n' +
    'a blood pressure cuff with a squeezable balloon\n' +
    'an aneroid monitor, which has a numbered dial to read measurements\n' ,
    'To check the blood pressure manually, sit in a relaxed position with the arm at rest on a table. Secure the cuff on the bicep and squeeze the balloon to increase the pressure.\n' +
    '\n' ,
    'Watch the aneroid monitor and increase the pressure to about 30 mm Hg over the normal blood pressure, or to 180 mm Hg if this is not known. When the cuff is inflated, place the stethoscope just inside the elbow crease under the cuff.\n' +
    '\n' ,
    'Slowly deflate the balloon and listen through the stethoscope. When the first beats hit, note the number on the aneroid monitor. This is the systolic pressure.\n' +
    '\n' ,
    'Continue listening until the steady heartbeat sound stops and record the number from the aneroid monitor again. This is the diastolic pressure. These two numbers are the blood pressure reading.',
  ];

  adviceMessage = 'When checking blood pressure at home, it is important to remember:\n' +
    '\n' +
    ' -> Manual cuffs come in different sizes depending on the size of the arm. Using the right size ensures the most accurate reading.\n' +
    ' -> The cuff should always sit directly on the bare skin.\n' +
    ' -> Take a few deep breaths and relax for up to 5 minutes before measuring blood pressure.\n' +
    ' -> Avoid talking during the test.\n' +
    ' -> Place the feet flat on the floor and sit up straight while measuring the blood pressure.\n' +
    ' -> Avoid checking blood pressure in a cold room.\n' +
    ' -> Support the arm as close to heart level as possible.\n' +
    ' -> Measure the blood pressure at a few different times during the day.\n' +
    ' -> Avoid smoking, drinking, and exercise for 30 minutes before taking blood pressure.\n' +
    ' -> Empty the bladder before taking a blood pressure test. A full bladder may give an incorrect blood pressure reading.\n'
    ;
  descriptiveVideoSrc : string = '';
  manualDeviceSrc : string = '';
  digitalDeviceSrc : string = '';
  stepByStepSrc : string = '';
  vitalName : string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private router : Router
  ) { }

  ngOnInit() {
    this.vitalName = localStorage.getItem('vitalName');
    switch (this.vitalName) {
      case 'blood pressure' : {
        this.getData("bloodPressure");
        break;
      }
      case 'blood sugar' : {
        this.getData("bloodSugar");
        break;
      }
      case 'body temperature' : {
        this.getData("temperature");
        break;
      }
      default : {
        this.router.navigateByUrl('home-patient');
      }
    }
  }

  nextStep() {
    if(this.page < this.steps.length)
        this.page++;
  }

  previousStep() {
    if(this.page > 1)
        this.page--;
  }

  getData(vitalName : string) {
    let info = JSON.parse(
      localStorage.getItem(vitalName)
    );
    this.infoMessage = info.infoMessage;
    this.steps = info.steps;
    this.adviceMessage = info.adviceMessage;
    this.descriptiveVideoSrc = info.descriptiveVideoSrc;
    this.manualDeviceSrc = info.manualDeviceSrc;
    this.digitalDeviceSrc = info.digitalDeviceSrc;
    this.stepByStepSrc = info.stepByStepImage;
    console.log(this.stepByStepSrc);
    console.log(this.transform(this.stepByStepSrc));
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
