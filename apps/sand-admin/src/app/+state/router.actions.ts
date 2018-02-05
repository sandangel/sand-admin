import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export interface Go extends Action {
  type: '[Router] Go';
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export interface Back extends Action {
  type: '[Router] Back';
}

export interface Forward extends Action {
  type: '[Router] Forward';
}
