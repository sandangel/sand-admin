import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule, ActionReducerMap, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@sand-envs/environment';
import { LayoutModule } from '@sand-libs/layout';
import { MaterialModule } from '@sand-libs/material';
import { SharedModule } from '@sand-libs/shared';
import { RouterModule, Params, RouterStateSnapshot } from '@angular/router';
import { NgrxSelect, NgrxUtilsModule } from '@ngrx-utils/store';

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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'sand-admin' }),
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    RouterModule.forRoot([]),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(REDUCER_TOKEN),
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
export class AppModule {
  constructor(store: Store<any>, ngrxSelect: NgrxSelect) {
    ngrxSelect.connect(store);
  }
}
