import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Customer } from '../customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'crm-customer-list-table',
  templateUrl: './customer-list-table.component.html',
  styleUrls: ['./customer-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListTableComponent implements OnInit {

  @Input() customers: Customer[];
  displayColumns = ['icon', 'name', 'phone', 'email', 'lastContactDate', 'status', 'actions'];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  trackByCustomerId(cust: Customer) {
    return cust.customerId;
  }

  openDetail(item: Customer) {
    if (item) {
      this.router.navigate([`./customer/${item.customerId}`]);
    }
  }

}
