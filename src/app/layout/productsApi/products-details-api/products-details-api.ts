import { Component, Input } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';

@Component({
  imports: [],
  selector: 'app-products-details-api',
  styleUrl: './products-details-api.css',
  templateUrl: './products-details-api.html',
})
export class ProductsDetailsApi {
@Input()  myProduct!:IProduct;
staticUrl='http://localhost:3000/files/'
}
