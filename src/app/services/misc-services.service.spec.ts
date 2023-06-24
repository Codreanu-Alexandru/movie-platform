import { TestBed } from '@angular/core/testing';

import { MiscServicesService } from './misc-services.service';

describe('MiscServicesService', () => {
  let service: MiscServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
