import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Question } from '../question/question.model';
import { User } from '../../user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  private question : FormGroup
  constructor(private fb : FormBuilder, private questionService : QuestionService, private router : Router) { }

  ngOnInit() {
    this.question = this.fb.group({
      title: ["",[Validators.required, Validators.minLength(10)]],
      body: ["",[Validators.required, Validators.minLength(10)]]

    })
  }
  onSubmit() {
    const question = new Question(new User("bla"), this.question.value.body, this.question.value.title, new Date());
    this.questionService.addNewQuestion(question).subscribe(
      (item) => question.id = item.id,
    () => {},
  ()=>  this.router.navigate(["/question", question.id]));
  }
}
