import { TestBed } from '@angular/core/testing';

import { CarparkingslotService } from './carparkingslot.service';

describe('CarparkingslotService', () => {
  let service: CarparkingslotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarparkingslotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
