import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Question, QuizService } from 'src/app/services/quiz.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public myForm = new FormGroup({
    question: new FormControl('', [
        Validators.required,
    ]),
    answer: new FormControl('', [
        Validators.required,
    ])
  });

  public answers : string[] = [];

  constructor(
    private quizService: QuizService,
    private snackBar: MatSnackBar
  ) { }

  addAnswerToQuestion(){
    let answer = this.myForm.controls["answer"].value;
    this.answers.push(answer);
    console.log(answer)
  }

  removeAnswerFromQuestion(answer){
    var index = this.answers.indexOf(answer);
    this.answers.splice(index, 1);
  }

  createNewQuestion() {
    if (!this.validationErrorsExists()) {
      let question : Question = {
        text : this.myForm.controls["question"].value,
        answers : this.answers
      }
      this.quizService.addQuestion(question);
    }
    else {
      this.snackBar.open('Something went wrong!', "", {
          duration: 3000,
          panelClass: ['red-snackbar']
      });
    }
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

  ngOnInit() {
  }

}
