import { TestBed, inject } from '@angular/core/testing';

import { ShellBusServiceService } from './shell-bus-service.service';

describe('ShellBusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShellBusServiceService]
    });
  });

  it('should ...', inject([ShellBusServiceService], (service: ShellBusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
