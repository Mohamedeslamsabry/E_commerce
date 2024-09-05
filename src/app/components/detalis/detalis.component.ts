import { resolve } from 'node:path';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalis',
  standalone: true,
  imports: [ CarouselModule  ],
  templateUrl: './detalis.component.html',
  styleUrl: './detalis.component.scss'
})
export class DetalisComponent implements OnInit , OnDestroy {
private readonly _ProductService=inject(ProductService);
private readonly _ActivatedRoute=inject(ActivatedRoute)

detalisData:Iproduct|null =null;
datadetailsSub!:Subscription 

id:string|null='';
detailsSub!:Subscription;

isloading:boolean=false;

ngOnInit(): void {

/* this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
          let id=params.get('id');
         //! call api
         this.datadetailsSub=this._ProductService.SubseficProduct(id).subscribe({
          next:(res)=>{
            this.detalisData=res.data;

          },
          error:(err)=>{
          }
         })
      }
})   */


   //! Resolve Guard    
  this.detailsSub= this._ActivatedRoute.data.subscribe({
  next:(resolvedata)=>{
    this.detalisData=resolvedata['datadetails']['data']
  }
})

}


ngOnDestroy(): void {
    /*   this.datadetailsSub.unsubscribe()  */
   this.detailsSub.unsubscribe() 
}


customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true


}

private readonly _CartService=inject(CartService);
private _ToastrService=inject(ToastrService)
private _Router=inject(Router)

//!add to cart
addproducttocart(id:string)
{
  this.isloading=true;
  this._CartService.AddproductToCart(id).subscribe({
     next:(res)=>{
    this.isloading=false;
     /* this._CartService.numberofcart.next(res.numOfCartItems) */
     this._CartService.numberofcart.set(res.numOfCartItems)

      this._ToastrService.success(res.message,'',{
        positionClass:'toast-top-right'
      })
      this._Router.navigate(['/cart'])

     },
     error:(err)=>{
  this.isloading=false;

      console.log(err);
     }
   }) 
}

}
