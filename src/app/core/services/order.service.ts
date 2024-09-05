import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private readonly _HttpClient=inject(HttpClient);


Myheaders:any={
  token: localStorage.getItem('uToken'),
}



//! Get order 
getorderUser(idtoken:string):Observable<any>{
  return this._HttpClient.get(`${environment.BaseUrl}/api/v1/orders/user/${idtoken}`) //!id ---> token when decode
} 

 //!payment cash
 createCash(id:string|null,data:object):Observable<any>{
  return this._HttpClient.post(`${environment.BaseUrl}/api/v1/orders/${id}`,   //!id --->  host id cart 
    {
      "shippingAddress":data    //!data in Body
    },    
   { headers:this.Myheaders}   //!headers
  )
}

 //!payment visa
 CheackOut(id:string|null,data:object):Observable<any>{
  return this._HttpClient.post(`${environment.BaseUrl}/api/v1/orders/checkout-session/${id}?url=${window.location.origin}`,   //!id --->  host id cart 
    {
      "shippingAddress":data    //!data in Body
    },    
   { headers:this.Myheaders}   //!headers
  )
}


}







