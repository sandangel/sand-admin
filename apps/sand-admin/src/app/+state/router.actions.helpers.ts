import { Go, Back, Forward } from './router.actions';

export enum RouterActionType {
  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward'
}

export type RouterActions = Go | Back | Forward;

export type RouterActionLookup = {
  '[Router] Go': Go;
  '[Router] Back': Back;
  '[Router] Forward': Forward;
};

export function createGo(path: Go['path'], query?: Go['query'], extras?: Go['extras']): Go {
  return { type: RouterActionType.GO, path, query, extras };
}

export function createBack(): Back {
  return { type: RouterActionType.BACK };
}

export function createForward(): Forward {
  return { type: RouterActionType.FORWARD };
}
