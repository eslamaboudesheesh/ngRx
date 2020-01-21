import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from './store/store';
import { IncreamentActions, decreamentActions } from './store/actions/counter.action';
import { nSelector } from './store/reducers/counter.reducer';
import { LoadTodoAction, LoadUserAction } from './store/actions/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  count:number = 0;
  users:any ;
  constructor(private store: Store<StoreInterface>) {
    // this.store.select(nSelector).subscribe(data => this.count = data);
    this.store.subscribe(data => console.log( data.todos));
    this.store.subscribe((data )=> {
       this.users = data.users 
      console.log(this.users);
    });

  }

  ngOnInit() {
    this.loadUsers();
  }


  increase() {
    this.store.dispatch(new IncreamentActions(1));
  }
  decrease() {
    this.store.dispatch(new decreamentActions(2));
  }

  load(){
    this.store.dispatch( new LoadTodoAction());
  }

  loadUsers() {
    this.store.dispatch(new LoadUserAction());
  }
}
