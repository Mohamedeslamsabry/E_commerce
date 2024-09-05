import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  private readonly _HttpClient=inject(HttpClient);

  Allproduct():Observable<any>{
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/products`)
  }

  Allproductpage2():Observable<any>{
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/products?page=2`)
  }

  SubseficProduct(id:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/products/${id}`)
  }
  
}
