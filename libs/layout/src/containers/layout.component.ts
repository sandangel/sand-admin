import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { createSetSidenav, LayoutState } from '../+state';

@Component({
  selector: 'sand-layout',
  template: `
    <mat-sidenav-container>
    	<mat-sidenav [fixedInViewport]="true" [opened]="opened" [mode]="sidenavMode" (openedChange)="onOpenedChange($event)"></mat-sidenav>
    	<sand-toolbar></sand-toolbar>
    </mat-sidenav-container>`,
  styles: [
    `
    mat-sidenav {
        width: 300px;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  @Input() opened: boolean;

  @Input() sidenavMode: 'over' | 'push' | 'side';

  constructor(private store: Store<LayoutState>) {}

  onOpenedChange(opened: boolean) {
    if (this.opened !== opened) {
      this.store.dispatch(createSetSidenav(opened));
    }
  }
}
