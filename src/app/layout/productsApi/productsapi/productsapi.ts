import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';
import { ProductApiService } from '../../../core/services/product-api-service';

import { ProductsDetailsApi } from '../products-details-api/products-details-api';

@Component({
  imports: [ProductsDetailsApi],
  selector: 'app-productsapi',
  styleUrl: './productsapi.css',
  templateUrl: './productsapi.html',
})
export class Productsapi implements OnInit {
  productsList!:IProduct[];
  constructor(private _productAPIService:ProductApiService, private _cdr:ChangeDetectorRef){}

  ngOnInit():void{
    this._productAPIService.getAllProducts().subscribe(data=>{
      this.productsList=data;
      this._cdr.detectChanges();
    })
  }
}
