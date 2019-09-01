import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { CustomerMockService } from './customer-mock.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('CustomerMockService', () => {
  let injector: TestBed;
  let service: CustomerMockService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ {
        provide: CustomerService,
        useClass: CustomerMockService
      }]
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
});
