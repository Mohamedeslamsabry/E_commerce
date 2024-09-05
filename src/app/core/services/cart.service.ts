import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, PLATFORM_ID, Signal, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _HttpClient = inject(HttpClient);

   /* numberofcart:BehaviorSubject<number>=new BehaviorSubject(0); */
  
    numberofcart:WritableSignal<number>=signal(0);

    
  
  //! AddproductToCart
  AddproductToCart(Id: string): Observable<any> {
    return this._HttpClient.post( `${environment.BaseUrl}/api/v1/cart`,
      { productId: Id },    //!Body
    );
  }

      //!displayproductToCart
  displayproductToCart(): Observable<any> {
        return this._HttpClient.get( `${environment.BaseUrl}/api/v1/cart`,
        
        );
  }
  

  //!UpdatproductToCart
  UpdatproductToCart(Id: string, count: string): Observable<any> {
    return this._HttpClient.put( `${environment.BaseUrl}/api/v1/cart/${Id}`,
      { count: count },    //!Body
    
    );
  }


  //!removeproductToCart
  removeproductToCart(Id:string): Observable<any> {
    return this._HttpClient.delete( `${environment.BaseUrl}/api/v1/cart/${Id}`,
  
    );
  }

 //!removeAllproductToCart
 removeAllproductToCart(): Observable<any> {
  return this._HttpClient.delete( `${environment.BaseUrl}/api/v1/cart`,

  );
    }   
  

  
}
