import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Question, QuizService, Quiz } from 'src/app/services/quiz.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  public myForm = new FormGroup({
      title: new FormControl('', [
          Validators.required,
      ]),
      description: new FormControl('', [
         Validators.required,
      ])
  });

  questions : Question[] = [];
  newQuizQuestions : Question[] = [];

  constructor(
    private quizService: QuizService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questions = this.quizService.getQuestions();
  }

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

  addQuestionToNewQuiz(question : Question) {
      this.newQuizQuestions.push(question);
  }

  removeQuestionFromNewQuiz(question : Question) {
    var index = this.newQuizQuestions.indexOf(question);
    this.newQuizQuestions.splice(index, 1);
  }

  openAddNewQuestionForm() {
    this.dialog.open(AddQuestionComponent, {
        height: '400px',
        width: '500px',
    })
    .afterClosed()
    .subscribe(success => {
        if (success) {
            this.loadQuestions();
        }
    });
  }

  createNewQuiz() {
    if (!this.validationErrorsExists()) {
      let quiz : Quiz = {
        name : this.myForm.controls["title"].value,
        description : this.myForm.controls["description"].value,
        questions : this.newQuizQuestions
      };
      this.quizService.addQuiz(quiz);
      this.router.navigate(["app-patient-detail"]);
    }
    else {
      this.snackBar.open('Something went wrong!', "", {
          duration: 3000,
          panelClass: ['red-snackbar']
      });
    }
  }
}
