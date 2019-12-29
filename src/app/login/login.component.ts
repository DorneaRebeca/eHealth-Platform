import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {AccountService} from "../services/account.service";
import {init} from "protractor/built/launcher";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private snackBar: MatSnackBar,
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    public myForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
        ]),
        password: new FormControl('', [
            Validators.required,
        ])
    });

    validationErrorsExists(): boolean {
        var noOfErrors: number = 0;
        Object.keys(this.myForm.controls).forEach(key => {
            const controlErrors: ValidationErrors = this.myForm.get(key).errors;
            if (controlErrors != null) {
                noOfErrors++;
            }
        });
        return noOfErrors > 0;
    }
  public login() {
      let userType = this.accountService.canLogin(this.myForm.controls['email'].value, this.myForm.controls['password'].value);
      if(userType == 0) {
        this.snackBar.open('Invalid email/password', '', {duration: 3000});
        return;
      } else if(userType == 1) {
        this.saveBloodPressureInfo();
        this.saveTemperatureInfo();
        this.saveBloodSugarInfo();
        this.router.navigate(['home-patient']);
        this.initMeasurements();
      } else if(userType == 2) {
        this.router.navigate(['home-doctor']);
      }
    this.accountService.shouldShowNavBar.next(false);
  }

  initMeasurements() {
    var meals = [];
    meals.push({name: 'Breakfast', status: false, calories: 0});
    meals.push({name: 'Lunch', status: false, calories: 0});
    meals.push({name: 'Dinner', status: false, calories: 0});
    meals.push({name: 'Snack', status: false, calories: 0});
    localStorage.setItem('dailyMeals', JSON.stringify(meals));
    localStorage.setItem('nutrients', JSON.stringify(0));
  }

  initTutorial() {

  }

  private saveBloodPressureInfo() {
      let info = {
        infoMessage : 'Blood pressure is the force that moves blood through our circulatory system.\n\n' +
          'It is an important force because oxygen and nutrients would not be pushed around our circulatory system to nourish tissues and organs without blood pressure.\n' +
          'Blood pressure is also vital because it delivers white blood cells and antibodies for immunity, and hormones such as insulin.\n' +
          'Just as important as providing oxygen and nutrients, the fresh blood that gets delivered is able to pick up the toxic waste products of metabolism, including the carbon dioxide we exhale with every breath, and the toxins we clear through our liver and kidneys.\n\n' +
          'Blood itself carries a number of other properties, including its temperature. It also carries one of our defenses against tissue damage, the clotting platelets that prevent blood loss following injury.\n\n' +
          'But what exactly is it that causes blood to exert a pressure in our arteries? Part of the answer is simple - the heart creates blood pressure by forcing out blood when it contracts with every heartbeat. Blood pressure, however, cannot be created solely by the pumping heart.\n\n',
        steps : [
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
        ],
        adviceMessage : 'When checking blood pressure at home, it is important to remember:\n' +
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
          ' -> Empty the bladder before taking a blood pressure test. A full bladder may give an incorrect blood pressure reading.\n',
          descriptiveVideoSrc :  "https://www.youtube.com/embed/4YNdp3pRjig",
          manualDeviceSrc : "https://www.youtube.com/embed/nFUqoTNBHyQ",
          digitalDeviceSrc : "https://www.youtube.com/embed/bD-KNOtwr10",
          stepByStepImage : "https://bio1152.nicerweb.com/Locked/media/ch42/42_12MeasureBP.jpg",
      };
      localStorage.setItem( "bloodPressure", JSON.stringify(info));
  }

  private saveTemperatureInfo() {
    let info = {
      infoMessage : 'Body temperature is a measure of your body\'s ability to make and get rid of heat. The body is very good at keeping its temperature within a safe range, even when temperatures outside the body change a lot.\n' +
        '\n' +
        '   -> When you are too hot, the blood vessels in your skin widen to carry the excess heat to your skin\'s surface. You may start to sweat. As the sweat evaporates, it helps cool your body.\n\n' +
        '   -> When you are too cold, your blood vessels narrow. This reduces blood flow to your skin to save body heat. You may start to shiver. When the muscles tremble this way, it helps to make more heat.\n\n' +
        'Your body’s like a little furnace. It puts out heat all the time. It comes from your body doing the work that keeps you alive. When it puts out a lot more or a lot less heat than usual, it’s trying to tell you there’s a problem.' +
        'Thermometers show body temperature in either degrees Fahrenheit (°F) or degrees Celsius (°C). In the United States, temperatures are often measured in degrees Fahrenheit. The standard in most other countries is degrees Celsius.\n\n' +
        ' Most people think a normal body temperature is an oral temperature (by mouth) of 98.6°F (37°C). This is an average of normal body temperatures. Your normal temperature may actually be 1°F (0.6°C) or more above or below this. Also, your normal temperature changes by as much as 1°F (0.6°C) during the day, depending on how active you are and the time of day. Body temperature is very sensitive to hormone levels.\n\n'+
      'There are different thermometers to choose from, depending on which body area you wish to take measurements from. The accuracy of the thermometer is determined under ideal conditions in accordance with the relevant technical norms, in order to guarantee the measuring instrument’s quality. Modern high quality thermometers measure with an accuracy of +/-0.1 °C.. The technical precision and clinical reliability in the use of the thermometer should not be confused. Human body temperature varies depending on where on the body the temperature is taken and the time of measurement. This is due to physiological factors and must be distinguished from thermometer malfunction. Measurement accuracy primarily depends on whether the thermometer is used correctly (read the operating instructions!).',
      steps : [
        'Wash your hands with soap and warm water.\n' ,
        'Use a clean thermometer, one that has been washed in cold water, cleaned with rubbing alcohol, and then rinsed to remove the alcohol.\n' ,
        'Do not eat or drink anything for at least 5 minutes before you take your temperature. You should keep your mouth closed during this time.\n' ,
        'Place the thermometer tip under the tongue.\n' ,
        'Hold the thermometer in the same spot for about 40 seconds.\n' ,
        'Readings will continue to increase and the F (or C) symbol will flash during measurement.\n' ,
        'Usually, the thermometer will make a beeping noise when the final reading is done. If you are keeping track, record the temperature and the time.\n' ,
        'Rinse thermometer in cold water, clean it with alcohol, and rinse again.'
      ],

      adviceMessage : 'When checking temperature at home, it is important to remember:\n' +
        '\n' +
        ' -> Normal body temperature is about 98.6 degrees Fahrenheit (°F) or 37 degrees Celsius (°C). Your temperature often varies from 1 to 2 °F or ½ to 1 °C.\n' +
        ' -> It is important to differentiate between the technical accuracy with which the thermometer takes a reading and the clinical reliability of the specific measuring method. The accuracy of the thermometer is determined under ideal conditions in accordance with the relevant technical norms, in order to guarantee the measuring instrument’s quality. Modern high quality thermometers measure with an accuracy of +/-0.1 °C.\n' +
        ' -> Do not use the same thermometer for both oral and rectal readings. Be sure to label your thermometer either “oral” or “rectal” to know the difference.\n' +
        ' -> You can get fast and accurate readings with digital thermometers.\n' +
        ' -> Your temperature is usually lower in the morning and increases during the day. It reaches its high in the late afternoon or evening.\n' +
        ' -> Electronic ear thermometers are common. They are easy to use. However, some users report that the results are less accurate than with probe thermometers.\n' ,
      descriptiveVideoSrc :  "https://www.youtube.com/embed/J157oziu3zQ?list=TLPQMTgxMjIwMTnTM-SHL5CVpg",
      manualDeviceSrc :  "https://www.youtube.com/embed/mvjLvCs8PAc?list=TLPQMTgxMjIwMTnTM-SHL5CVpg",
      digitalDeviceSrc : "https://www.youtube.com/embed/AVHR485DHmA?list=TLPQMTgxMjIwMTnTM-SHL5CVpg",
      stepByStepImage : "https://www.premiercarepeds.com/yourhealth/healthtopics/CRS/CRS/axiltemp.gif",
    };
    localStorage.setItem( "temperature", JSON.stringify(info));
  }


  private saveBloodSugarInfo() {
    let info = {
      infoMessage : 'Blood sugar, or glucose, is the main sugar found in blood. The body gets glucose from the food we eat. This sugar is an important source of energy and provides nutrients to the body\'s organs, muscles and nervous system. The absorption, storage and production of glucose is regulated constantly by complex processes involving the small intestine, liver and pancreas.\n\n' +
        'Glucose enters the bloodstream after a person has eaten carbohydrates. The endocrine system helps keep the bloodstream\'s glucose levels in check using the pancreas. This organ produces the hormone insulin, releasing it after a person consumes protein or carbohydrates. The insulin sends excess glucose in the liver as glycogen. The pancreas also produces a hormone called glucagon, which does the opposite of insulin, raising blood sugar levels when needed. \n\n' +
        'When there isn\'t enough sugar to go around, the liver hoards the resource for the parts of the body that need it, including the brain, red blood cells and parts of the kidney.' +
        'For most people, 80 to 99 milligrams of sugar per deciliter before a meal and 80 to 140 mg/dl after a meal is normal. The American Diabetes Association says that most nonpregnant adults with diabetes should have 80 to 130 mg/dl before a meal and less than 180 mg/dl at 1 to 2 hours after beginning the meal. \n' +
        '\n\n' +
        'These variations in blood-sugar levels, both before and after meals, reflect the way that the body absorbs and stores glucose. After you eat, your body breaks down the carbohydrates in food into smaller parts, including glucose, which the small intestine can absorb.\n\n'+
        'While other factors are at work, the food you eat plays a huge role in balancing your blood sugar levels and minimizing the highs and lows. By understanding how certain foods affect your blood sugar, you can take charge of the outcome. Most importantly, you can more easily keep your blood sugar within the right range so that you can feel your best.\n\n'+
        ' If you do have diabetes, it is very important to keep your blood sugar numbers in your target range. You may need to check your blood sugar several times each day. Your health care provider will also do a blood test called an A1C. It checks your average blood sugar level over the past three months. If your blood sugar is too high, you may need to take medicines and/or follow a special diet.\n',
      steps : [
        'Wash and dry your hands well.',
        'Insert a test strip into your meter.',
          'Prick the side of your fingertip with the needle (lancet) provided with your test kit.',
        'Gently squeeze or massage your finger until a drop of blood forms.',
      'Touch and hold the edge of the test strip to the drop of blood.',
        'The meter will display your blood glucose level on a screen after a few seconds'
      ],

      adviceMessage : 'When checking blood sugar at home, it is important to remember:\n' +
        '\n' +
        ' ->Follow the user manual for your device — procedures may vary from one device to another.\n' +
        ' -> Use a blood sample size as directed in the manual.\n' +
        ' -> Use only test strips designed for your meter.\n' +
        ' -> Store test strips as directed.\n' +
        ' -> Don\'t use expired test strips.\n' +
        ' -> Clean the device and run quality-control checks as directed.\n' +
        ' -> Bring the meter to your doctor appointments to address any questions and to demonstrate how you use your meter.\n' ,
      descriptiveVideoSrc :  "https://www.youtube.com/embed/nWgf-odA50Q?list=TLPQMTgxMjIwMTnTM-SHL5CVpg",
      manualDeviceSrc :  "https://www.youtube.com/embed/28oRB1LWWEw?list=TLPQMTgxMjIwMTnTM-SHL5CVpg",
      digitalDeviceSrc : "https://www.youtube.com/embed/qtqN9Bcvt4U?list=TLPQMTgxMjIwMTnTM-SHL5CVpg",
      stepByStepImage : "http://pennstatehershey.adam.com/graphics/images/en/19211.jpg",
    };
    localStorage.setItem( "bloodSugar", JSON.stringify(info));
  }
}
