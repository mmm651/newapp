import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsDetailsApi } from './products-details-api';

describe('ProductsDetailsApi', () => {
  let component: ProductsDetailsApi;
  let fixture: ComponentFixture<ProductsDetailsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDetailsApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsDetailsApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
