import { layoutReducer, layoutInitialState, Layout } from './layout.reducer';
import { createSetSidenav, createOpenSidenav } from './layout.actions.helpers';

describe('layoutReducer', () => {
  it('should work', () => {
    const state: Layout = layoutInitialState;
    const action1 = createSetSidenav(true);
    const actual = layoutReducer(state, action1);
    expect(actual).toEqual({ sidenavOpened: true });
  });

  it('should return init state by default', () => {
    const action = createOpenSidenav();
    const actual = layoutReducer(layoutInitialState, action);
    expect(actual).toEqual(layoutInitialState);
  });

  it('should have initial state if not provided', () => {
    const action = createOpenSidenav();
    expect(layoutReducer(undefined, action)).toEqual(layoutInitialState);
  });
});
