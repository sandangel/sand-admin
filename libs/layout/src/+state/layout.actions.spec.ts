import {
  createCloseSidenav,
  createSetSidenav,
  LayoutActionType,
  createOpenSidenav,
  createToggleSidenav
} from './layout.actions.helpers';
import { CloseSidenav, SetSidenav, OpenSidenav, ToggleSidenav } from './layout.actions';

describe('LayoutActions', () => {
  it('should create action', () => {
    const action1: SetSidenav = { type: LayoutActionType.SET_SIDENAV, payload: false };
    const action2: CloseSidenav = { type: LayoutActionType.CLOSE_SIDENAV };
    const action3: OpenSidenav = { type: LayoutActionType.OPEN_SIDENAV };
    const action4: ToggleSidenav = { type: LayoutActionType.TOGGLE_SIDENAV };
    expect(createSetSidenav(false)).toEqual(action1);
    expect(createCloseSidenav()).toEqual(action2);
    expect(createOpenSidenav()).toEqual(action3);
    expect(createToggleSidenav()).toEqual(action4);
  });
});
