import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListPageComponent } from './customer-list-page/customer-list-page.component';
import { SharedImportsModule } from '../shared/shared-imports.module';


@NgModule({
  declarations: [CustomerListPageComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedImportsModule
  ]
})
export class CustomerModule { }
