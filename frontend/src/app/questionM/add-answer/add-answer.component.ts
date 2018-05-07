import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { Answer } from '../answer/answer.model';
import { Question } from '../question/question.model';
import { AuthenticationService } from '../../userM/authentication.service';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {
  

  @Input() public question : Question;
  public answer : FormGroup
  public _errorMessage : String;

  constructor(private fb : FormBuilder, private questionService : QuestionService, private router : Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.answer = this.createFormGroup(); 
  }
  onSubmit() {
    console.log("submit");
    let body = this.answer.value.body
    /*body = body.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); 
    body = body.replace(new RegExp("<script>", 'g'), "<^script^>");
    body = body.replace(new RegExp("</script>", 'g'), "<^/script^>");*/
    const answer = new Answer(body);
    answer.poster = this.authService.user$.getValue();
    console.log(this.authService.user$.getValue());
    this.questionService.addAnswerToQuestion(this.question.id, answer).subscribe(
      (item) => {this.question.addAnswer(item)},
      (err) => {
       this._errorMessage = "Please login";
      },
      () =>  {
       this.answer = this.createFormGroup();
      });
    
    /*this.questionService.addNewQuestion(question).subscribe(
      (item) => this.answer.id = item.id,
    () => {},
  ()=>  this.router.navigate(["/question", question.id]));*/
  }

  get id() {
    return this.question.id;
  }

  get errorMessage() {
    return this._errorMessage;
  }

  createFormGroup() : FormGroup {
    return this.fb.group({
      body: ["",[Validators.required, Validators.minLength(10)]]
    });
  }
}
