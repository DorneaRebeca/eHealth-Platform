import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

    public questions : Question[] = [];
    public quizes : Quiz[] = [];

    constructor() {
        this.questions.push({text : "Cum te simti azi?", answers: ["Bine", "Okay", "Rau", "Groaznic"]});
        this.questions.push({text : "Cate minute ai facut sport azi?", answers: ["5 minute", "10 minute", "20 miunte", "30 minute"]});
        this.questions.push({text : "Ai mai intampinat dureri?", answers: ["Da", "Nu"]});
    }

    public getQuestions() {
        return this.questions;
    }

    public getQuizes() {
        return this.quizes;
    }

    public addQuestion(question : Question) {
        this.questions.push(question);
    }

    public addQuiz(quiz : Quiz) {
        this.quizes.push(quiz);
    }

  saveDataInLocalStorageArray(tempData, arrayName : string) :void {
    if(localStorage.getItem(arrayName) != null) {
      let readData = JSON.parse(localStorage.getItem(arrayName));
      readData.push(tempData);
      localStorage.setItem(arrayName, JSON.stringify(readData) );
    }
    else {
      let temperatureData = [tempData];
      localStorage.setItem(arrayName, JSON.stringify(temperatureData) );
    }
  }

}

export interface Question {
    text: string;
    answers: string[];
}

export interface Quiz {
    name: string;
    description: string;
    questions: Question[];
}

export interface Answer {
  question: string;
  answer: string;
}
