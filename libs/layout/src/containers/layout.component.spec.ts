import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN } from '@sand-app/app.module';
import { MatSidenav } from '@angular/material';

import { layoutReducer } from '../+state';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@sand-libs/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'sand-test',
  template: `
    <sand-layout [opened]="opened"></sand-layout>
  `
})
class SandTestComponent {
  opened: boolean;
}

describe('LayoutComponent', () => {
  let component: SandTestComponent;
  let fixture: ComponentFixture<SandTestComponent>;
  let sidenav: MatSidenav;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LayoutComponent, SandTestComponent],
        imports: [StoreModule.forRoot(REDUCER_TOKEN), MaterialModule, NoopAnimationsModule],
        providers: [{ provide: REDUCER_TOKEN, useFactory: () => ({ layout: layoutReducer }) }],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SandTestComponent);
    component = fixture.componentInstance;
    sidenav = fixture.debugElement.query(By.directive(MatSidenav)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(sidenav).toBeDefined();
    expect(sidenav).toBeInstanceOf(MatSidenav);
  });

  it('should change opened with @Input', () => {
    component.opened = true;
    fixture.detectChanges();
    expect(sidenav.opened).toBe(true);

    component.opened = false;
    fixture.detectChanges();
    expect(sidenav.opened).toBe(false);
  });
});
