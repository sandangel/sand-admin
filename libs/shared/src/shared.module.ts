import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SHARED_MODULES: any[] = [CommonModule, FlexLayoutModule, FormsModule, ReactiveFormsModule];

@NgModule({
  exports: [...SHARED_MODULES]
})
export class SharedModule {}
