import { OperatorFunction } from 'rxjs/interfaces';
import { pluck as pluckOperator } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

/**
 * Strong typed pluck function to replace
 * rxjs/operators/pluck
 *
 * Accept max 4 properties name
 */
export function pluck<A, B extends keyof A>(s1: B): OperatorFunction<A, A[B]>;
export function pluck<A, B extends keyof A, C extends keyof A[B]>(
  s1: B,
  s2: C
): OperatorFunction<A, A[B][C]>;
export function pluck<A, B extends keyof A, C extends keyof A[B], D extends keyof A[B][C]>(
  s1: B,
  s2: C,
  s3: D
): OperatorFunction<A, A[B][C][D]>;
export function pluck<
  A,
  B extends keyof A,
  C extends keyof A[B],
  D extends keyof A[B][C],
  E extends keyof A[B][C][D]
>(s1: B, s2: C, s3: D, s4: E): OperatorFunction<A, A[B][C][D][E]>;
export function pluck(...props: string[]): any {
  return function(source$: Observable<any>) {
    return source$.pipe(pluckOperator(...props));
  };
}
