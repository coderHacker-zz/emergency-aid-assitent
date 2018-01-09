import { TestBed, inject } from '@angular/core/testing';

import { ExternalapiService } from './externalapi.service';

describe('ExternalapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalapiService]
    });
  });

  it('should ...', inject([ExternalapiService], (service: ExternalapiService) => {
    expect(service).toBeTruthy();
  }));
});
