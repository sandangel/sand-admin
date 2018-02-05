import { LayoutActions, LayoutActionType } from './layout.actions.helpers';

export interface Layout {
  sidenavOpened: boolean;
}

export interface LayoutState {
  readonly layout: Layout;
}

export const layoutInitialState: Layout = {
  sidenavOpened: true
};

export function layoutReducer(state = layoutInitialState, action: LayoutActions): Layout {
  switch (action.type) {
    case LayoutActionType.SET_SIDENAV: {
      return {
        sidenavOpened: action.payload
      };
    }
    case LayoutActionType.TOGGLE_SIDENAV: {
      return {
        sidenavOpened: !state.sidenavOpened
      };
    }
    default: {
      return state;
    }
  }
}
