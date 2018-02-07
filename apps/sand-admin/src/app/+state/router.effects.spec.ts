import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { hot, readAll } from '@nrwl/nx/testing';
import { SharedModule } from '@sand-libs/shared';
import { Observable } from 'rxjs/Observable';

import { REDUCER_TOKEN } from '../app.module';
import {
  RouterActions,
  RouterActionType,
  createGo,
  createForward,
  createBack
} from './router.actions.helpers';
import { RouterEffects } from './router.effects';

@Component({
  selector: 'sand-test',
  template: `
    <router-outlet></router-outlet>`
})
export class TestComponent {}

@Component({
  selector: 'sand-test1',
  template: `
    <div></div>`
})
export class Test1Component {}

@Component({
  selector: 'sand-test2',
  template: `
    <div></div>`
})
export class Test2Component {}

describe('RouterEffects', () => {
  let actions$: Observable<RouterActions>;
  let effects: RouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
        RouterTestingModule.withRoutes([
          { path: '', component: TestComponent },
          { path: 'test1', component: Test1Component },
          { path: 'test2', component: Test2Component }
        ]),
        SharedModule
      ],
      declarations: [TestComponent, Test1Component, Test2Component],
      providers: [
        RouterEffects,
        DataPersistence,
        provideMockActions(() => actions$),
        { provide: REDUCER_TOKEN, useFactory: () => ({ router: routerReducer }) }
      ]
    });

    effects = TestBed.get(RouterEffects);
  });

  describe('router navigate effects', () => {
    it(
      'should get Router Back action',
      async(async () => {
        actions$ = hot('-a-|', {
          a: createBack()
        });
        expect(await readAll(effects.navigateBack$)).toEqual([{ type: RouterActionType.BACK }]);
      })
    );

    it(
      'should get Router Forward action',
      async(async () => {
        actions$ = hot('-a-|', { a: createForward() });
        expect(await readAll(effects.navigateForward$)).toEqual([
          { type: RouterActionType.FORWARD }
        ]);
      })
    );

    it(
      'should go to path with Router Go action',
      async(async () => {
        actions$ = hot('-a-|', { a: createGo(['/']) });
        expect(await readAll(effects.navigate$)).toEqual([createGo(['/'])]);
      })
    );
  });
});
