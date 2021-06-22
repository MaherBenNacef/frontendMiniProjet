import { TestBed } from '@angular/core/testing';

import { CrudCategoriesService } from './crud-categories.service';

describe('CrudCategoriesService', () => {
  let service: CrudCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
