import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule}from '@angular/common/http' ;
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { redusers } from './store/store';
import {EffectsModule} from '@ngrx/effects';
import { TodosEffect } from './store/effects/todo.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
  @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge : 10
    }),
    StoreModule.forRoot(redusers) ,// name for reducer and my reducer 
    EffectsModule.forRoot([TodosEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
