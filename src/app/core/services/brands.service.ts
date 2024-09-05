import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {


  private readonly _HttpClient=inject(HttpClient);

  AllBrands():Observable<any>{
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/brands`)
  }

  specificBrands(id:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/brands/${id}`)
  }
 


}
