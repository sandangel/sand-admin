import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Params, RouterModule, RouterStateSnapshot } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgrxUtilsModule } from '@ngrx-utils/store';
import { EffectsModule } from '@ngrx/effects';
import {
  routerReducer,
  RouterReducerState,
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@sand-envs/environment';
import { LayoutModule } from '@sand-libs/layout';
import { MaterialModule } from '@sand-libs/material';
import { SharedModule } from '@sand-libs/shared';
import { storeFreeze } from 'ngrx-store-freeze';

import { RouterEffects } from './+state/router.effects';
import { AppComponent } from './app.component';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');

// export function persistStore(reducer: ActionReducer<any>): ActionReducer<any> {
//   return function(state: any | undefined, action: any) {
//     if (!state) {
//       const persistedState = localStorage.getItem('rootState');
//       return persistedState ? JSON.parse(persistedState) : reducer(persistedState, action);
//     }

//     const nextState = reducer(state, action);

//     localStorage.setItem('rootState', JSON.stringify(nextState));

//     return nextState;
//   };
// }

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'sand-admin' }),
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    RouterModule.forRoot([]),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers }),
    EffectsModule.forRoot([RouterEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    NgrxUtilsModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: REDUCER_TOKEN, useFactory: () => ({ router: routerReducer }) }
  ]
})
export class AppModule {}
