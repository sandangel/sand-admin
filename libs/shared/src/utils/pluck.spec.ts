import { of } from 'rxjs/observable/of';
import { pluck } from './pluck';

describe('pluck', () => {
  it('should pluck prop from plain object', () => {
    of({ a: { b: { c: true } } })
      .pipe(pluck('a', 'b', 'c'))
      .subscribe(c => {
        expect(c).toBe(true);
      });
  });

  it('should pluck prop from object with multi type prop', () => {
    const obj = { a: { b: true, c: { d: false } } };
    of(obj)
      .pipe(pluck('a', 'b'))
      .subscribe(b => {
        expect(b).toBe(true);
      });

    of(obj)
      .pipe(pluck('a', 'c', 'd'))
      .subscribe(d => {
        expect(d).toBe(false);
      });
  });
});
