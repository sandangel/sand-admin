import { SetSidenav, ToggleSidenav, CloseSidenav, OpenSidenav } from './layout.actions';

export enum LayoutActionType {
  SET_SIDENAV = '[Layout] Set Sidenav',
  TOGGLE_SIDENAV = '[Layout] Toggle Sidenav',
  CLOSE_SIDENAV = '[Layout] Close Sidenav',
  OPEN_SIDENAV = '[Layout] Open Sidenav'
}

export type LayoutActions = SetSidenav | ToggleSidenav | CloseSidenav | OpenSidenav;

export type LayoutActionLookup = {
  '[Layout] Set Sidenav': SetSidenav;
  '[Layout] Toggle Sidenav': ToggleSidenav;
  '[Layout] Close Sidenav': CloseSidenav;
  '[Layout] Open Sidenav': OpenSidenav;
};

export function createSetSidenav(payload: SetSidenav['payload']): SetSidenav {
  return { type: LayoutActionType.SET_SIDENAV, payload };
}

export function createToggleSidenav(): ToggleSidenav {
  return { type: LayoutActionType.TOGGLE_SIDENAV };
}

export function createCloseSidenav(): CloseSidenav {
  return { type: LayoutActionType.CLOSE_SIDENAV };
}

export function createOpenSidenav(): OpenSidenav {
  return { type: LayoutActionType.OPEN_SIDENAV };
}
