import { TestBed, inject } from '@angular/core/testing';

import { BdbMonitorService } from './bdb-monitor.service';

describe('BdbMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BdbMonitorService]
    });
  });

  it('should be created', inject([BdbMonitorService], (service: BdbMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
