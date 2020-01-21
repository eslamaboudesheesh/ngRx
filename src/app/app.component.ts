import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from './store/store';
import { IncreamentActions, decreamentActions } from './store/actions/counter.action';
import { nSelector } from './store/reducers/counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number = 0;
  constructor(private store: Store<StoreInterface>) {
    this.store.select(nSelector).subscribe(data => this.count = data);

  }

  increase() {
    this.store.dispatch(new IncreamentActions(1));
  }
  decrease() {
    this.store.dispatch(new decreamentActions(2));
  }
}
