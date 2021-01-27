import { TestBed } from '@angular/core/testing';

import { InquirySaldoService } from './inquiry-saldo.service';

describe('InquirySaldoService', () => {
  let service: InquirySaldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquirySaldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
