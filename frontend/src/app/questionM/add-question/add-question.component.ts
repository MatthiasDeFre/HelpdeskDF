import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Question } from '../question/question.model';
import { User } from '../../userM/user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../userM/authentication.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public question : FormGroup
  constructor(private fb : FormBuilder, private questionService : QuestionService, private router : Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.question = this.fb.group({
      title: ["",[Validators.required, Validators.minLength(10), Validators.maxLength(150)]],
      body: ["",[Validators.required, Validators.minLength(10), Validators.maxLength(300)]]

    })
  }
  onSubmit() {
    const question = new Question(this.authService.user$.getValue(), this.question.value.body, this.question.value.title, new Date());
    this.questionService.addNewQuestion(question).subscribe(
      (item) => question.id = item.id,
    () => {},
  ()=>  this.router.navigate(["/question", question.id]));
  }
  
}
