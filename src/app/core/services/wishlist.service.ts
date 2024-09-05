import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private readonly _HttpClient = inject(HttpClient);


  //! AddproductToWishlis
 AddproductToWishlist(Id: string): Observable<any> {
    return this._HttpClient.post( `${environment.BaseUrl}/api/v1/wishlist`,
      { productId: Id },    //!Body
    );
  };

 //! AddproductToWishlis
 RemoveproductToWishlist(id:string): Observable<any> {
  return this._HttpClient.delete( `${environment.BaseUrl}/api/v1/wishlist/${id}`,
  )
};


 //! AddproductToWishlis
 GetproductToWishlist(): Observable<any> {
return this._HttpClient.get( `${environment.BaseUrl}/api/v1/wishlist`,
  )
};

}
