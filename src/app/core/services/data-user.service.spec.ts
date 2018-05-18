import { TestBed, inject } from '@angular/core/testing';

import { DataUserService } from './data-user.service';

describe('DataUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataUserService]
    });
  });

  it('should be created', inject([DataUserService], (service: DataUserService) => {
    expect(service).toBeTruthy();
  }));
});
