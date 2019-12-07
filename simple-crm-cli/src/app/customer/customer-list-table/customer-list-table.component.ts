import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'crm-customer-list-table',
  templateUrl: './customer-list-table.component.html',
  styleUrls: ['./customer-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListTableComponent implements OnInit {

  @Input() customers: Customer[];
  displayColumns = ['icon', 'name', 'phone', 'email', 'lastContactDate', 'status', 'actions'];

  constructor() { }

  ngOnInit() {
  }

}
