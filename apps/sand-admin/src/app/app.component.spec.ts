/// <reference types="jest" />

import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let instance: AppComponent;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      instance = fixture.componentInstance;
      de = fixture.debugElement;
      el = de.nativeElement;
    })
  );

  it('should compile', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should display right title if provied', () => {
    instance.title = 'Hello';
    fixture.detectChanges();
    expect(el.textContent).toContain('Hello');
    expect(fixture).toMatchSnapshot();
  });

  it(
    'should create the app',
    async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'app'`,
    async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    })
  );
  it(
    'should render title in a h1 tag',
    async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    })
  );
});
