import { Action } from '@ngrx/store';

export interface SetSidenav extends Action {
  type: '[Layout] Set Sidenav';
  payload: boolean;
}
export interface ToggleSidenav extends Action {
  type: '[Layout] Toggle Sidenav';
}

export interface CloseSidenav extends Action {
  type: '[Layout] Close Sidenav';
}

export interface OpenSidenav extends Action {
  type: '[Layout] Open Sidenav';
}
