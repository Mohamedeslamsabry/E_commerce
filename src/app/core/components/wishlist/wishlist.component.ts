import { Component, computed, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Iwashlist } from '../../interfaces/iwashlist';
import { SharedproductComponent } from "../sharedproduct/sharedproduct.component";
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [SharedproductComponent,RouterLink,AsyncPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {

private readonly _WishlistService=inject(WishlistService);
private readonly _ToastrService=inject(ToastrService);

loadwishlist:boolean=false;

removetowishlist(id:string){
  this._WishlistService.RemoveproductToWishlist(id).subscribe({
    next:(res)=>{
       this._ToastrService.success(res.message);
       this.Gettowishlist();
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

Allwishlist:Iwashlist[]=[];

allproduct!:number


Gettowishlist(){
  this._WishlistService.GetproductToWishlist().subscribe({
    next:(res)=>{
     this.loadwishlist=true;
     this.Allwishlist=res.data;
     this.allproduct=this.Allwishlist.length; 
    },
    error:(err)=>{
      console.log(err);
    }
  })
}




ngOnInit(): void {
    this.Gettowishlist()
}

 //!add to cart
 private readonly _CartService=inject(CartService)
 private readonly _Router=inject(Router)
 addproducttocart(id:string)
 {
   this._CartService.AddproductToCart(id).subscribe({
      next:(res)=>{
        this._CartService.numberofcart.set(res.numOfCartItems);
        this._Router.navigate(['/cart'])
       this._ToastrService.success(res.message,'',{
         positionClass:'toast-top-right'
       })         
      },
      error:(err)=>{
       console.log(err);
      }
    }) 
 }


counter:WritableSignal<number>=signal(0)

changecounter():void{
this.counter.update((num)=>num+1)
}


name:WritableSignal<string>=signal('')

changeName():void{
  this.name.set('mohamed Eslam')
  }


}
