import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Customer } from './customer.model';

describe('CustomerService', () => {
  let injector: TestBed;
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CustomerService ]
    });
    injector = getTestBed();
    service = injector.get(CustomerService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify(); // ensures there are no outstanding requests between tests.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get customer 1', () => {
    const dummyCustomer: Customer = {
      customerId: 1,
      firstName: 'Bob',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      preferredContactMethod: 'email',
      statusCode: 'prospect',
      lastContactDate: '2019-01-23'
    };
    service.get(1).subscribe(cust => {
      expect(cust.customerId).toBe(1);
      expect(cust).toEqual(dummyCustomer);
    });

    const req = httpMock.expectOne(`/api/customer/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCustomer);
  });
});
