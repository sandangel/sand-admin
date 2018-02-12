/// <reference types="jest" />
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@sand-libs/material';

import { AppComponent } from './app.component';
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
