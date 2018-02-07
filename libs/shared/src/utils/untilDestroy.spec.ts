import { untilDestroy } from './untilDestroy';
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Subscription } from 'rxjs/Subscription';

@Component({
  template: `<div></div>`,
  selector: 'sand-test'
})
export class TestComponent implements OnDestroy {
  test$ = new Subject<number>();
  test: number;
  sub: Subscription;

  constructor() {
    this.sub = this.test$.pipe(untilDestroy(this)).subscribe(a => (this.test = a));
  }

  ngOnDestroy() {}
}

describe('untilDestroy', () => {
  let fixture: ComponentFixture<TestComponent>;
  let instance: TestComponent;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      instance = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should unsubscribe when component destroyed', () => {
    instance.test$.next(2);
    fixture.detectChanges();

    expect(instance.test).toBe(2);

    instance.ngOnDestroy();
    fixture.detectChanges();
    instance.test$.next(3);

    expect(instance.test).toBe(2);
    expect(instance.sub.closed).toBe(true);
  });
});
