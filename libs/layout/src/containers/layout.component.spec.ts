import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN } from '@sand-app/app.module';

import { layoutReducer, LayoutState } from '../+state';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let store: Store<LayoutState>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LayoutComponent],
        imports: [StoreModule.forRoot(REDUCER_TOKEN)],
        providers: [{ provide: REDUCER_TOKEN, useFactory: () => ({ layout: layoutReducer }) }],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();

      store = TestBed.get(Store);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
