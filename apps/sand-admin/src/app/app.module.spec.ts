import { AppModule } from './app.module';
import { StoreModule } from '@ngrx/store';
import { NgrxUtilsModule } from '@ngrx-utils/store';
import { TestBed } from '@angular/core/testing';
import { routerReducer } from '@ngrx/router-store';
import { REDUCER_TOKEN } from './app.module';

describe('AppModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN), NgrxUtilsModule],
      providers: [{ provide: REDUCER_TOKEN, useFactory: () => ({ router: routerReducer }) }]
    });
  });

  it('should be defined', () => {
    expect(new AppModule()).toBeDefined();
  });
});
