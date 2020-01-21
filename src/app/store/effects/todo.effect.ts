import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { LOAD, SuccessActions, FaildActions } from "../actions/todo.action";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
@Injectable()
export class TodosEffect {
  constructor(private http: HttpClient, private action: Actions) {}
// createEffect to create my effect
// pipe to make alot of operatoer and reaturn observable / fisrt operator oftype 
  todo$ = createEffect(() =>
    this.action.pipe(
      ofType(LOAD),
      // finction retirn observable 
      mergeMap(() =>
      // used pipe to change from obsevable of object to obsevabel of action 
        this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(
          map(data => new SuccessActions(data)),
          catchError(error => of(new FaildActions(error)))
        )
      )
    )
  );
}
