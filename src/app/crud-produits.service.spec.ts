import { TestBed } from '@angular/core/testing';

import { CrudProduitsService } from './crud-produits.service';

describe('CrudProduitsService', () => {
  let service: CrudProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
