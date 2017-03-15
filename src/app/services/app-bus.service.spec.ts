import { TestBed, inject } from '@angular/core/testing';

import { AppBusService } from './app-bus.service';

describe('AppBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppBusService]
    });
  });

  it('should ...', inject([AppBusService], (service: AppBusService) => {
    expect(service).toBeTruthy();
  }));
});
