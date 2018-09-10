import { TestBed, inject } from '@angular/core/testing';

import { ReallService } from './reall.service';

describe('ReallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReallService]
    });
  });

  it('should be created', inject([ReallService], (service: ReallService) => {
    expect(service).toBeTruthy();
  }));
});
