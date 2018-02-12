import { Component, OnDestroy } from '@angular/core';
import { Pluck } from '@ngrx-utils/store';
import { Observable } from 'rxjs/Observable';
import { untilDestroy, pluck } from '@ngrx-utils/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LayoutState, createSetSidenav } from '@sand-libs/layout';
import { Store } from '@ngrx/store';

@Component({
  selector: 'sand-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @Pluck('layout.sidenavOpened') opened$: Observable<boolean>;

  sidenavMode: 'over' | 'push' | 'side';

  constructor(bpo: BreakpointObserver, store: Store<LayoutState>) {
    bpo
      .observe([Breakpoints.XSmall])
      .pipe(pluck('matches'), untilDestroy(this))
      .subscribe(
        isSmallScreen =>
          (this.sidenavMode = isSmallScreen
            ? (store.dispatch(createSetSidenav(false)), 'over')
            : (store.dispatch(createSetSidenav(true)), 'side'))
      );
  }

  ngOnDestroy() {}
}
