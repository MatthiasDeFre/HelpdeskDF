import { Injectable } from '@angular/core';
import { Question } from './question/question.model';
import { User } from '../userM/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Answer } from './answer/answer.model';
@Injectable()
export class QuestionService {

  private readonly _appUrl = '/API';
 

    /**
     *
     */
    constructor(private http : HttpClient) {      
    }
    
    get questions() : Observable<Question[]>{
    /* return this.http.get(this._appUrl+"/questions")
          .pipe(map((list: any[]):Question[] => list.map(item =>
            new Question(new User("Iemand"), item.body, item.title, item.date)
          )));*/
          return this.http
          .get(`${this._appUrl}/questions/`)
          .pipe(map((list: any[]): Question[] => list.map(Question.fromJSON)));
    }

    addNewQuestion(question) : Observable<Question> {
      return this.http
        .post(`${this._appUrl}/questions/`, question)
          .pipe(map(Question.fromJSON));
    }
    addAnswerToQuestion(id : String, answer : Answer) : Observable<Answer> {
    //   let question;
      //this.getQuestion(id).subscribe(item => question = item);
    //  question.addAnswer(answer);
    return this.http
      .post(`${this._appUrl}/question/${id}/answers`, answer).pipe(map(Answer.fromJSON));
    }
    deleteQuestion(question) {
      console.log("deleting");
      console.log(`${this._appUrl}/question/${question.id}`);
      return this.http
        .delete(`${this._appUrl}/question/${question.id}`)
        .pipe(map(Question.fromJSON));
    }
    deleteAnswer(question, answer) {
      return this.http
      .delete(`${this._appUrl}/question/${question.id}/${answer.id}`)
      .pipe(map(Answer.fromJSON));
    }
  getQuestion(id: string) {
    const theUrl = `${this._appUrl}/question/${id}`;
    return this.http.get(theUrl).pipe(map(Question.fromJSON));
  }

  getImageUrl(avatar : string) {
    const theUrl = `image/${avatar}`;
    return this.http.get(theUrl).pipe(map(resp => {
      console.log(resp);
    }));
  }
 /* constructor() { 
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
  }*/


}
