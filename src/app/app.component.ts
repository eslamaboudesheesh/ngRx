import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { StoreInterface } from './store/store';
import { IncreamentActions, decreamentActions } from './store/actions/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  constructor (private store:Store<StoreInterface>){
 this.store.subscribe(data => this.count = data.counter.n );
  }

  increase(){
    this.store.dispatch(new IncreamentActions(1));
  }
  decrease(){
    this.store.dispatch(new decreamentActions(2));
  }
}
