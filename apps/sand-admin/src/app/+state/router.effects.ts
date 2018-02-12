import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { Go } from './router.actions';
import { RouterActionType } from './router.actions.helpers';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType<Go>(RouterActionType.GO),
    tap(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(ofType(RouterActionType.BACK), tap(() => this.location.back()));

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(ofType(RouterActionType.FORWARD), tap(() => this.location.forward()));

  constructor(private actions$: Actions, private router: Router, private location: Location) {}
}
