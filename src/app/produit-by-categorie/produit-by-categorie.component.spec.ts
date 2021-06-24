import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitByCategorieComponent } from './produit-by-categorie.component';

describe('ProduitByCategorieComponent', () => {
  let component: ProduitByCategorieComponent;
  let fixture: ComponentFixture<ProduitByCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitByCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitByCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
