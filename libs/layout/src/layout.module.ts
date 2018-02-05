import { NgModule } from '@angular/core';
import { MaterialModule } from '@sand-libs/material';
import { SharedModule } from '@sand-libs/shared';
import { StoreModule } from '@ngrx/store';
import { layoutReducer } from './+state/layout.reducer';
import { LayoutComponent } from './containers/layout.component';
import { ToolbarComponent } from './containers/toolbar.component';

@NgModule({
  imports: [SharedModule, MaterialModule, StoreModule.forFeature('layout', layoutReducer)],
  declarations: [LayoutComponent, ToolbarComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
