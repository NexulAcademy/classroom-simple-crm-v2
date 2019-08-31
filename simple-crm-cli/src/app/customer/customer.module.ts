import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListPageComponent } from './customer-list-page/customer-list-page.component';
import { SharedImportsModule } from '../shared/shared-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { CustomerMockService } from './customer-mock.service';
import { environment } from 'src/environments/environment';
import { CustomerCreateDialogComponent } from './customer-create-dialog/customer-create-dialog.component';


@NgModule({
  declarations: [
    CustomerListPageComponent,
    CustomerCreateDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomerRoutingModule,
    SharedImportsModule
  ],
  providers: [
    {
      provide: CustomerService,
      useClass: environment.production ? CustomerService : CustomerMockService
    }
  ],
  entryComponents: [
    CustomerCreateDialogComponent
  ]
})
export class CustomerModule { }
