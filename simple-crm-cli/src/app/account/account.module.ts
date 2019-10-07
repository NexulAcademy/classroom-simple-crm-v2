import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { SharedImportsModule } from '../shared/shared-imports.module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedImportsModule,
    AccountRoutingModule
  ],
  declarations: [
    NotAuthorizedComponent
  ]
})
export class AccountModule { }
