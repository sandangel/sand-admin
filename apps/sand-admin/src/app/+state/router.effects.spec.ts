import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot } from '@nrwl/nx/testing';
import { RouterEffects } from './router.effects';
import { RouterActions, RouterActionType } from './router.actions.helpers';
import { Observable } from 'rxjs/Observable';

describe('RouterEffects', () => {
  let actions$: Observable<RouterActions>;
  let effects: RouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [RouterEffects, DataPersistence, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(RouterEffects);
  });

  describe('router navigate effects', () => {
    it(
      'should work',
      async(async () => {
        actions$ = hot('-a-|', { a: { type: RouterActionType.GO } });
        expect(await readAll(effects.navigate$)).toEqual([
          { type: RouterActionType.GO, payload: {} }
        ]);
      })
    );
  });
});
