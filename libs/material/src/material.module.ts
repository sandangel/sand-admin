import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatDialogModule
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';

export const MATERIAL_MODULES: any[] = [
  MatCardModule,
  MatExpansionModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatTableModule,
  MatButtonModule,
  MatSidenavModule,
  MatRippleModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatTabsModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatDialogModule
];

export const CDK_MODULES: any[] = [LayoutModule];

@NgModule({
  exports: [...MATERIAL_MODULES, ...CDK_MODULES]
})
export class MaterialModule {}
