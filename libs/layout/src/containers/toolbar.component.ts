import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutState, createToggleSidenav } from '../+state';

@Component({
  selector: 'sand-toolbar',
  template: `
    <mat-toolbar class="mat-elevation-z2" color="primary">
    	<button mat-icon-button (click)="toggleSidenav()">
    		<mat-icon>menu</mat-icon>
    	</button>Sand Admin Template
    </mat-toolbar>`,
  styles: [
    `
    :host {
        z-index: 2;
    }
    .mat-button {
        margin-right: 10px;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  constructor(private store: Store<LayoutState>) {}

  toggleSidenav() {
    this.store.dispatch(createToggleSidenav());
  }
}
