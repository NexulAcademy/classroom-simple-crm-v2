import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'crm-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss']
})
export class CustomerListPageComponent implements OnInit {
  customers$: Observable<Customer[]>;
  displayColumns = ['name', 'phone', 'email', 'status'];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers$ = this.customerService.search('');
  }

}
