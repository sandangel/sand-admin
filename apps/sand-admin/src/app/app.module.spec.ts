import { AppModule } from './app.module';
import { Store, StoreModule } from '@ngrx/store';
import { NgrxSelect, NgrxUtilsModule } from '@ngrx-utils/store';
import { TestBed } from '@angular/core/testing';
import { routerReducer } from '@ngrx/router-store';
import { REDUCER_TOKEN } from './app.module';

describe('AppModule', () => {
  let store: Store<any>;
  let ngrxSelect: NgrxSelect;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN), NgrxUtilsModule],
      providers: [{ provide: REDUCER_TOKEN, useFactory: () => ({ router: routerReducer }) }]
    });

    store = TestBed.get(Store);
    ngrxSelect = TestBed.get(NgrxSelect);
  });

  it('should be defined', () => {
    expect(new AppModule(store, ngrxSelect)).toBeDefined();
  });
});
