import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { QuestionService } from "./question.service";
import { Question } from "./question/question.model";


@Injectable()
export class QuestionResolver implements Resolve<Question> {
    constructor(private _questionService:QuestionService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Question> {
        console.log("resolve");
        return this._questionService.getQuestion(route.params['id']);
    }
}