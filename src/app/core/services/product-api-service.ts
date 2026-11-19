import { HttpClient } from '@angular/common/http';
import { Service,inject } from '@angular/core';
import { IProduct } from '../models/product.model';

@Service()
export class ProductApiService {
  private apiUrl='http://localhost:3000/api/product';
private _http= inject(HttpClient);

  getAllProducts(){
 return this._http.get<IProduct[]>(this.apiUrl);

  }
}
