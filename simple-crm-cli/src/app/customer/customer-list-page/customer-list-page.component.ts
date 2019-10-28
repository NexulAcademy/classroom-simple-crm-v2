import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { startWith, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'crm-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss']
})
export class CustomerListPageComponent implements OnInit {
  customers$: Observable<Customer[]>;
  displayColumns = ['icon', 'name', 'phone', 'email', 'lastContactDate', 'status', 'actions'];
  filterInput = new FormControl();

  constructor(
    private customerService: CustomerService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.search();
  }

  openDetail(item: Customer) {
    if (item) {
      this.router.navigate([`./customer/${item.customerId}`]);
    }
  }

  search() {
    const fString$: Observable<string> = this.filterInput.valueChanges.pipe(
      startWith(''),
      debounceTime(700)
    );
    this.customers$ = combineLatest([this.customerService.search(''), fString$]).pipe(
      map(([customers, fString]) => {
        return customers.filter(cust => {
          return (cust.firstName + ' ' + cust.lastName).indexOf(fString) >= 0;
        });
      })
    );
  }

  addCustomer() {
    const dialogRef = this.dialog.open(CustomerCreateDialogComponent, {
      width: '250px',
      data: null
    });
    dialogRef.afterClosed().subscribe((customer: Customer) => {
      this.customerService.save(customer).subscribe(result => {
        this.search();
      });
    });
  }

}
