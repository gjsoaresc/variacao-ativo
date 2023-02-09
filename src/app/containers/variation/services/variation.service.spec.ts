import { TestBed } from '@angular/core/testing';

import { VariationService } from './variation.service';

describe('VariationService', () => {
  let service: VariationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a getChart method', () => {
    expect(service.getChart).toBeTruthy();
  });

  it('should return data', () => {
    expect(service.getChart('PETR4.SA')).toBeTruthy();
  });
});
