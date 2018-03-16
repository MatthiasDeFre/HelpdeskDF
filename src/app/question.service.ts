import { Injectable } from '@angular/core';
import { Question } from './question/question.model';
import { User } from './user/user.model';

@Injectable()
export class QuestionService {

  private _questions = new Array<Question>();

  constructor() { 
    let user = new User("iemand");
    this._questions.push(new Question(user, "Vraag 1", "nog iets"));
    this._questions.push(new Question(user, "Vraag 2", "nog iets"));
    this._questions.push(new Question(user, "Vraag 3", "nog iets"));
    this._questions.push(new Question(user, "Vraag 4", "nog iets"));
    this._questions.push(new Question(user, "Vraag 5", "nog iets"));
    this._questions.push(new Question(user, "Vraag 6", "nog iets"));
    this._questions.push(new Question(user, "Vraag 7", "nog iets"));
    console.log("test");
  }

  get questions() : Question[] {
    console.log("test2");
    return this._questions;
  }


}
