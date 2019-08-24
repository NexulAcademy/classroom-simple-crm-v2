import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';

export const SHARED_MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatCardModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...SHARED_MATERIAL_MODULES
  ],
  exports: [
    ...SHARED_MATERIAL_MODULES
  ],
})
export class SharedImportsModule { }
