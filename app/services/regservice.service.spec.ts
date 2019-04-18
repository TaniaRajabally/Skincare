import { TestBed } from '@angular/core/testing';

import { RegserviceService } from './regservice.service';

describe('RegserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegserviceService = TestBed.get(RegserviceService);
    expect(service).toBeTruthy();
  });
});
