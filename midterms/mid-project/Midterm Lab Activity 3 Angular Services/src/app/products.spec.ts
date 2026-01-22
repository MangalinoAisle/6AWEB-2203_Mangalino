import { TestBed } from '@angular/core/testing';
// FIX: Import ProductsService, not Products
import { ProductsService } from './products';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
