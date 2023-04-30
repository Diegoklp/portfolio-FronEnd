import { TestBed } from '@angular/core/testing';

import { DatosPorftfolioService } from './datos-porftfolio.service';

describe('DatosPorftfolioService', () => {
  let service: DatosPorftfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPorftfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
