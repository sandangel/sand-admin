import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN } from '@sand-app/app.module';

import { ToolbarComponent } from './toolbar.component';
import { layoutReducer } from '../+state';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ToolbarComponent],
        imports: [StoreModule.forRoot(REDUCER_TOKEN)],
        providers: [{ provide: REDUCER_TOKEN, useFactory: () => ({ layout: layoutReducer }) }],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
