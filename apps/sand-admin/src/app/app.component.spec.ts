/// <reference types="jest" />

import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@sand-libs/material';
import { StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { REDUCER_TOKEN } from './app.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [NoopAnimationsModule, MaterialModule, StoreModule.forRoot(REDUCER_TOKEN)],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [{ provide: REDUCER_TOKEN, useFactory: () => ({ router: routerReducer }) }]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
    })
  );

  it(
    'should create the app',
    async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
