import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductDetails } from './product-details/product-details';
import { ProductService } from '../core/services/product-service';
import { IProduct } from '../core/models/product.model';

@Component({
  imports: [ProductDetails],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  constructor(private _cdr:ChangeDetectorRef,
    private _productService:ProductService){

  }
  ngOnInit():void{
    this.loadData();
  }
  loadData(){
    console.log('load data');
    this.productList=this._productService.productList;
    console.log('com',this._productService.productList)
  }
  productList!:IProduct[]

  addPtoduct(){
   this.productList[0].name="moo"

  // this.productList.push({id:1,name:'Joo',desc:'coach',price:10,imgURL:'1.png'})
  // this._cdr.detectChanges();}

this.addPtoduct()
}
message:string=''
getLike(msg:string){
  console.log(msg);
  this.message=msg;
}
}
