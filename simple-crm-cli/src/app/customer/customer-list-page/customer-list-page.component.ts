import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Customer } from '../customer.model';

@Component({
  selector: 'crm-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss']
})
export class CustomerListPageComponent implements OnInit {
  customers: Customer[] = [
    {
      customerId: 1,
      firstName: 'John',
      lastName: 'Smith',
      phoneNumber: '314-555-1234',
      emailAddress: 'john@nexulacademy.com',
      statusCode: 'Prospect',
      preferredContactMethod: 'phone',
      lastContactDate: new Date().toISOString()
    },
    {
      customerId: 1,
      firstName: 'Tory',
      lastName: 'Amos',
      phoneNumber: '314-555-9873',
      emailAddress: 'tory@example.com',
      statusCode: 'Prospect',
      preferredContactMethod: 'email',
      lastContactDate: new Date().toISOString()
    }
  ];
  dataSource: MatTableDataSource<Customer>;
  displayColumns = ['name', 'phone', 'email', 'status'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.customers);
  }

}
