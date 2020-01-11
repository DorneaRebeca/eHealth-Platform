import { Component, OnInit } from '@angular/core';
import {Question, Quiz, QuizService, Answer} from '../../services/quiz.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-response',
  templateUrl: './quiz-response.component.html',
  styleUrls: ['./quiz-response.component.css']
})
export class QuizResponseComponent implements OnInit {

  quizService : QuizService = new QuizService();
  quiz : Quiz;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  answers : Answer[] = [];

  constructor(private _formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private router : Router
  ) {

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.quiz = new class implements Quiz {
      description: string;
      name: string;
      questions: Question[];
    };
   this.quiz.name="Formular saptamanal";
   this.quiz.description = "Avem pregatite pentru tine cateva intrebari pentru a-ti evalua starea saptamanala. Te rugam sa raspunzi cu atentie"
   this.quiz.questions = [];
    this.quiz.questions.push({text : "Cum te simti azi?", answers: ["Bine", "Okay", "Rau", "Groaznic"]});
    this.quiz.questions.push({text : "Cate minute ai facut sport azi?", answers: ["5 minute", "10 minute", "20 miunte", "30 minute"]});
    this.quiz.questions.push({text : "Ai mai intampinat dureri?", answers: ["Da", "Nu"]});

  }

  onSelect(question: string, answer:string) {
    let data : Answer = new class implements Answer {
      answer: string;
      question: string;
    };
    let ok = 0;
    data.answer = answer;
    data.question = question;
    for (let a of this.answers) {
        if(a.question == data.question){
          a.answer = data.answer;
          ok =1;
        }
    }
    if(ok == 0){
      this.answers.push(data);
    }
    console.log(this.answers);
  }

  submitQuiz() {
    if(this.answers.length != this.quiz.questions.length) {
      this.snackBar.open('Complete all questions', '', {duration: 3000});
    }
    else {
      this.saveQuizData();

    }
  }

  saveQuizData() {
    let data = {
      answers : this.answers,
      name : this.quiz.name,
      date : new Date(),
      patientId : localStorage.getItem("loggedUserId")
    };
    this.quizService.saveDataInLocalStorageArray(data, "quizAnswers");
    this.router.navigateByUrl('/home-patient').then(
      t =>
      this.snackBar.open("Form completed! Thank you for your time!", '',{duration : 3000})
    );
  }





}
