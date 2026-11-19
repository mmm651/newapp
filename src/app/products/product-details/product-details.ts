import { Component,EventEmitter,Input,Output } from '@angular/core';
import { IProduct } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product-service';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  @ Input() myProduct!:IProduct;
  @Output() likeEvent:EventEmitter<string>= new EventEmitter<string>();
   @Output() deleteEvent:EventEmitter<void>= new EventEmitter<void>();
constructor(private _productService:ProductService){}

sendLike(){
  this.likeEvent.emit('I like:'+ this.myProduct.name)
}
delete(){
this._productService.deletProduct(this.myProduct.id);
this.deleteEvent.emit();
console.log('delete button');

}
}
