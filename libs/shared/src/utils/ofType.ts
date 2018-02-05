import { Action } from '@ngrx/store';
import { filter } from 'rxjs/operators';

/**
 * Compatible with typescript 2.6.2 strictFunctionTypes
 * ofType for @ngrx/effects
 */
export function ofType<T extends Action>(...allowedTypes: string[]) {
  return filter((action: Action): action is T => {
    return allowedTypes.some(type => type === action.type);
  });
}
