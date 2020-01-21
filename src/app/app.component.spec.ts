import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const storeStub = () => ({
      subscribe: function0 => ({}),
      dispatch: arg => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: Store, useFactory: storeStub }]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('count defaults to: 0', () => {
    expect(component.count).toEqual(0);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'loadUsers').and.callThrough();
      component.ngOnInit();
      expect(component.loadUsers).toHaveBeenCalled();
    });
  });
  describe('increase', () => {
    it('makes expected calls', () => {
      const storeStub:any = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.increase();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });
  describe('decrease', () => {
    it('makes expected calls', () => {
      const storeStub:any = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.decrease();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });
  describe('load', () => {
    it('makes expected calls', () => {
      const storeStub: any = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.load();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });
  describe('loadUsers', () => {
    it('makes expected calls', () => {
      const storeStub: any = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.loadUsers();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });
});
